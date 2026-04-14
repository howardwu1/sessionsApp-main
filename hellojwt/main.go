package main

import (
		"fmt"
		"github.com/dgrijalva/jwt-go"
		"github.com/aws/aws-lambda-go/events"
		"github.com/aws/aws-lambda-go/lambda"
		"os"
		"log"
		"strings"
	)

func HandleRequest(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	fmt.Println("starting")
	jwtToken := req.Headers["Authorization"][7: ]

      fmt.Println(jwtToken)
      jwtclaims,ok :=  extractClaims(jwtToken)


      if ok==true {

	      fmt.Println(jwtclaims)

	      if strings.Contains(jwtclaims["sub"].(string),"admin-hello"){
		      fmt.Println("hello --you are an admin")
	      } else if strings.Contains(jwtclaims["sub"].(string),"basic user"){
		      fmt.Println("hello -- you are a basic user")
	      } else{
		      fmt.Println("hello -- I don't recognize your role")
	      }

	      return events.APIGatewayProxyResponse{
		      StatusCode: 200,Body: "username:" + jwtclaims["username"].(string),
	   }, nil
	} else{
            return events.APIGatewayProxyResponse{
	       StatusCode: 403,
		Body: "Expired or invalid token",
	        }, nil
	}
}

func extractClaims(tokenStr string) (jwt.MapClaims, bool) {
        hmacSecretString :=  os.Getenv("JWTKEY")
	        hmacSecret := []byte(hmacSecretString)
	        token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
		             // check token signing method etc
          return hmacSecret, nil
	          })

          if err != nil {
              return nil, false
		    }

              if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
                 return claims, true
          } else {
	             log.Printf("Invalid JWT Token")
	          return nil, false
																			          }
      }


func main(){ 
		lambda.Start(HandleRequest)
	}
