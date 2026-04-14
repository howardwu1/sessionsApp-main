package main

import (
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"fmt"
	"encoding/json"
	"net/http"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	 // "github.com/aws/aws-sdk-go/aws/credentials"
	//"log"
	"github.com/dgrijalva/jwt-go"
	//"github.com/aws/aws-sdk-go/service/lambda"
	"howardtest/creds"
	"errors"
	"io/ioutil"
	"time"
	"github.com/google/go-cmp/cmp"
	//"reflect"
	//"strings"
)

type jwtResponse struct {
    StatusCode int                     `json:"statusCode"`
    Body       string                  `json:"body"`
}

// GoogleClaims -
type GoogleClaims struct {
	Email         string `json:"email"`
	EmailVerified bool   `json:"email_verified"`
	FirstName     string `json:"given_name"`
	LastName      string `json:"family_name"`
	jwt.StandardClaims
}

type Record struct{
        Key             string
        Username        string
        Subject         string
}

type Claims struct {
        Username string `json:"username"`
        jwt.StandardClaims
}

var sess *session.Session
var svc dynamodbiface.DynamoDBAPI

func init() {
        sess, svc = creds.DynamoDBSetup()
}

func getGooglePublicKey(keyID string) (string, error) {
	resp, err := http.Get("https://www.googleapis.com/oauth2/v1/certs")
	if err != nil {
		return "", err
	}
	dat, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	myResp := map[string]string{}
	err = json.Unmarshal(dat, &myResp)
	if err != nil {
		return "", err
	}
	key, ok := myResp[keyID]
	if !ok {
		return "", errors.New("key not found")
	}
	return key, nil
}

func ValidateClaimsGoogleJWT(claims *GoogleClaims) (bool, error){

 	if claims.Issuer != "accounts.google.com" && claims.Issuer != "https://accounts.google.com" {
                return false, errors.New("iss is invalid")
        }

        if claims.Audience != "222585927316-l7u0i85iuu3la1putev56uv5hs4mhikl.apps.googleusercontent.com" && claims.Audience != "222585927316-lsc2c15df09qpqtdr0cft0r2tat4bh3d.apps.googleusercontent.com" && claims.Audience != "222585927316-pqvqfs0atns52apevh10lk3dhrgj7nm3.apps.googleusercontent.com" {
                return false, errors.New("aud is invalid")
        }

        if claims.ExpiresAt < time.Now().UTC().Unix() {
                return false, errors.New("JWT is expired")
        }	
	return true, nil
}

func ValidateGoogleJWT(tokenString string) (GoogleClaims, error) {
	claimsStruct := GoogleClaims{}

	token, err := jwt.ParseWithClaims(
		tokenString,
		&claimsStruct,
		func(token *jwt.Token) (interface{}, error) {
			pem, err := getGooglePublicKey(fmt.Sprintf("%s", token.Header["kid"]))
			
			if err != nil {
				return nil, err
			}
			key, err := jwt.ParseRSAPublicKeyFromPEM([]byte(pem))
			if err != nil {
				return nil, err
			}
			fmt.Println(key)
			return key, nil
		},
	)
	if err != nil {
		return GoogleClaims{}, err
	}

	claims, ok := token.Claims.(*GoogleClaims)
	
	if !ok {
		return GoogleClaims{}, errors.New("Invalid Google JWT")
	}

	ok, err = ValidateClaimsGoogleJWT(claims)
	
	if !ok{
		return GoogleClaims{}, err
	}

	return *claims, nil
}

func ClientError(status int) (events.APIGatewayProxyResponse, error) {
        return events.APIGatewayProxyResponse{
        StatusCode: status,
        Body:       http.StatusText(status),
        }, nil
}

func HandleRequest(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	jwtToken, _ := creds.ParseToken(req)

	fmt.Println("parsed token: " + jwtToken)
        jwtclaims,err := ValidateGoogleJWT(jwtToken)

	if err==nil{
              fmt.Println(jwtclaims)

	      input := &dynamodb.GetItemInput{
	        Key: map[string]*dynamodb.AttributeValue{
                        "Username": {
                //instead of "username" we use the "Email" field
				S: aws.String(jwtclaims.Email),
                        },
                },
                TableName: aws.String("Users"),
              }

	      result, err := svc.GetItem(input)

	      if err != nil{
		fmt.Println("Error with doing a get item on dynamodb")
		return creds.ClientError(500)
	      }

	      empty := dynamodb.GetItemOutput{};

	      if cmp.Equal(*result, empty){
		fmt.Println("User doesn't exist")
		return creds.ClientError(403)
	      }

	      rec := Record{}

	      err = dynamodbattribute.UnmarshalMap(result.Item, &rec)

	      if err!=nil{
                panic(fmt.Sprintf("failed dynamodbattribute.MarshalMap"))
              }

		jwtToken, err := creds.IssueJwtToken(rec.Username, rec.Subject)

		if (err !=nil){
			return ClientError(403)
		}
		return events.APIGatewayProxyResponse{
                      StatusCode: http.StatusOK,
		      Body:	  jwtToken,
           }, nil
        } else{
            return events.APIGatewayProxyResponse{
               StatusCode: 403,
                Body: "Expired or invalid token",
                }, err
        }
}

func main(){
                lambda.Start(HandleRequest)
        }
