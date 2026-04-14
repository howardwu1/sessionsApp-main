
package creds


import (
	"github.com/aws/aws-lambda-go/events"
	"fmt"
	"encoding/json"
	"net/http"
	"os"
	//"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/aws"
	 "github.com/aws/aws-sdk-go/service/dynamodb"
	  "github.com/aws/aws-sdk-go/aws/credentials"
	"log"
	"github.com/dgrijalva/jwt-go"
	"github.com/aws/aws-sdk-go/service/lambda"
	"time"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"
)

type Claims struct {
        Username string `json:"username"`
        jwt.StandardClaims
}

type Credentials struct {
	        Login    string `json:"login"`
		Password string `json:"password"`
		RememberedUser bool `json:"rememberedUser"`
}

type jwtResponse struct {
    StatusCode int                     `json:"statusCode"`
    Body       string                  `json:"body"`
}

func GetListOfUsersWithSameInviteCode(inviteCode string, svc dynamodbiface.DynamoDBAPI) (*dynamodb.QueryOutput, error) {
        input := &dynamodb.QueryInput{
                        ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
                                ":aninvitecode": {
                                S: aws.String(inviteCode),
                                },
                        },
                        KeyConditionExpression: aws.String("InviteCode = :aninvitecode"),
                        ProjectionExpression: aws.String("Username"),
                        TableName: aws.String("Users"),
                        IndexName: aws.String("InviteCodeIndex"),
                }

        return svc.Query(input)

}

func ParseCredentials(req events.APIGatewayProxyRequest) (*Credentials, error) {
        credentials := &Credentials{
                Login:    "",
                Password: "",
		RememberedUser: false,
        }

        err := json.Unmarshal([]byte(req.Body), credentials)
                                //err := json.Unmarshal([]byte(req.Body), credentials)

        if err!= nil{
                fmt.Println("Error:", err.Error())
        }

        return credentials, err

}

func ExtractClaimsFromRequest(req events.APIGatewayProxyRequest) (jwt.MapClaims, bool){
	token, _ := ParseToken(req)
	return ExtractClaims(token)
}

func ParseToken(req events.APIGatewayProxyRequest) (string, error) {
//todo -- improve?	
	headers := &map[string]string{}

	headers = &req.Headers;

	token := (*headers)["Authorization"][7:]

	return token, nil
}

func ExtractClaims(tokenStr string) (jwt.MapClaims, bool) {
        hmacSecretString :=  os.Getenv("JWTKEY")
         hmacSecret := []byte(hmacSecretString)
         token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
                             // check token signing method etc
          return hmacSecret, nil
                  })

          if err != nil {
              return nil, false
                    }

              if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
                 return claims, true
          } else {
                     log.Printf("Invalid JWT Token")
                  return nil, false
              }
}

func ClientError(status int) (events.APIGatewayProxyResponse, error) {
        return events.APIGatewayProxyResponse{
        StatusCode: status,
        Body:       http.StatusText(status),
        }, nil
}

func HelperGetNewJwt()(string){
        os.Setenv("JWTKEY", "test1")
        fmt.Println("JWTKEY:" + os.Getenv("JWTKEY"))

        //make sure that you have a recent token here
        //we will grab it from an existing lambda function we already made (my-function-go-jwt)
        sess := session.Must(session.NewSessionWithOptions(session.Options{
                    SharedConfigState: session.SharedConfigEnable,
            }))

        client := lambda.New(sess, &aws.Config{
                Region: aws.String("us-east-1"),
                Endpoint: aws.String("http://0.0.0.0:4566"),
        })


        request := events.APIGatewayProxyRequest{Body: "{\"Login\":\"test2\", \"Password\": \"meh\"}", Headers: nil}
        payload, err := json.Marshal(request)

        if err!=nil{
           fmt.Println(err)
        }

        result, err := client.Invoke(&lambda.InvokeInput{FunctionName: aws.String("my-function-go-jwt"), Payload: payload})

        if err !=nil {
                fmt.Println(err)
        }

        var resp jwtResponse

        _ = json.Unmarshal(result.Payload, &resp)


        return resp.Body
}

func IssueJwtToken(login string, subject string, rememberedUser bool) (string, error) {
        jwtKey := []byte(os.Getenv("JWTKEY"))
	
	expirationTime := time.Now()
	if (rememberedUser){
	 expirationTime = time.Now().AddDate(1,0,0)
	}else{

        expirationTime = time.Now().Add(2 * time.Hour)
	}

	fmt.Println(expirationTime.Unix())

	claims := &Claims{
                Username: login,
                StandardClaims: jwt.StandardClaims{
                        ExpiresAt: expirationTime.Unix(),
                        Subject: subject,
                },
        }
        token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

        return token.SignedString(jwtKey)
}

func DynamoDBSetup() (*session.Session, *dynamodb.DynamoDB){
        val, _:= os.LookupEnv("AWS_REGION")
	endpoint, _:= os.LookupEnv("LOCALSTACK_HOSTNAME")

	sess := session.Must(session.NewSession(aws.NewConfig().WithMaxRetries(3).WithCredentialsChainVerboseErrors(true).WithRegion(val).WithEndpoint("http://"+endpoint+":4566").WithCredentials(credentials.NewStaticCredentials("test", "test", "")),))
	return sess, dynamodb.New(sess)
}
