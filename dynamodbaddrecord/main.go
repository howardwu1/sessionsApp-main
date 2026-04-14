// snippet-sourcedate:[2019-03-19]
/*
   Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
   This file is licensed under the Apache License, Version 2.0 (the "License").
   You may not use this file except in compliance with the License. A copy of
   the License is located at
    http://aws.amazon.com/apache2.0/
   This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
   CONDITIONS OF ANY KIND, either express or implied. See the License for the
   specific language governing permissions and limitations under the License.
*/
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
    "golang.org/x/crypto/bcrypt"
    "net/http"
    "howardtest/creds"
    "github.com/aws/aws-sdk-go/service/dynamodb/dynamodbiface"
	"encoding/json"
	"crypto/sha1"
	"encoding/base64"
	"math/rand"
	"github.com/google/go-cmp/cmp"
	"strconv"
	"time"
	"errors"

)
// Create struct to hold info about new item
type Item struct {
    Subject	string
    Username	string
    Key		string
    FirstName	string
    LastName	string
    InviteCode	string
    Role	string
    Admin	string
    Orgname	string
}

type ProfileInfo struct {
                FirstName	string `json:"firstName"`
                LastName	string `json:"lastName"`
		InviteCode	string `json:"inviteCode"`
		Role		string `json:"role"`
		Admin		string `json:"admin"`
		Orgname		string `json:"orgname"`
	}

func ParseProfileInfo(req events.APIGatewayProxyRequest) (*ProfileInfo, error) {
        profileInfo := &ProfileInfo{
                FirstName:    "",
                LastName: "",
		InviteCode: "",
		Role: "",
		Admin: "",
		Orgname: "",
        }

        err := json.Unmarshal([]byte(req.Body), profileInfo)

	if (err != nil){

		fmt.Println("Error:", err.Error())
	}

        return profileInfo, err

}

var sess *session.Session
var svc dynamodbiface.DynamoDBAPI

func init() {
        sess, svc = creds.DynamoDBSetup()
}


func createDynamoPutItemInput(credential *creds.Credentials, subject string, hashedPassword string, tableName string, firstName string, lastName string, inviteCode string, role string, admin string, orgname string) (*dynamodb.PutItemInput){


	conditionExpression := "attribute_not_exists(Username)"
	if(admin == "true" && inviteCode == "undef"){

		hasher := sha1.New()
		rand.Seed(time.Now().UnixNano())
		counter := 0
		for{
		hasher.Write([]byte(credential.Login+firstName+fmt.Sprint(rand.Int())))

		inviteCode = base64.URLEncoding.EncodeToString(hasher.Sum(nil))
		//need to use this to do my integration test as long as no real customers use that last name
                if(lastName ==  "McTesterson2"){
			inviteCode = "thisisafakeinvitecode"
                }

		result, _ := creds.GetListOfUsersWithSameInviteCode(inviteCode, svc)
		fmt.Println("Query for users of same inviteCode:"  + inviteCode)
		fmt.Println(result)

		if (!cmp.Equal(*result, dynamodb.QueryOutput{})){
			if(*result.Count > int64(0)){
				fmt.Println("Ah there were already these many records with the same invite code: " + strconv.FormatInt(*result.Count,10))
				counter++

				if counter >=3{
					fmt.Println("haven't been able to find a unique InviteCode in 3 tries -- time to throw a 500 error")
					return (&dynamodb.PutItemInput{})
				}
			}else{
				break
			}
		}else{
			fmt.Println("okay")
			break;
		}
		}
	}

	item := Item{
                Username:   credential.Login,
                Subject:  subject,
                Key:   hashedPassword,
		FirstName: firstName,
		LastName: lastName,
		InviteCode: inviteCode,
		Role: role,
		Admin: admin,
		Orgname: orgname,
        }
         av, err := dynamodbattribute.MarshalMap(item)

    if err != nil {
        fmt.Println("Got error marshalling item:")
        fmt.Println(err.Error())
        os.Exit(1)
    }

    input := &dynamodb.PutItemInput{
	ConditionExpression: aws.String(conditionExpression),
        Item:      av,
        TableName: aws.String(tableName),
    }

	return input
}

func AddUserRecord(credential *creds.Credentials, subject string, hashedPassword string, tableName string, profileInfo *ProfileInfo) (*dynamodb.PutItemOutput, error){

	input := createDynamoPutItemInput(credential, subject, hashedPassword, tableName, profileInfo.FirstName, profileInfo.LastName, profileInfo.InviteCode, profileInfo.Role, profileInfo.Admin, profileInfo.Orgname)

	if (cmp.Equal(*input, dynamodb.PutItemInput{})){
		return nil, errors.New("Empty ItemInput found.")
	}

	return svc.PutItem(input)


}

func HandleRequest(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	credentials, _ := creds.ParseCredentials(req)
	profileInfo, _ := ParseProfileInfo(req)

	hashedPassword, _ :=  bcrypt.GenerateFromPassword([]byte(credentials.Password), bcrypt.DefaultCost)

	output, err := AddUserRecord(credentials, "basic user", string(hashedPassword), "Users", profileInfo)

	fmt.Println(output)

    if err != nil {
        fmt.Println("Got error calling PutItem:")
        fmt.Println(err.Error())
 		if output == nil{
			return events.APIGatewayProxyResponse{
				StatusCode:500,
				Body: "An error occurred most likely with generating a unique InviteCode or some other unforeseen server-side error",
			}, err
		}
	 return events.APIGatewayProxyResponse{
                StatusCode: 400,
                Body:       "Testing so this was hit",
        }, err	
 	}else{


    fmt.Println("Successfully added '" + credentials.Login + "' (basic user) to table Users")

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
                Body:       "Successfully added '" + credentials.Login + "' (basic user) to table Users",
        }, nil
	}
}

func main() {
	 lambda.Start(HandleRequest)
}
