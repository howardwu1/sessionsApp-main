package main

import(
	"testing"
	"github.com/aws/aws-lambda-go/events"
	"fmt"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/aws"
)

var item *dynamodb.GetItemOutput

type mockDynamoDBClient struct {
	    dynamodbiface.DynamoDBAPI
}

func TestHandleRequest(t *testing.T){
	//mockSvc := mockDynamoDBClient{}
	svc = &mockDynamoDBClient{}

	testReq := new (events.APIGatewayProxyRequest)
	testReq.Body =  "{\"Login\":\"test2\", \"Password\": \"meh\"}"

	item = new (dynamodb.GetItemOutput)
        item.Item = map[string]*dynamodb.AttributeValue{
                "Key": { S: aws.String("$fakassstring/asdfkdj")},
                "Username": {S: aws.String( "usernameTest")},
                "Subject": {S: aws.String("subjecttest")},
        }
	result, _ := HandleRequest(*testReq)

	if result.StatusCode != 403{
		t.Errorf("Login should have failed but didn't!")
	}

	binaryString := "$2a$10$vP1nWLkgiJDUct88.uEwbezrGmX.V9u/EmbZjwCehuzpdLK1mdGPm"

	item.Item = map[string]*dynamodb.AttributeValue{
		"Key": { S: aws.String(binaryString)},
                "Username": {S: aws.String( "usernameTest")},
                "Subject": {S: aws.String("subjecttest")},
        }
        result, _ = HandleRequest(*testReq)


	if result.StatusCode != 200{
                t.Errorf("Login should have succeeded but different")
        }
	//fmt.Println(result.Body)

	fmt.Println("Test case 2: remembered user")
	testReq.Body = "{\"Login\":\"test2\", \"Password\": \"meh\", \"RememberedUser\": true}"

	result, _ = HandleRequest(*testReq)

}

func (mockSvc *mockDynamoDBClient) GetItem(input *dynamodb.GetItemInput) (*dynamodb.GetItemOutput, error){
	return item, nil
}
