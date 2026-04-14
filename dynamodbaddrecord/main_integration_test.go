// +build integration

package main

import(
	"testing"
	//"fmt"
	"github.com/aws/aws-lambda-go/events"
	"howardtest/creds"
	//"os"
	"github.com/aws/aws-sdk-go/aws/awserr"
	//"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"
	//"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/aws"
)


func init() {
	        sess, svc = creds.DynamoDBSetup()
}

func TestHandleRequest(t *testing.T){

	//test case 1: trying to test duplicate username 

        testReq := new (events.APIGatewayProxyRequest)
	testReq.Body = "{\"login\":\"test2\", \"password\": \"meh\", \"firstName\" : \"Test\", \"lastName\" : \"McTesterson\", \"inviteCode\" : \"testcase1invitecode\", \"role\":\"tester\", \"admin\": \"true\", \"orgname\" :\"undef\"}"

	response, err := HandleRequest(*testReq)

	if err==nil{
		t.Error("A condition check failed exception should have been thrown but wasn't")
	}else{
		if err.(awserr.Error).Code() != "ConditionalCheckFailedException" {
			t.Error("An error was thrown but it wasn't a Conditon check failed exception!")
		}
	}

	if response.StatusCode!=400{
		t.Error("response should be a 400")
	}

	//test case 2: existing invite code for a new org

	testReq.Body = "{\"login\":\"test3\", \"password\": \"meh\", \"firstName\" : \"Test\", \"lastName\" : \"McTesterson2\", \"inviteCode\" : \"undef\", \"role\":\"tester\", \"admin\": \"true\", \"orgname\" : \"myorgname\"}"

	response, err = HandleRequest(*testReq)

	if err!=nil{
		t.Error("There should not have been any error")
	}

	testReq.Body = "{\"login\":\"test4\", \"password\": \"meh\", \"firstName\" : \"Test\", \"lastName\" : \"McTesterson2\", \"inviteCode\" : \"undef\", \"role\":\"tester\", \"admin\": \"true\", \"orgname\": \"myorgname\"}"

        response, err = HandleRequest(*testReq)

        if err==nil{
                t.Error("There should have been an error")

        }else{
		if response.StatusCode != 500 {
			t.Error("Response code for this error should have been 500!")
		}
	}

	//test case 2 cleanup --delete test3 and test4 usernames:

	deleteInput := &dynamodb.DeleteItemInput{
	    Key: map[string]*dynamodb.AttributeValue{
		"Username": {
		 S: aws.String("test3"),
			},
		},
		TableName: aws.String("Users"),
	}
	svc.DeleteItem(deleteInput)

	deleteInput = &dynamodb.DeleteItemInput{
            Key: map[string]*dynamodb.AttributeValue{
                "Username": {
                 S: aws.String("test4"),
                        },
                },
                TableName: aws.String("Users"),
        }
	
	svc.DeleteItem(deleteInput)
}


