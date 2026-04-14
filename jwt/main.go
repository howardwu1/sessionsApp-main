package main

import (
	"net/http"
	//"os"
	//"time"
        "fmt"
	"golang.org/x/crypto/bcrypt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	//"github.com/dgrijalva/jwt-go"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"
	"github.com/howardwu1/sessionsApp"
)

type Record struct{
	Key		string
	Username	string
	Subject		string

}

//after testing, delete
//type Claims struct {
//	Username string `json:"username"`
//	jwt.StandardClaims
//}

var sess *session.Session
var svc dynamodbiface.DynamoDBAPI

func init() {
	sess, svc = creds.DynamoDBSetup()
}

//after testing delete
//func issueJwtToken(login string, subject string) (string, error) {
//	jwtKey := []byte(os.Getenv("JWTKEY"))
//	expirationTime := time.Now().Add(2 * time.Hour)
//	claims := &Claims{
//		Username: login,
//		StandardClaims: jwt.StandardClaims{
//			ExpiresAt: expirationTime.Unix(),
//			Subject: subject,
//		},
//	}
//	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

//	return token.SignedString(jwtKey)
//}


func HandleRequest(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	fmt.Println(req)
	credentials, err := creds.ParseCredentials(req)

	fmt.Println(credentials)
	if err!= nil {
		return events.APIGatewayProxyResponse{},err
	}

	input := &dynamodb.GetItemInput{
		Key: map[string]*dynamodb.AttributeValue{
			"Username": {
			S: aws.String(credentials.Login),
			},
		},
		TableName: aws.String("Users"),
	}

	result, err := svc.GetItem(input)

	if(err !=nil){
		fmt.Println("User doesn't exist in the database \"Users\"")
		 return creds.ClientError(http.StatusForbidden)
	}
	rec := Record{}

	err = dynamodbattribute.UnmarshalMap(result.Item, &rec)

	password := rec.Key

	if err!=nil{
		panic(fmt.Sprintf("failed dynamodbattribute.MarshalMap"))
	}

	err = bcrypt.CompareHashAndPassword([]byte(password), []byte(credentials.Password))

	if err!=nil {
		return creds.ClientError(http.StatusForbidden)
	}else{
		fmt.Println(credentials.RememberedUser)
		jwtToken, err := creds.IssueJwtToken(rec.Username, rec.Subject, credentials.RememberedUser)
		if err==nil{
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusOK,
				Body:       jwtToken,
			}, nil
		}
	}
	return creds.ClientError(http.StatusForbidden)
}

func main() {
	lambda.Start(HandleRequest)
}

