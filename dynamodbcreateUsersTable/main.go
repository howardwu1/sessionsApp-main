package main

import (
	"fmt"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
)

func main() {

	config := &aws.Config{
		Region:   aws.String("us-east-1"),
		Endpoint: aws.String("http://0.0.0.0:4566"),
	}

	sess := session.Must(session.NewSession(config))

	svc := dynamodb.New(sess)

	input := &dynamodb.CreateTableInput{
		AttributeDefinitions: []*dynamodb.AttributeDefinition{
			{
				AttributeName: aws.String("Username"),
				AttributeType: aws.String("HASH"),
			},
		},
		KeySchema: []*dynamodb.KeySchemaElement{
 			{
                                AttributeName: aws.String("Username"),
                                KeyType:       aws.String("HASH"),
                        },
		},
		ProvisionedThroughput: &dynamodb.ProvisionedThroughput{
			ReadCapacityUnits:  aws.Int64(10),
			WriteCapacityUnits: aws.Int64(10),
		},
		TableName: aws.String("Users"),
	}

	result, err := svc.CreateTable(input)
	if err != nil {
		fmt.Println(err.Error())
		return
	}

	fmt.Println(result)
}
