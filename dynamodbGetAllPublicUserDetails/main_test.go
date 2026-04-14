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

//var items *dynamodb.ScanOutput
var items *dynamodb.QueryOutput

type mockDynamoDBClient struct {
            dynamodbiface.DynamoDBAPI
}

func TestHandleRequest(t *testing.T){
        svc = &mockDynamoDBClient{}
	
	tokenStr := creds.HelperGetNewJwt()
        testReq := new (events.APIGatewayProxyRequest)
	testReq.Headers =  map[string]string{"Authorization": "Bearer " + tokenStr,}
	
	testReq.Body = "{\"InviteCode\": \"" + "thisisafakeinvite" + "\"}"

	//items = new (dynamodb.ScanOutput)
        items = new (dynamodb.QueryOutput)
	items.Items =[]map[string]*dynamodb.AttributeValue{}
/*
	items.Items = append(items.Items, map[string]*dynamodb.AttributeValue{
                "Username": {S: aws.String("usernameTest")},

	})
	*/
	items.Items = append(items.Items, map[string]*dynamodb.AttributeValue{
			 "Username": {S: aws.String("usernameTest2")},
		 })
	/*
		 items.Items = append(items.Items, map[string]*dynamodb.AttributeValue{
			 "Username": {S: aws.String("usernameTest3")},
		  })
*/

        result, _ := HandleRequest(*testReq)


        if result.StatusCode != 200{
                t.Errorf("Login should have succeeded but different")
        }
	if result.Body !=`[{"Username":"usernameTest2"}]`{
		t.Errorf("Usernames retrieved do not match usertest, usertest2, usertest3 expected output")
	}
        fmt.Println(result.Body)

}

func (mockSvc *mockDynamoDBClient) Query(input *dynamodb.QueryInput) (*dynamodb.QueryOutput, error){
        return items, nil
}
