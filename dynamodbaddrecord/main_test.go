
package main

import (
	"testing"
	"github.com/aws/aws-lambda-go/events"
	"howardtest/creds"
	)

func TestParseProfileInfo(t *testing.T){

	 testReq := new (events.APIGatewayProxyRequest)
	 testReq.Body =  "{\"Login\":\"test2\", \"Password\": \"meh\", \"firstName\" : \"Tester\", \"lastName\" : \"McTesterson\", \"inviteCode\" : \"thisisaninvitecode\", \"role\": \"softwaredev\", \"admin\": \"true\"}"
	profileInfo,_ := ParseProfileInfo(*testReq)

	if (profileInfo.FirstName != "Tester"){
		t.Errorf("FirstName should be Tester")
	}

	if (profileInfo.LastName != "McTesterson"){
		t.Errorf("LastName should be McTesterson")
	}
	if (profileInfo.InviteCode != "thisisaninvitecode"){
		t.Errorf("InviteCode should be thisisaninvitecode")
	}
	if (profileInfo.Role != "softwaredev"){
		t.Errorf("Role should be softwaredev")
	}

	if (profileInfo.Admin != "true"){
		t.Errorf("Admin should be true")
	}


}

func TestCreateDynamoPutItemInput(t *testing.T){

	testReq := new (events.APIGatewayProxyRequest)
	testReq.Body =  "{\"Login\":\"test2\", \"Password\": \"meh\", \"firstName\" : \"Tester\", \"lastName\" : \"McTesterson\", \"role\": \"softwaredev\", \"inviteCode\" : \"thisisaninvitecode\", \"Admin\": \"true\", \"orgname\": \"myorgname\"}"

        credentials, _ := creds.ParseCredentials(*testReq)
	profileInfo := ProfileInfo{
		FirstName: "Tester",
		LastName: "McTesterson",
		InviteCode: "thisisaninvitecode",
		Role: "softwaredev",
		Admin: "true",
		Orgname: "myorgname",
	}

        hashedPassword :=  []byte("hellothisiafakestring")
	putItemIn := createDynamoPutItemInput(credentials, "basic user", string(hashedPassword), "users", profileInfo.FirstName, profileInfo.LastName, profileInfo.InviteCode, profileInfo.Role, profileInfo.Admin, profileInfo.Orgname)

	if *putItemIn.TableName !="users" {
		t.Errorf("Input has the wrong table name, instead it was %s", *putItemIn.TableName)
	}
	if *putItemIn.Item["Username"].S != credentials.Login {
		t.Errorf("Input has the wrong username, instead it was %s", *putItemIn.Item["Username"])
	}
	if *putItemIn.Item["Subject"].S != "basic user"{
		t.Errorf("Wrong subject, it was %s", *putItemIn.Item["Subject"].S)
	}

	if *putItemIn.Item["Role"].S != "softwaredev"{
		t.Errorf("Wrong role, instead it was %s", *putItemIn.Item["Role"])
	}

	if *putItemIn.Item["FirstName"].S != "Tester"{
                t.Errorf("Wrong firstname, instead it was %s", *putItemIn.Item["FirstName"])
        }

	if *putItemIn.Item["LastName"].S != "McTesterson"{
                t.Errorf("Wrong lastname, instead it was %s", *putItemIn.Item["LastName"])
        }

	if *putItemIn.Item["InviteCode"].S != "thisisaninvitecode"{
                t.Errorf("Wrong invite code, instead it was %s", *putItemIn.Item["InviteCode"])
        }
	if string(*putItemIn.Item["Key"].S) != string(hashedPassword){
		t.Errorf("Wrong hashed password stored as the key!")
	}

	if *putItemIn.Item["Admin"].S != "true"{
		t.Errorf("Wrong admin value")
	}

	if *putItemIn.Item["Orgname"].S != "myorgname"{
		t.Errorf("Wrong orgname value")
	}

	testReq.Body =  "{\"Login\":\"test2\", \"Password\": \"meh\", \"firstName\" : \"Tester\", \"lastName\" : \"McTesterson\", \"role\": \"softwaredev\", \"inviteCode\" : \"undef\", \"Admin\": \"true\", \"Orgname\":\"myorgname\"}"

        credentials, _ = creds.ParseCredentials(*testReq)
        profileInfo = ProfileInfo{
		FirstName: "Tester:",
                LastName: "McTesterson",
                InviteCode: "undef",
                Role: "softwaredev",
                Admin: "true",
		Orgname: "myorgname",
        }

        hashedPassword =  []byte("hellothisiafakestring")
        putItemIn = createDynamoPutItemInput(credentials, "basic user", string(hashedPassword), "users", profileInfo.FirstName, profileInfo.LastName, profileInfo.InviteCode, profileInfo.Role, profileInfo.Admin, profileInfo.Orgname)

	if *putItemIn.Item["InviteCode"].S == "undef" || *putItemIn.Item["InviteCode"].S == ""{
                t.Errorf("Wrong invite code, instead it was %s", *putItemIn.Item["InviteCode"])
        }
}


