package main

import (
   // "github.com/aws/aws-sdk-go/aws"
    "github.com/aws/aws-sdk-go/aws/session"
    "github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
    //"github.com/aws/aws-sdk-go/service/dynamodb"
    "fmt"
    "os"
    "github.com/aws/aws-lambda-go/lambda"
    "github.com/aws/aws-lambda-go/events"
    //"golang.org/x/crypto/bcrypt"
    //"net/http"
    "howardtest/creds"
   "github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"
    "strings"
  //  "github.com/aws/aws-sdk-go/service/dynamodb/expression"
    "encoding/json"
)

var sess *session.Session
var svc dynamodbiface.DynamoDBAPI

func init() {
        sess, svc = creds.DynamoDBSetup()
}

type Record struct{
        Username        string
}

type InviteCode struct{
	InviteCode string `json:"InviteCode"`
}

func HandleRequest(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	os.Setenv("JWTKEY", "test1")

	
	claims, ok := creds.ExtractClaimsFromRequest(req)

	if ok==true{
	

		if strings.Contains(claims["sub"].(string), "admin-hello") || strings.Contains(claims["sub"].(string), "basic user"){
			//for larger organziations I will probably have to select by organization or sub organizations (like everyone in your org + technical people in other departments but not sr managers or whatever outside)
			//alternate idea would be do a query with like* on the name/username
		/*
			proj:= expression.NamesList(expression.Name("Username"))
			expr, err := expression.NewBuilder().WithProjection(proj).Build()
			if err != nil {
			   fmt.Println(err)
			}else{
				fmt.Println(expr)
			}

			tableName := "Users"
			params := &dynamodb.ScanInput{
				ExpressionAttributeNames:  expr.Names(),
				ExpressionAttributeValues: expr.Values(),
				FilterExpression:          expr.Filter(),
				ProjectionExpression:      expr.Projection(),
				TableName:                 aws.String(tableName),
			}
			result, err := svc.Scan(params)

			*/
			 inviteCodeObj := &InviteCode{
		                InviteCode:    "",
       			 }
			 fmt.Println("body: " + req.Body)
			err := json.Unmarshal([]byte(req.Body), inviteCodeObj)

			if err != nil{
				fmt.Println("errored out in the unmarshall")
			}else{
				fmt.Println(inviteCodeObj.InviteCode)
			}

			 result, err := creds.GetListOfUsersWithSameInviteCode(inviteCodeObj.InviteCode, svc)

			if err!=nil{
				fmt.Println("errored out in the GetList")
				fmt.Println(err)
			}else{
				fmt.Println(result)
				fmt.Println(result.Items)

			}
			rec := []*Record{}

			err = dynamodbattribute.UnmarshalListOfMaps(result.Items, &rec)

			if err!=nil{
				fmt.Println(err)
			}

			jsonStr, err := json.Marshal(rec)

			if err!= nil{
				fmt.Println(err)
			}

			return events.APIGatewayProxyResponse{
				StatusCode: 200, Body: string(jsonStr),
				 }, nil

		}
	}else{

	return events.APIGatewayProxyResponse{
		StatusCode: 500, Body: "Claims failed to be extracted from the request",
           }, nil
   	}

	return events.APIGatewayProxyResponse{}, nil
}

func main() {
         lambda.Start(HandleRequest)

}
