package main

import(
        "testing"
        //"github.com/aws/aws-lambda-go/events"
        //"fmt"
        //"os"
	"time"
        "github.com/dgrijalva/jwt-go"
        //"howardtest/creds"
)

/*
type GoogleClaims struct {
        Email         string `json:"email"`
        EmailVerified bool   `json:"email_verified"`
        FirstName     string `json:"given_name"`
        LastName      string `json:"family_name"`
        jwt.StandardClaims
}
*/

func TestValidateClaimsGoogleJWT(t *testing.T){
	
	goodClaims := &GoogleClaims{
		StandardClaims: jwt.StandardClaims{
			Issuer: "accounts.google.com",
			Audience:"222585927316-l7u0i85iuu3la1putev56uv5hs4mhikl.apps.googleusercontent.com",
			ExpiresAt: time.Now().UTC().Unix()+100,
		},
	}

	ok,err := ValidateClaimsGoogleJWT(goodClaims)

	if !ok {
		t.Errorf("goodClaims should have passed")

		if err == nil{
			t.Errorf("ok == false should also be accompanaied by an err")
		}
	}
	if err!= nil{
		t.Errorf("err should be nil for goodClaims")
	}
}
