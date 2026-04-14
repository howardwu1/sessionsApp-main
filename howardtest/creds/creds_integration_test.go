// +build integration

package creds

import (
        "testing"
//      "github.com/aws/aws-sdk-go/aws"
//      "github.com/aws/aws-sdk-go/aws/session"
//      "github.com/aws/aws-sdk-go/service/lambda"
//      "encoding/json"
  "github.com/aws/aws-lambda-go/events"
	"fmt"
)



func TestExtractClaimsFromRequest(t *testing.T){
        tokenStr := HelperGetNewJwt()

        testReq := new (events.APIGatewayProxyRequest)
        testReq.Headers = map[string]string{
                "Authorization": "Bearer "+tokenStr,
        }

        claims, ok := ExtractClaimsFromRequest(*testReq)

        if ok==false{
                t.Errorf("Valid token labeled as expired")
        }

        if claims["sub"]!="basic user"{
                t.Errorf("Claims sub needed to be 'basic user'")
        }

        if claims["username"]!="test2"{
                t.Errorf("Claims username should be 'test2'")
        }

}

func TestExtractClaims(t *testing.T){

        tokenStr := HelperGetNewJwt()

        fmt.Println("token: " +tokenStr)

        claims, ok := ExtractClaims(tokenStr)

        fmt.Println(claims)

        if ok==false{
                t.Errorf("Valid token labeled as expired")
        }

        if claims["sub"]!="basic user"{
                t.Errorf("Claims sub needed to be 'basic user'")
        }

        if claims["username"]!="test2"{
                t.Errorf("Claims username should be 'test2'")
        }
        //now test with a bad token

        tokenStrBad := "thistokenShouldNotWork"

        claims, ok = ExtractClaims(tokenStrBad)

        if ok ==true{
                t.Errorf("Invalid token labeled as good")
        }

        if claims!=nil{
                t.Errorf("Invalid token shouldn't have any claims but does")
        }
}
