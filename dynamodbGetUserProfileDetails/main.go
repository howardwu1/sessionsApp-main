package main

import (
    "github.com/aws/aws-sdk-go/aws"
    "github.com/aws/aws-sdk-go/aws/session"
    "github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
    "github.com/aws/aws-sdk-go/service/dynamodb"
    "fmt"
    "os"
    "github.com/aws/aws-lambda-go/lambda"
    "github.com/aws/aws-lambda-go/events"
    //"golang.org/x/crypto/bcrypt"
    //"net/http"
    "howardtest/creds"
    "github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"
    //"strings"
    "github.com/aws/aws-sdk-go/service/dynamodb/expression"
    "encoding/json"
)

var sess *session.Session
var svc dynamodbiface.DynamoDBAPI

func init() {
        sess, svc = creds.DynamoDBSetup()
}

type Record struct{
        Username        string
	FirstName	string
	LastName	string
	InviteCode	string
	Role		string
	Admin		string
}

func HandleRequest(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	os.Setenv("JWTKEY", "test1")

	claims, ok := creds.ExtractClaimsFromRequest(req)

	if ok==true{
		fmt.Println(claims)

			filt := expression.Name("Username").Equal(expression.Value(claims["username"].(string)))
			proj:= expression.NamesList(expression.Name("Username"), expression.Name("FirstName"), expression.Name("LastName"), expression.Name("InviteCode"), expression.Name("Role"), expression.Name("Admin"))
			expr, err := expression.NewBuilder().WithFilter(filt).WithProjection(proj).Build()
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

			if err!=nil{
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
