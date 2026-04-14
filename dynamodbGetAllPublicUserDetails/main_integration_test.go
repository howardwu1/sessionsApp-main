// +build integration

package main

import(
	"testing"
	"fmt"
	"github.com/aws/aws-lambda-go/events"
	"howardtest/creds"
	//"os"
	//"github.com/dgrijalva/jwt-go"
	//"github.com/aws/aws-sdk-go/aws/awserr"
	//"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"
	//"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
	//"github.com/aws/aws-sdk-go/service/dynamodb"
	//"github.com/aws/aws-sdk-go/aws"
)


func init() {
	        sess, svc = creds.DynamoDBSetup()
}

func TestHandleRequestIntegration(t *testing.T){

	//test case 1: login with test2 and get test2 back 
        jwtToken := creds.HelperGetNewJwt()

        testReq := new (events.APIGatewayProxyRequest)
	testReq.Body = "{\"InviteCode\" :\"HLahMZtevM2vlWXlA3Ed4lxlISE=\"}"
        testReq.Headers =map[string]string{
		"Authorization": "Bearer " + string(jwtToken),
	}

	response, err := HandleRequest(*testReq)

	if err==nil{
		fmt.Println(response)

		if response.StatusCode != 200{
			t.Error("Response code for this should have been 200!")

		}

		if response.Body !=`[{"Username":"test2"}]`{
			t.Error("Response should be an array with just Username test2 in there!")
		}

	}else{
		t.Error(err)
	}


	
}


