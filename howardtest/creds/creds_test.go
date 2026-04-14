package creds

import (
	"testing"
	"reflect"
//	"github.com/aws/aws-sdk-go/aws"
//	"github.com/aws/aws-sdk-go/aws/session"
//	"github.com/aws/aws-sdk-go/service/lambda"
//	"encoding/json"
	"fmt"
	"os"
	"github.com/aws/aws-lambda-go/events"
	"net/http"
	"github.com/dgrijalva/jwt-go"
	"time"
	"math"
)

type jwtRequest struct {
	Login string
	Password string
}


func TestParseCredentials(t *testing.T){
        testReq := new (events.APIGatewayProxyRequest)
        testReq.Body = "{\"Login\":\"test2\", \"Password\": \"meh\"}"

        creds,_ := ParseCredentials(*testReq)

        if creds.Login != "test2"{
                t.Errorf("Login was not correctly parsed")
        }
        if creds.Password !="meh"{
                t.Errorf("Password was not correctly parsed")
        }
}

func TestIssueJwtToken(t *testing.T){

	fmt.Println("first Test Case -- regular token")
        jwtToken,_ := IssueJwtToken("test", "test2", false)
        hmacSecret := []byte(os.Getenv("JWTKEY"))
        token, _ := jwt.Parse(jwtToken, func(token *jwt.Token) (interface{}, error) {
                           // check token signing method etc
          return hmacSecret, nil
                  })

     claims, _ := token.Claims.(jwt.MapClaims)

        if !token.Valid{
                t.Errorf("token not valid")
        }

        if claims["sub"]!="test2"{
                t.Errorf("subject not valid")
        }

        if claims["username"]!="test"{
                t.Errorf("Username not valid")
        }

	if math.Abs(float64(time.Now().Add(2 * time.Hour).Unix()) - (claims["exp"].(float64))) >1000{
		t.Errorf("ExpiresAT time not valid")
	}

	fmt.Println("second Test Case -- long lasting token")
	jwtToken,_ = IssueJwtToken("test", "test2", true)
        hmacSecret = []byte(os.Getenv("JWTKEY"))
        token, _ = jwt.Parse(jwtToken, func(token *jwt.Token) (interface{}, error) {
                           // check token signing method etc
          return hmacSecret, nil
                  })

	claims, _ = token.Claims.(jwt.MapClaims)

	 if !token.Valid{
                t.Errorf("token not valid")
        }

        if claims["sub"]!="test2"{
                t.Errorf("subject not valid")
        }

        if claims["username"]!="test"{
                t.Errorf("Username not valid")
        }

        if math.Abs(float64(time.Now().AddDate(1,0,0).Unix()) - (claims["exp"].(float64))) >1000{
                t.Errorf("ExpiresAT time not valid")
        }

}


func TestParseToken(t *testing.T){
	testReq := new (events.APIGatewayProxyRequest)
	testReq.Headers = map[string]string{
		"Authorization": "Bearer thisIsAFakeToken1111",
	}

	token,_ := ParseToken(*testReq)

	if token != "thisIsAFakeToken1111"{
		t.Errorf("Token did not match expected")
	}
}

/*
func TestExtractClaims(t *testing.T){

	tokenStr := HelperGetNewJwt()

	fmt.Println("token: " +tokenStr)

	claims, ok := ExtractClaims(tokenStr)

	fmt.Println(claims)

	if ok==false{
		t.Errorf("Valid token labeled as expired")
	}

	if claims["sub"]!="basic user"{
		t.Errorf("Claims sub needed to be 'basic user'")
	}

	if claims["username"]!="test2"{
		t.Errorf("Claims username should be 'test2'")
	}
	//now test with a bad token

	tokenStrBad := "thistokenShouldNotWork"

	claims, ok = ExtractClaims(tokenStrBad)

	if ok ==true{
		t.Errorf("Invalid token labeled as good")
	}

	if claims!=nil{
		t.Errorf("Invalid token shouldn't have any claims but does")
	}
}
*/
/*
func TestExtractClaimsFromRequest(t *testing.T){
	tokenStr := HelperGetNewJwt()

	testReq := new (events.APIGatewayProxyRequest)
        testReq.Headers = map[string]string{
                "Authorization": "Bearer "+tokenStr,
        }

	claims, ok := ExtractClaimsFromRequest(*testReq)

	if ok==false{
                t.Errorf("Valid token labeled as expired")
        }

        if claims["sub"]!="basic user"{
                t.Errorf("Claims sub needed to be 'basic user'")
        }

        if claims["username"]!="test2"{
                t.Errorf("Claims username should be 'test2'")
        }

}
*/

func TestClientError(t *testing.T) {
    clientErr,_ := ClientError(403)

    mockErr :=  events.APIGatewayProxyResponse{
                StatusCode: 403,
                Body:  http.StatusText(403),}

  if !reflect.DeepEqual(clientErr,mockErr) {
         t.Errorf("ClientError was incorrect")
  }
}

func TestDynamoDbSetup(t *testing.T){

	sess, svc := DynamoDBSetup()


	if *sess.Config.CredentialsChainVerboseErrors != true {
		t.Errorf("sess not set up correctly to have CredentialChainVerboseErrors as true-- for debugging")
	}

	if *sess.Config.MaxRetries != 3 {
		t.Errorf("sess not configured with 3 max retries")
	}

	_, err := sess.Config.Credentials.Get()

	if err != nil {
		t.Errorf("credentials were not set up")
	}
	
	if *svc.Client.Config.CredentialsChainVerboseErrors != *sess.Config.CredentialsChainVerboseErrors{
		t.Errorf("svc didn't take up the CredentailsChainVerboseErrors option from session sess")
	}

	if svc.Client.MaxRetries() != *sess.Config.MaxRetries{
		 t.Errorf("svc didn't take up the MaxRetries option from session sess")
	 }

}
