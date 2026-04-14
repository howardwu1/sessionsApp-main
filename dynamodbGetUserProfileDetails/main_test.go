package main

import(
        "testing"
        "github.com/aws/aws-lambda-go/events"
        "fmt"
        //"os"
        //"github.com/dgrijalva/jwt-go"
        "github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"
        "github.com/aws/aws-sdk-go/service/dynamodb"
        "github.com/aws/aws-sdk-go/aws"
	"howardtest/creds"
)

var items *dynamodb.ScanOutput

type mockDynamoDBClient struct {
            dynamodbiface.DynamoDBAPI
}

func TestHandleRequest(t *testing.T){
        svc = &mockDynamoDBClient{}
	
	tokenStr := creds.HelperGetNewJwt()
        testReq := new (events.APIGatewayProxyRequest)
	testReq.Headers =  map[string]string{"Authorization": "Bearer " + tokenStr,}

	items = new (dynamodb.ScanOutput)
        items.Items =[]map[string]*dynamodb.AttributeValue{}
	items.Items = append(items.Items, map[string]*dynamodb.AttributeValue{
                "Username": {S: aws.String("usernameTest")},
		"FirstName": {S: aws.String("first")},
		"LastName": {S: aws.String("last")},
		"Role": {S: aws.String("tester")},
		"InviteCode": {S: aws.String("inviteCodeExample")},
		"Admin": {S: aws.String("true")},
		 })

        result, _ := HandleRequest(*testReq)


        if result.StatusCode != 200{
                t.Errorf("Login should have succeeded but different")
        }
	if result.Body !=`[{"Username":"usernameTest","FirstName":"first","LastName":"last","InviteCode":"inviteCodeExample","Role":"tester","Admin":"true"}]`{
		t.Errorf("Usernames retrieved do not match usertest, usertest2, usertest3 expected output. Was this: " + result.Body)
	}
        fmt.Println(result.Body)

}

func (mockSvc *mockDynamoDBClient) Scan(input *dynamodb.ScanInput) (*dynamodb.ScanOutput, error){
        return items, nil
}
