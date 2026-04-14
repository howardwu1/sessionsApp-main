awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
cd ..
lls
ls
cd jwt
ls
awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaadddd\"}}"
awslocal lambda invoke --function-name my-function-go-dynamoreg-basic --payload '{"Body": "{\"login\":\"aaa\", \"Password\": \"aa\", \"firstName\" : \"Aaa\", \"lastName\" : \"Aa\", \"inviteCode\" : \"undef\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
awslocal lambda invoke --function-name my-function-go-dynamoreg-basic --payload '{"Body": "{\"login\":\"aaa\", \"Password\": \"a\", \"firstName\" : \"Aaa\", \"lastName\" : \"Aa\", \"inviteCode\" : \"undef\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaadddd\"}}"
awslocal lambda invoke --function-name my-function-go-dynamoreg-basic --payload '{"Body": "{\"login\":\"aaa\", \"Password\": \"a\", \"firstName\" : \"Aaa\", \"lastName\" : \"Aa\", \"inviteCode\" : \"undef\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaadddd\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal lambda invoke --function-name my-function-go-dynamoreg-basic --payload '{"Body": "{\"login\":\"aaa\", \"Password\": \"a\", \"firstName\" : \"Aaa\", \"lastName\" : \"Aa\", \"inviteCode\" : \"undef\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal lambda invoke --function-name my-function-go-dynamoreg-basic --payload '{"Body": "{\"login\":\"aaa\", \"Password\": \"a\", \"firstName\" : \"Aaa\", \"lastName\" : \"Aa\", \"inviteCode\" : \"undef\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal lambda invoke --function-name my-function-go-jwt --payload '{"Body":"{\"login\":\"aaa\", \"Password\": \"a\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal lambda invoke --function-name my-function-go-dynamoreg-basic --payload '{"Body": "{\"login\":\"aaa\", \"Password\": \"a\", \"firstName\" : \"Aaa\", \"lastName\" : \"Aa\", \"inviteCode\" : \"undef\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal lambda invoke --function-name my-function-go-jwt --payload '{"Body":"{\"login\":\"aaa\", \"Password\": \"a\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"\
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
ls
cd dynamodbaddrecord/
awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
cd 
ls
cd jwt
ls
awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
ls
cd ..
ls
cd dynamodb
cd dynamodbaddrecord/
ls
vi main.go
go test
vi main.go
go test
vi main_test.go
go test
GOOS=linux go build main.go;zip go-jwt.zip main
awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
vi main_test.go
vi main.go
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
vi main_test.go 
go test
DATA_DIR=/tmp/localstack/data SERVICES=dynamodb,lambda localstack start
ls
cd jwt
ls
cd ..
ls
cd googletokenjwt/
ls
vi main.go
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
cd
ls
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
cd 
cd dynamodbaddrecord/
ls
vi main.go
ls
cd 
ls
cd googletokenjwt/
vi main.go 
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"dothewu@gmail.com\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"jeffw2609@gmail.com\"}}"
vi main.go 
cd ..
ls
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
cd 
ls
cd jwt
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"mann\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"mann\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"mannn\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\a"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
ls
vi main.go
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
cd ..
ls
cd dynamodbaddrecord/
vi main.go 
awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
vi main.go
awslocal lambda invoke --function-name my-function-go-dynamoreg-basic --payload '{"Body": "{\"login\":\"aaa\", \"Password\": \"aa\", \"firstName\" : \"Aaa\", \"lastName\" : \"Aa\", \"inviteCode\" : \"undef\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal lambda invoke --function-name my-function-go-dynamoreg-basic --payload '{"Body": "{\"login\":\"aaa\", \"Password\": \"aa\", \"firstName\" : \"Aaa\", \"lastName\" : \"Aa\", \"inviteCode\" : \"undef\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
awslocal lambda invoke --function-name my-function-go-dynamoreg-basic --payload '{"Body": "{\"login\":\"aaa\", \"Password\": \"aa\", \"firstName\" : \"Aaa\", \"lastName\" : \"Aa\", \"inviteCode\" : \"undef\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
vi main.go
GOOS=linux go build main.go;zip go-jwt.zip main
awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"aaa\"}}"
DATA_DIR=/tmp/localstack/data SERVICES=dynamodb,lambda localstack start
cd googletokenjwt/
vi main.go
GOOS=linux go build main.go;zip go-jwt.zip main
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal lambda invoke --function-name my-function-go-dynamoGoogleToken --payload '{"Headers":{"Authorization":"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQzZmZiYjhhZGUwMWJiNGZhMmYyNWNmYjEwOGNjZWI4ODM0MDZkYWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDI4MDY0NzU0MDAzMTM5MTIyMDUiLCJlbWFpbCI6ImRvdGhld3VAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5vbmNlIjoiNTFmMGFkZTNiMzZkODIwMmJjMjNhMWFiMTVmZmU1ZDI1NjQ0MzNjODE3OWU5N2RhMTFjOGVjODQ4ZTA3YWFiNCIsIm5hbWUiOiJob3dhcmQgd3UiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKeVozZXBZdFh0RE9hc2o2YmRBTk0xZ2RHb1pzb0dFX1k4YTdyNlg9czk2LWMiLCJnaXZlbl9uYW1lIjoiaG93YXJkIiwiZmFtaWx5X25hbWUiOiJ3dSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjIxMDQzOTQyLCJleHAiOjE2MjEwNDc1NDIsImp0aSI6ImY4N2FiYTFmZDczNzYwODQ5ZjJlNzA5NDBlNWY3NTI3OGY1ZjIwNjEifQ.X0rmCOelubMk0yEO0fqSqUOl5c4-lVMKkH67L5QGsNCh89W6kQh8-C0GUWNxbWddlSuF2wyn4WFFAL6V3un03G0fn329ouuR-9fE2NsGCHlFOTSTj-x27gOa1U5bzuydv-NEI3QndlT9fa3uWsq2xUUka8029XzhUBtdFTo9lTT3cLMb73B1s7CAUBS9liJ7UzOEhkngtMXQzZS5nLDSxOcphjykF8ttuF3lG-4bPCytJ_ihNZlLyFHMI5X8A7Rqu6zrld-8UF2XaZ65cvKGIVZFrQvo0mphoOslWw88RzS6zLmc7BsONKa9zdjpqxsXsNeH7FqTCUVJ0zkGek5E8g" }}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
vi main.go
GOOS=linux go build main.go;zip go-jwt.zip main
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal lambda invoke --function-name my-function-go-dynamoGoogleToken --payload '{"Headers":{"Authorization":"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQzZmZiYjhhZGUwMWJiNGZhMmYyNWNmYjEwOGNjZWI4ODM0MDZkYWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDI4MDY0NzU0MDAzMTM5MTIyMDUiLCJlbWFpbCI6ImRvdGhld3VAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5vbmNlIjoiNTFmMGFkZTNiMzZkODIwMmJjMjNhMWFiMTVmZmU1ZDI1NjQ0MzNjODE3OWU5N2RhMTFjOGVjODQ4ZTA3YWFiNCIsIm5hbWUiOiJob3dhcmQgd3UiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKeVozZXBZdFh0RE9hc2o2YmRBTk0xZ2RHb1pzb0dFX1k4YTdyNlg9czk2LWMiLCJnaXZlbl9uYW1lIjoiaG93YXJkIiwiZmFtaWx5X25hbWUiOiJ3dSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjIxMDQzOTQyLCJleHAiOjE2MjEwNDc1NDIsImp0aSI6ImY4N2FiYTFmZDczNzYwODQ5ZjJlNzA5NDBlNWY3NTI3OGY1ZjIwNjEifQ.X0rmCOelubMk0yEO0fqSqUOl5c4-lVMKkH67L5QGsNCh89W6kQh8-C0GUWNxbWddlSuF2wyn4WFFAL6V3un03G0fn329ouuR-9fE2NsGCHlFOTSTj-x27gOa1U5bzuydv-NEI3QndlT9fa3uWsq2xUUka8029XzhUBtdFTo9lTT3cLMb73B1s7CAUBS9liJ7UzOEhkngtMXQzZS5nLDSxOcphjykF8ttuF3lG-4bPCytJ_ihNZlLyFHMI5X8A7Rqu6zrld-8UF2XaZ65cvKGIVZFrQvo0mphoOslWw88RzS6zLmc7BsONKa9zdjpqxsXsNeH7FqTCUVJ0zkGek5E8g" }}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
ls
ls -lst
vi main.go
rm .main.go.swp 
vi main.go
GOOS=linux go build main.go;zip go-jwt.zip main
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal lambda invoke --function-name my-function-go-dynamoGoogleToken --payload '{"Headers":{"Authorization":"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQzZmZiYjhhZGUwMWJiNGZhMmYyNWNmYjEwOGNjZWI4ODM0MDZkYWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDI4MDY0NzU0MDAzMTM5MTIyMDUiLCJlbWFpbCI6ImRvdGhld3VAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5vbmNlIjoiNTFmMGFkZTNiMzZkODIwMmJjMjNhMWFiMTVmZmU1ZDI1NjQ0MzNjODE3OWU5N2RhMTFjOGVjODQ4ZTA3YWFiNCIsIm5hbWUiOiJob3dhcmQgd3UiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKeVozZXBZdFh0RE9hc2o2YmRBTk0xZ2RHb1pzb0dFX1k4YTdyNlg9czk2LWMiLCJnaXZlbl9uYW1lIjoiaG93YXJkIiwiZmFtaWx5X25hbWUiOiJ3dSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjIxMDQzOTQyLCJleHAiOjE2MjEwNDc1NDIsImp0aSI6ImY4N2FiYTFmZDczNzYwODQ5ZjJlNzA5NDBlNWY3NTI3OGY1ZjIwNjEifQ.X0rmCOelubMk0yEO0fqSqUOl5c4-lVMKkH67L5QGsNCh89W6kQh8-C0GUWNxbWddlSuF2wyn4WFFAL6V3un03G0fn329ouuR-9fE2NsGCHlFOTSTj-x27gOa1U5bzuydv-NEI3QndlT9fa3uWsq2xUUka8029XzhUBtdFTo9lTT3cLMb73B1s7CAUBS9liJ7UzOEhkngtMXQzZS5nLDSxOcphjykF8ttuF3lG-4bPCytJ_ihNZlLyFHMI5X8A7Rqu6zrld-8UF2XaZ65cvKGIVZFrQvo0mphoOslWw88RzS6zLmc7BsONKa9zdjpqxsXsNeH7FqTCUVJ0zkGek5E8g" }}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
vi main
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal lambda invoke --function-name my-function-go-dynamoGoogleToken --payload '{"Headers":{"Authorization":"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQzZmZiYjhhZGUwMWJiNGZhMmYyNWNmYjEwOGNjZWI4ODM0MDZkYWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDI4MDY0NzU0MDAzMTM5MTIyMDUiLCJlbWFpbCI6ImRvdGhld3VAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5vbmNlIjoiNTFmMGFkZTNiMzZkODIwMmJjMjNhMWFiMTVmZmU1ZDI1NjQ0MzNjODE3OWU5N2RhMTFjOGVjODQ4ZTA3YWFiNCIsIm5hbWUiOiJob3dhcmQgd3UiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKeVozZXBZdFh0RE9hc2o2YmRBTk0xZ2RHb1pzb0dFX1k4YTdyNlg9czk2LWMiLCJnaXZlbl9uYW1lIjoiaG93YXJkIiwiZmFtaWx5X25hbWUiOiJ3dSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjIxMDQzOTQyLCJleHAiOjE2MjEwNDc1NDIsImp0aSI6ImY4N2FiYTFmZDczNzYwODQ5ZjJlNzA5NDBlNWY3NTI3OGY1ZjIwNjEifQ.X0rmCOelubMk0yEO0fqSqUOl5c4-lVMKkH67L5QGsNCh89W6kQh8-C0GUWNxbWddlSuF2wyn4WFFAL6V3un03G0fn329ouuR-9fE2NsGCHlFOTSTj-x27gOa1U5bzuydv-NEI3QndlT9fa3uWsq2xUUka8029XzhUBtdFTo9lTT3cLMb73B1s7CAUBS9liJ7UzOEhkngtMXQzZS5nLDSxOcphjykF8ttuF3lG-4bPCytJ_ihNZlLyFHMI5X8A7Rqu6zrld-8UF2XaZ65cvKGIVZFrQvo0mphoOslWw88RzS6zLmc7BsONKa9zdjpqxsXsNeH7FqTCUVJ0zkGek5E8g" }}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go 
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal lambda invoke --function-name my-function-go-dynamoGoogleToken --payload '{"Headers":{"Authorization":"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQzZmZiYjhhZGUwMWJiNGZhMmYyNWNmYjEwOGNjZWI4ODM0MDZkYWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDI4MDY0NzU0MDAzMTM5MTIyMDUiLCJlbWFpbCI6ImRvdGhld3VAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5vbmNlIjoiNTFmMGFkZTNiMzZkODIwMmJjMjNhMWFiMTVmZmU1ZDI1NjQ0MzNjODE3OWU5N2RhMTFjOGVjODQ4ZTA3YWFiNCIsIm5hbWUiOiJob3dhcmQgd3UiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKeVozZXBZdFh0RE9hc2o2YmRBTk0xZ2RHb1pzb0dFX1k4YTdyNlg9czk2LWMiLCJnaXZlbl9uYW1lIjoiaG93YXJkIiwiZmFtaWx5X25hbWUiOiJ3dSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjIxMDQzOTQyLCJleHAiOjE2MjEwNDc1NDIsImp0aSI6ImY4N2FiYTFmZDczNzYwODQ5ZjJlNzA5NDBlNWY3NTI3OGY1ZjIwNjEifQ.X0rmCOelubMk0yEO0fqSqUOl5c4-lVMKkH67L5QGsNCh89W6kQh8-C0GUWNxbWddlSuF2wyn4WFFAL6V3un03G0fn329ouuR-9fE2NsGCHlFOTSTj-x27gOa1U5bzuydv-NEI3QndlT9fa3uWsq2xUUka8029XzhUBtdFTo9lTT3cLMb73B1s7CAUBS9liJ7UzOEhkngtMXQzZS5nLDSxOcphjykF8ttuF3lG-4bPCytJ_ihNZlLyFHMI5X8A7Rqu6zrld-8UF2XaZ65cvKGIVZFrQvo0mphoOslWw88RzS6zLmc7BsONKa9zdjpqxsXsNeH7FqTCUVJ0zkGek5E8g" }}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
vi main.go 
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal lambda invoke --function-name my-function-go-dynamoGoogleToken --payload '{"Headers":{"Authorization":"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQzZmZiYjhhZGUwMWJiNGZhMmYyNWNmYjEwOGNjZWI4ODM0MDZkYWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDI4MDY0NzU0MDAzMTM5MTIyMDUiLCJlbWFpbCI6ImRvdGhld3VAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5vbmNlIjoiNTFmMGFkZTNiMzZkODIwMmJjMjNhMWFiMTVmZmU1ZDI1NjQ0MzNjODE3OWU5N2RhMTFjOGVjODQ4ZTA3YWFiNCIsIm5hbWUiOiJob3dhcmQgd3UiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKeVozZXBZdFh0RE9hc2o2YmRBTk0xZ2RHb1pzb0dFX1k4YTdyNlg9czk2LWMiLCJnaXZlbl9uYW1lIjoiaG93YXJkIiwiZmFtaWx5X25hbWUiOiJ3dSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjIxMDQzOTQyLCJleHAiOjE2MjEwNDc1NDIsImp0aSI6ImY4N2FiYTFmZDczNzYwODQ5ZjJlNzA5NDBlNWY3NTI3OGY1ZjIwNjEifQ.X0rmCOelubMk0yEO0fqSqUOl5c4-lVMKkH67L5QGsNCh89W6kQh8-C0GUWNxbWddlSuF2wyn4WFFAL6V3un03G0fn329ouuR-9fE2NsGCHlFOTSTj-x27gOa1U5bzuydv-NEI3QndlT9fa3uWsq2xUUka8029XzhUBtdFTo9lTT3cLMb73B1s7CAUBS9liJ7UzOEhkngtMXQzZS5nLDSxOcphjykF8ttuF3lG-4bPCytJ_ihNZlLyFHMI5X8A7Rqu6zrld-8UF2XaZ65cvKGIVZFrQvo0mphoOslWw88RzS6zLmc7BsONKa9zdjpqxsXsNeH7FqTCUVJ0zkGek5E8g" }}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go 
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go
go get -u github.com/google/go-cmp/cmp
vi main.go
GOOS=linux go build main.go;zip go-jwt.zip main
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal lambda invoke --function-name my-function-go-dynamoGoogleToken --payload '{"Headers":{"Authorization":"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQzZmZiYjhhZGUwMWJiNGZhMmYyNWNmYjEwOGNjZWI4ODM0MDZkYWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDI4MDY0NzU0MDAzMTM5MTIyMDUiLCJlbWFpbCI6ImRvdGhld3VAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5vbmNlIjoiNTFmMGFkZTNiMzZkODIwMmJjMjNhMWFiMTVmZmU1ZDI1NjQ0MzNjODE3OWU5N2RhMTFjOGVjODQ4ZTA3YWFiNCIsIm5hbWUiOiJob3dhcmQgd3UiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKeVozZXBZdFh0RE9hc2o2YmRBTk0xZ2RHb1pzb0dFX1k4YTdyNlg9czk2LWMiLCJnaXZlbl9uYW1lIjoiaG93YXJkIiwiZmFtaWx5X25hbWUiOiJ3dSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjIxMDQzOTQyLCJleHAiOjE2MjEwNDc1NDIsImp0aSI6ImY4N2FiYTFmZDczNzYwODQ5ZjJlNzA5NDBlNWY3NTI3OGY1ZjIwNjEifQ.X0rmCOelubMk0yEO0fqSqUOl5c4-lVMKkH67L5QGsNCh89W6kQh8-C0GUWNxbWddlSuF2wyn4WFFAL6V3un03G0fn329ouuR-9fE2NsGCHlFOTSTj-x27gOa1U5bzuydv-NEI3QndlT9fa3uWsq2xUUka8029XzhUBtdFTo9lTT3cLMb73B1s7CAUBS9liJ7UzOEhkngtMXQzZS5nLDSxOcphjykF8ttuF3lG-4bPCytJ_ihNZlLyFHMI5X8A7Rqu6zrld-8UF2XaZ65cvKGIVZFrQvo0mphoOslWw88RzS6zLmc7BsONKa9zdjpqxsXsNeH7FqTCUVJ0zkGek5E8g" }}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
awslocal lambda invoke --function-name my-function-go-dynamoGoogleToken --payload '{"Headers":{"Authorization":"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQzZmZiYjhhZGUwMWJiNGZhMmYyNWNmYjEwOGNjZWI4ODM0MDZkYWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMjI1ODU5MjczMTYtcHF2cWZzMGF0bnM1MmFwZXZoMTBsazNkaHJnajdubTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDI4MDY0NzU0MDAzMTM5MTIyMDUiLCJlbWFpbCI6ImRvdGhld3VAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5vbmNlIjoiOTVkZDk1ZWM0YWU4ZWI0YzM2MDgyOTgyNzdjZjVmYzY5NWJjMGNiMjhiYmI1YzU2MDU2ZTVkZDk4NTFhMzIxOCIsIm5hbWUiOiJob3dhcmQgd3UiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKeVozZXBZdFh0RE9hc2o2YmRBTk0xZ2RHb1pzb0dFX1k4YTdyNlg9czk2LWMiLCJnaXZlbl9uYW1lIjoiaG93YXJkIiwiZmFtaWx5X25hbWUiOiJ3dSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjIxMDQ4MzM0LCJleHAiOjE2MjEwNTE5MzQsImp0aSI6ImY4ZmQ1ZjQ3ZGIxMzhkZjM5ZjY3Y2M3MGQ3ZDQzYjdjOTdlMDJiMTMifQ.hQi587SeMl3dl13Q8yi90gypd3IICd9AQwqEqiMc06LKwEyzXNT6TH10sld7GjgBJZ3bOd0GBWaDegZx_hPZxOrrag6p0Is4o4j8eWtYCcZESDga-H6X0w16U6Sg9WAxkyS0xdKilh8mMfXWxSWB6Y3sUAEv1mnyf1WlWQrcuH_qu-HRnD2xRyq9I7zJydj6aWyPGgBGCPyOF7tG2EEHelFXGMVvpwok2Nnhh-9Xhq043HigsXAYV_7eTBb6kNVJ189r806YunCqMz90F_t3a_QKHSuArt1AXCiR7PdmVluxpl34TutZGla9AnMUUuPSC65OgG0Kk1mZng0NJgtHyg" }}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
vi main.go
cd 
ls
cd sessions-080724-mark3a/
ls
cd utils/
ls
vi loginUtil.js
cd ..
ls
cd component/
ls
vi Login.js
cd
cd sessions-080724-mark3a/
cd utils/
ls
vi loginUtil.js
vi Login.js
vi loginUtil.js
cd ..
ls
cd component/
ls
vi Login.js
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"dothewu@gmail.com\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"dothewu@gmail.com\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"dothewu@gmail.com\"}}"
cd 
cd sessions-080724-mark3a/
cd utils/
vi loginUtil.js
cd ..
ls
cd 
ls
cd googletokenjwt/
ls
vi main.go
GOOS=linux go build main.go;zip go-jwt.zip main
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
ls
cd sessions-080724-mark3a/
expo start
DATA_DIR=/tmp/localstack/data SERVICES=dynamodb,lambda localstack start
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"dothewu@gmail.com\"}}"
:q
fdfdfd
DATA_DIR=/tmp/localstack/data SERVICES=dynamodb,lambda localstack start
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
Deck
3 Mad Ratter (ELD) 130
4 Valiant Rescuer (IKO) 36
2 Boon of the Wish-Giver (IKO) 43
3 Coordinated Charge (IKO) 6
4 Frostveil Ambush (IKO) 52
3 Shredded Sails (IKO) 136
2 Startling Development (IKO) 68
1 Dreadful Apathy (THB) 11
4 Improbable Alliance (ELD) 193
3 Gates of Istfell (KHM) 256
3 Tranquil Cove (M21) 258
4 Mountain (RTR) 265
5 Island (RTR) 255
1 Prismari Campus (STX) 270
2 Swiftwater Cliffs (M20) 252
2 Disdainful Stroke (GRN) 37
3 Axgard Armory (KHM) 250
2 Lorehold Campus (STX) 268
2 Faith's Fetters (M21) 17
1 Pacifism (ANB) 16
1 Kinetic Augur (M21) 154
2 Bound in Gold (KHM) 5
1 Valkyrie's Sword (KHM) 36
3 Faerie Vandal (ELD) 45
1 Zephyr Boots (STX) 261
3 Makindi Stampede (ZNR) 26
1 Goldvein Pick (KHM) 239
DATA_DIR=/tmp/localstack/data SERVICES=dynamodb,lambda localstack start
cd sessions-080724-mark3a/
cd component/
vi Register.js
cd ..
cd utils/
ls
vi userDataUtil.js
cd ..
ls
cd component/
ls
vi NewSession.js
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
cd sessions-080724-mark3a/
expo start
awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
DATA_DIR=/tmp/localstack/data SERVICES=dynamodb,lambda localstack start
cd sessions-080724-mark3a/
ls
vi App.js
cd component/
vi GoogleSignInButton
ls
vi GoogleSignInButton.js
vi MySession.js
rm MySession.js
vi MySession.js
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
cd sessions-080724-mark3a/
expo start
cd ..
ls
cd sessions-080724-mark3a/
expo start
cd sessions-080724-mark3a/
ls
cd component/
ls
rm MySession.js
vi MySession.js
cd ..
expo install expo-document-picker
expo install react-native-web
ls
cd component/
rm Login.js
vi Login.js
rm NewSession.js
vi NewSession.js
cd ..
rm App.js
vi App.js
cd component/
rm Register.js
vi Register.js
cd ..
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
cd ..
cd howard/
cd sessions-080724-mark3a/
expo start
DATA_DIR=/tmp/localstack/data SERVICES=dynamodb,lambda localstack start
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
DATA_DIR=/tmp/localstack/data SERVICES=dynamodb,lambda localstack start
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"howardwu827@gmail.com\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"howardwu827@gmail.com\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"howardwu827@gmail.com\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"howardwu827@gmail.com\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"howardwu827@gmail.com\"}}"
ls
cd dynamodbaddrecord/
ls
vi main.go
go test
vi main_test.go 
vi main.go
go test
vi main.go
vi main_test.go 
go test
vi main_test.go 
go test
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"dothewu@gmail.com\"}}"
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"dothewu@gmail.com\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"dothewu@gmail.com\"}}"
GOOS=linux go build main.go;zip go-jwt.zip main
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"dothewu@gmail.com\"}}"
cd ..
ls
mkdir dynamodbGetUserProfileDetails
cd dynamodbGetUserProfileDetails/
cd ..
cd dynamodbGetAllPublicUserDetails/
ls
cp main.go ../dynamodbGetUserProfileDetails/
cp main_test.go ../dynamodbGetUserProfileDetails/
cd ..
cd dynamodbGetUserProfileDetails/
ls
vi main.go
cd 
cd go
cd src/
ls
cd howardtest/
ls
cd creds/
ls
vi creds
vi creds.go 
cd
cd dynamodbGetUserProfileDetails/
ls
vi main.go
go test
vi main.go
go test
vi main.go
go test
vi main.go
go test
vi main.go
go test
vi main.go
go test
cd ..
cd dynamodbGetAllPublicUserDetails/
ls
vi main.go
cd ..
cd dynamodbGetUserProfileDetails/
ls
vi main.go 
go test
vi main.go 
go test
vi main.go 
go test
vi main.go 
go test
vi main.go 
go test
vi main.go 
go test
vi main.go 
cd
cd go
cd src/
cd howardtest/creds/
ls
vi creds.go 
cd
cd dynamodbGetAllPublicUserDetails/
vi main.go 
cd .
cd ..
cd dynamodbGetUserProfileDetails/
vi main.go 
go test
vi main.go 
go test
vi main.go 
go test
vi main.go 
go test
vi main.go 
go test
vi main_test.go 
go test
vi main_test.go 
go test
vi main_test.go 
go test
vi main_test.go 
go test
vi main_test.go 
cd ..
awslocal lambda invoke --function-name my-function-go-jwt --payload '{"Body":"{\"login\":\"test2\", \"Password\": \"meh\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
GOOS=linux go build main.go;zip go-jwt.zip main
cd dynamodbGetUserProfileDetails/
GOOS=linux go build main.go;zip go-jwt.zip main
awslocal lambda delete-function --function-name my-function-go-dynamoGetUserInfo; awslocal lambda create-function --function-name my-function-go-dynamoGetUserInfo --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal lambda invoke --function-name my-function-go-dynamoGetUserInfo --payload '{"Headers":{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QyIiwiZXhwIjoxNjIxNzQ0NjAxLCJzdWIiOiJiYXNpYyB1c2VyIn0.ymzbb34d7hRCI4WDu4WXUBaKaCyFyzWs5Vq--USiWCM" }}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test2\"}}"
cd ..
cd sessions-080724-mark3a/
expo start
DATA_DIR=/tmp/localstack/data SERVICES=dynamodb,lambda localstack start
cd dynamodbGetUserProfileDetails/
vi main.gop
vi main.go
cd ..
ls
cd dynamodbaddrecord/
ls
vi main.go
go test
vi main_test.go
go test
GOOS=linux go build main.go;zip go-jwt.zip main
vi main_test.go
vi main.go
vi main_test.go
ls
cd ..
ls
cd dynamodbGetAllPublicUserDetails/
ls
cd ..
cd jwt
ls
cd ..
ls
cd jwt
ls
vi main_integration_test.go 
cd
cd go
cd src/howardtest/creds/
vi creds
ls
vi creds.go
cd
awslocal lambda invoke --function-name my-function-go-jwt --payload '{"Body":"{\"login\":\"test2\", \"Password\": \"meh\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetUserInfo; awslocal lambda create-function --function-name my-function-go-dynamoGetUserInfo --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
ls
cd dynamodbGetUserProfileDetails/awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetUserInfo; awslocal lambda create-function --function-name my-function-go-dynamoGetUserInfo --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetUserProfileDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
awslocal lambda invoke --function-name my-function-go-jwt --payload '{"Body":{"login":"test2", "Password": "meh"}}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
awslocal lambda invoke --function-name my-function-go-jwt --payload '{"Body":{"login":"test2", "Password": "meh"}}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
vi main.go
cd jwt/
ls
vi main.go
awslocal lambda invoke --function-name my-function-go-jwt --payload '{"Body":"{\"login\":\"test2\", \"Password\": \"meh\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
awslocal lambda invoke --function-name my-function-go-dynamoreg-basic --payload '{"Body":"{\"login\":\"test2\", \"Password\": \"meh\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cd ..
cd dynamodbaddrecord/
ls
vi min.go
vi main.go 
cat log
cd ..
cd jwt
cat log
DATA_DIR=/tmp/localstack/data SERVICES=dynamodb,lambda localstack start
#1621874356
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetUserInfo; awslocal lambda create-function --function-name my-function-go-dynamoGetUserInfo --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetUserProfileDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
#1621874383
\
#1621876761
cd jwt
#1621876761
ls
#1621876785
cp main_integration_test.go ../dynamodbaddrecord/
#1621876790
cd ..
#1621876793
cd dynamodbaddrecord/
#1621876793
ls
#1621876799
vi main_integration_test.go 
#1621876837
vi main.go
#1621877618
vi main_integration_test.go 
#1621877643
vi main.go
#1621877660
cd 
#1621877661
cd go
#1621877666
cd src/howardtest/creds/
#1621877666
ls
#1621877669
vi creds.go
#1621877676
vi creds_integration_test.go 
#1621877806
cd ..
#1621877808
cd
#1621877811
cd dynamodbaddrecord/
#1621877815
vi main_integration_test.go 
#1621878805
vi creds_integration_test.go 
#1621878811
vi main_integration_test.go 
#1621878833
vi main.go 
#1621878849
vi main_integration_test.go 
#1621878874
vi main.go 
#1621878892
vi main_integration_test.go 
#1621878919
vi main.go 
#1621878922
vi main_integration_test.go 
#1621879403
go test -tags=integration
#1621879411
vi main.go 
#1621879426
vi main_integration_test.go 
#1621879442
go test -tags=integration
#1621879694
vi main_integration_test.go 
#1621879770
cd
#1621879772
cd jwt
#1621879775
vi main_integration_test.go 
#1621879793
cd
#1621879793
ls
#1621879798
cd dynamodbaddrecord/
#1621879800
vi main_integration_test.go 
#1621879816
go test -tags=integration
#1621879825
vi main_integration_test.go 
#1621879848
go test -tags=integration
#1621879850
vi main_integration_test.go 
#1621879859
go test -tags=integration
#1621879884
vi main.go 
#1621879999
vi main_integration_test.go 
#1621880013
vi main.go 
#1621880051
go test -tags=integration
#1621880061
vi main_integration_test.go 
#1621880070
go test -tags=integration
#1621880078
vi main_integration_test.go 
#1621880347
vi main.go 
#1621880388
go test
#1621880392
vi main.go 
#1621880465
go test
#1621903579
vi main_integration_test.go 
#1621903588
go test -tags=integration
#1621903606
vi main_integration_test.go 
#1621903632
go test
#1621903658
vi main.go 
#1621903665
vi main_test.go 
#1621903694
cd 
#1621903696
cd go
#1621903702
cd src/howardtest/creds/
#1621903703
ls
#1621903710
vi creds_integration_test.go 
#1621903720
vi creds_test.go 
#1621903767
cd 
#1621903767
ls
#1621903771
cd jwt
#1621903771
ls
#1621903774
vi main_test.go 
#1621903782
vi main_integration_test.go 
#1621903992
cd ..
#1621904002
cd dynamodbGetAllPublicUserDetails/
#1621904003
ls
#1621904005
vi main_test.go 
#1621904021
cd ..
#1621904023
cd dynamodbaddrecord/
#1621904024
ls
#1621904026
vi main_integration_test.go 
#1621904052
go test -tags=integration
#1621904177
vi main_tes.go
#1621904182
vi main_test.go
#1621904220
ls
#1621904227
vi main_integration_test.go 
#1621904234
ls
#1621904244
vi main.go
#1621904406
vi main_integration_test.go 
#1621904418
vi main.go
#1621905828
vi main_integration_test.go 
#1621905833
go test -tags=integration
#1621905856
vi main_integration_test.go 
#1621905863
vi main.go
#1621905869
vi main_integration_test.go 
#1621905874
vi main.go
#1621905878
go test -tags=integration
#1621905917
ls
#1621905923
vi main_integration_test.go 
#1621905930
vi main.go
#1621905934
vi main_integration_test.go 
#1621905939
vi main.go
#1621905946
go test -tags=integration
#1621905959
vi main_integration_test.go 
#1621905976
go test -tags=integration
#1621905983
vi main_integration_test.go 
#1621905992
go test -tags=integration
#1621906003
vi main_integration_test.go 
#1621906095
cd
#1621906095
ls
#1621906100
cd hellojwt/
#1621906102
ls
#1621906104
vi main.go
#1621906124
cd ..
#1621906124
ls
#1621906128
cd googletokenjwt/
#1621906128
ls
#1621906131
vi main.go
#1621906167
cd
#1621906168
ls
#1621906174
cd dynamodbGetUserProfileDetails/
#1621906175
ls
#1621906177
vi main.go
#1621906224
cd
#1621906230
cd dynamodbaddrecord/
#1621906238
vi main_integration_test.go 
#1621906315
go test -tags=integration
#1621906327
vi main_integration_test.go 
#1621906338
go test -tags=integration
#1621906345
cd
#1621906349
cd dynamodbGetUserProfileDetails/
#1621906352
vi main.go 
#1621906357
cd ..
#1621906358
ls
#1621906361
cd dynamodbaddrecord/
#1621906363
ls
#1621906443
vi main_integration_test.go 
#1621906453
go test -tags=integration
#1621906472
vi main_integration_test.go 
#1621906595
awsconfigure
#1621906598
aws configure
#1621906611
awslocal configure
#1621906926
export AWS_REGION="us-east-1"
#1621906930
vi main_integration_test.go 
#1621906940
go test -tags=integration
#1621907317
vi main_integration_test.go 
#1621907372
go test -tags=integration
#1621907378
vi main_integration_test.go 
#1621908616
ls
#1621908620
vi main.go
#1621908971
vi main_integration_test.go 
#1621917847
vi main.go
#1621917891
vi main_integration_test.go 
#1621917908
vi main.go
#1621917953
vi main_integration_test.go 
#1621918020
vi main_test.go 
#1621918080
vi main_integration_test.go 
#1621918855
go test -tags=integration
#1621918881
vi main_integration_test.go 
#1621919540
go test -tags=integration
#1621919545
vi main_integration_test.go 
#1621919566
go test -tags=integration
#1621919569
vi main_integration_test.go 
#1621919581
go test -tags=integration
#1621919586
vi main_integration_test.go 
#1621919766
go test -tags=integration
#1621919879
vi main_integration_test.go 
#1621919978
go test -tags=integration
#1621919988
vi main_integration_test.go 
#1621920001
go test -tags=integration
#1621920091
vi main_integration_test.go 
#1621920221
go test -tags=integration
#1621920246
vi main_integration_test.go 
#1621920257
go test -tags=integration
#1621920265
go get aws/awserr
#1621920336
vi main_integration_test.go 
#1621920351
go test -tags=integration
#1621920359
vi main_integration_test.go 
#1621920397
go test -tags=integration
#1621920401
vi main_integration_test.go 
#1621920411
go test -tags=integration
#1621920581
vi main_integration_test.go 
#1621920591
go test -tags=integration
#1621920600
vi main_integration_test.go 
#1621920606
go test -tags=integration
#1621920647
vi main_integration_test.go 
#1621920849
vi main.go
#1621920891
go test -tags=integration
#1621920908
vi main.go
#1621921131
go test -tags=integration
#1621955791
vi main_integration_test.go 
#1621955951
vi main.go
#1621956614
vi main_integration_test.go 
#1621957132
vi main.go
#1621981582
vi main_integration_test.go 
#1621981825
vi main.go
#1621981870
vi main_integration_test.go 
#1621981877
go test -tags=integration
#1621981885
vi main_integration_test.go 
#1621981903
go test -tags=integration
#1621981909
vi main.go
#1621981945
go test -tags=integration
#1621981950
vi main_integration_test.go 
#1621981960
go test -tags=integration
#1621981963
vi main_integration_test.go 
#1621981975
go test -tags=integration
#1621981988
vi main_integration_test.go 
#1621982001
go test -tags=integration
#1621982053
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621982059
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621982063
go test -tags=integration
#1621982081
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621982085
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621982092
vi main_integration_test.go 
#1621983946
history
#1621984048
HISTTIMEFORMAT="%F %T "
#1621984049
history
#1621988487
vi main.go
#1621988576
go test -tags=integration
#1621988906
vi main_integration_test.go 
#1621988918
vi main.go
#1621988938
vi main_integration_test.go 
#1621988942
go test -tags=integration
#1621989060
vi main_integration_test.go 
#1621989120
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621989125
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621989139
go test -tags=integration
#1621989157
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621989160
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621989168
vi main.go
#1621989184
go test -tags=integration
#1621989206
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621989209
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621989219
vi main_integration_test.go 
#1621989262
go test -tags=integration
#1621989303
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621989307
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621989749
vi main_integration_test.go 
#1621990083
vi main.go
#1621990117
vi main_integration_test.go 
#1621990149
go test
#1621990170
vi main_test.go 
#1621990234
vi main_integration_test.go 
#1621990244
vi main.go
#1621990589
vi main_integration_test.go 
#1621990724
go test -tags=integration
#1621990729
vi main_integration_test.go 
#1621990738
go test -tags=integration
#1621990983
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621990990
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621990992
ls
#1621990999
vi main_integration_test.go 
#1621991052
vi main.go
#1621991081
vi main_integration_test.go 
#1621991094
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621991099
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621991108
go test -tags=integration
#1621991128
ls
#1621991147
vi main_integration_test.go 
#1621991180
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621991183
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621991187
vi main_integration_test.go 
#1621991200
vi main.go
#1621991222
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621991227
go test -tags=integration
#1621991234
vi main.go
#1621991248
go test -tags=integration
#1621991322
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621991328
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621991379
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621991385
vi main_integration_test.go 
#1621991540
vi main.go 
#1621991589
go test -tags=integration
#1621991593
vi main_integration_test.go 
#1621991607
go test -tags=integration
#1621991693
vi main.go 
#1621991714
vi main_integration_test.go 
#1621992401
go test -tags=integration
#1621992450
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621992461
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621992465
go test -tags=integration
#1621992516
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621992520
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621992562
vi main.go
#1621993302
go test -tags=integration
#1621993345
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621993352
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621993356
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621993369
vi main_integration_test.go 
#1621993384
vi main.go
#1621993629
go test -tags=integration
#1621993635
vi main.go
#1621993730
go test -tags=integration
#1621994633
vi main.go
#1621994674
vi main_integration_test.go 
#1621994695
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621994699
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621994713
go test -tags=integration
#1621995175
vi main.go
#1621995189
go test -tags=integration
#1621995197
vi main.go
#1621995224
go test -tags=integration
#1621995243
vi main.go
#1621995249
go test -tags=integration
#1621995394
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621995399
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621995409
vi main_integration_test.go 
#1621995662
vi main.go 
#1621995716
vi main_integration_test.go 
#1621995720
go test -tags=integration
#1621995726
vi main.go 
#1621995735
go test -tags=integration
#1621996043
vi main.go 
#1621996668
go test -tags=integration
#1621996719
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621996725
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test34"}}"
#1621996733
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621996737
go test -tags=integration
#1621996999
vi main.go 
#1621997023
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621997027
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621997035
go test -tags=integration
#1621997073
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621997077
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621997081
vi main.go 
#1621997127
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621997131
go test -tags=integration
#1621997137
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621997141
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1621997152
vi main_integration_test.go 
#1621997168
go test -tags=integration
#1621997199
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621997248
vi main_integration_test.go 
#1621997257
vi main.go 
#1621997356
go test -tags=integration
#1621997425
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621997727
describe-table --table-name Users
#1621997739
awslocal describe-table --table-name Users
#1621997761
awslocal dynamodb describe-table --table-name Users
#1621999100
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1621999109
vi main.go 
#1621999154
go test -tags=integration
#1622003859
vi main.go 
#1622003921
cd 
#1622003926
cd hellojwt/
#1622003926
ls
#1622003928
vi main.go
#1622004181
cd 
#1622004187
cd go/src/howardtest/creds/
#1622004191
vi creds.go 
#1622004208
cd
#1622004209
cd jwt
#1622004210
ls
#1622004212
vi main.go 
#1622004328
cd ..
#1622004328
ls
#1622004330
cd dynamodbaddrecord/
#1622004330
ls
#1622004332
vi main.go
#1622004601
go test
#1622004606
vi main.go
#1622004626
go test
#1622004806
go test -tags=integration
#1622004909
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1622004917
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1622004937
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1622004942
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1622004947
go test -tags=integration
#1622004991
vi main.go
#1622005013
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1622005031
vi main_integration_test.go 
#1622005133
go test -tags=integration
#1622005163
vi main.go
#1622005291
go test -tags=integration
#1622005294
vi main.go
#1622005332
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1622005336
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1622005342
go test -tags=integration
#1622005361
vi main.go
#1622005374
go test -tags=integration
#1622005383
vi main.go
#1622005391
go test -tags=integration
#1622005401
vi main.go
#1622005435
go test -tags=integration
#1622005467
vi main.go
#1622005475
go test -tags=integration
#1622005486
vi main.go
#1622005495
go test -tags=integration
#1622005501
vi main.go
#1622005509
go test -tags=integration
#1622005538
:q
#1622005541
vi main.go
#1622005634
go test -tags=integration
#1622005638
vi main.go
#1622005647
go test -tags=integration
#1622005653
vi main.go
#1622005677
go test -tags=integration
#1622005694
vi main.go
#1622005709
go test -tags=integration
#1622005715
vi main.go
#1622005772
go test -tags=integration
#1622005779
vi main.go
#1622005790
go test -tags=integration
#1622005807
vi main.go
#1622005911
go test -tags=integration
#1622005961
vi main.go
#1622005968
go test -tags=integration
#1622005988
vi main.go
#1622006005
go test -tags=integration
#1622006057
vi main.go
#1622006079
go test -tags=integration
#1622006088
vi main.go
#1622006094
go test -tags=integration
#1622006104
vi main.go
#1622006111
go test -tags=integration
#1622006395
vi main.go
#1622006453
go test -tags=integration
#1622006466
vi main.go
#1622006499
go test -tags=integration
#1622006507
vi main.go
#1622006519
go test -tags=integration
#1622006544
vi main.go
#1622006563
go test -tags=integration
#1622006726
vi main.go
#1622006750
go test -tags=integration
#1622006769
vi main.go
#1622006801
go test -tags=integration
#1622006811
vi main.go
#1622006828
go test -tags=integration
#1622006893
vi main.go
#1622006923
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
#1622006927
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
#1622006931
go test -tags=integration
#1622037717
awslocal dynamodb update-table --table-name Users --attribute
#1622038130
history
#1622038560
aws dynamodb update-table \ --table-name Users\ --attribute-definitions AttributeName=InviteCode,AttributeType=N \ --global-secondary-index-updates \ "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\", \"KeySchema\": [{\"AttributeName\":\"Username\",\"KeyType\":\"HASH\"}], \"Projection\":{ \"ProjectionType\":\"INCLUDE\", \"NonKeyAttributes\":[\"Admin\"] } } } ]"
#1622038738
aws dynamodb update-table --table-name Users\ --attribute-definitions AttributeName=InviteCode,AttributeType=N \ --global-secondary-index-updates \ "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\", \"KeySchema\": [{\"AttributeName\":\"Username\",\"KeyType\":\"HASH\"}], \"Projection\":{ \"ProjectionType\":\"INCLUDE\", \"NonKeyAttributes\":[\"Admin\"] } } } ]"
#1622038796
aws dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\", \"KeySchema\": [{\"AttributeName\":\"Username\",\"KeyType\":\"HASH\"}], \"Projection\":{ \"ProjectionType\":\"INCLUDE\", \"NonKeyAttributes\":[\"Admin\"] } } } ]"
#1622038826
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\", \"KeySchema\": [{\"AttributeName\":\"Username\",\"KeyType\":\"HASH\"}], \"Projection\":{ \"ProjectionType\":\"INCLUDE\", \"NonKeyAttributes\":[\"Admin\"] } } } ]"
#1622039435
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\", \"KeySchema\": [{\"AttributeName\":\"Username\",\"KeyType\":\"HASH\"}], \"Projection\":{ \"ProjectionType\":\"INCLUDE\", \"NonKeyAttributes\":[\"Admin\"] } , "ProvisionedThroughput":{"ReadCapacityUnits":5,"WriteCapacityUnits":5}} } ]"
#1622039485
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\", \"KeySchema\": [{\"AttributeName\":\"Username\",\"KeyType\":\"HASH\"}], \"Projection\":{ \"ProjectionType\":\"INCLUDE\", \"NonKeyAttributes\":[\"Admin\"] } , \"ProvisionedThroughput\":{\"ReadCapacityUnits\":5,\"WriteCapacityUnits\":5}}}]"
#1622057582
history
#1622057641
ls
#1622057646
go test -tags=integration
#1622057691
vi main_integration_test.go 
#1622057717
vi main.go
#1622058350
aws dynamodb query --table-name Users--index-name InviteCodeIndex --key-condition-expression "InviteCode= :name"  --expression-attribute-values '{":name":{"S":"thisisaninvitecode"}}'
#1622058365
awslocal dynamodb query --table-name Users--index-name InviteCodeIndex --key-condition-expression "InviteCode= :name"  --expression-attribute-values '{":name":{"S":"thisisaninvitecode"}}'
#1622058424
awslocal dynamodb query --table-name Users --index-name InviteCodeIndex --key-condition-expression "InviteCode= :name"  --expression-attribute-values '{":name":{"S":"thisisaninvitecode"}}'
#1622059260
awslocal dynamodb query --table-name Users --index-name InviteCodeIndex --key-condition-expression "InviteCode = :name"  --expression-attribute-values '{":name":{"S":"thisisaninvitecode"}}'
#1622059695
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\",\"Projection\":{ \"ProjectionType\":\"INCLUDE\", \"NonKeyAttributes\":[\"Admin\"] } , \"ProvisionedThroughput\":{\"ReadCapacityUnits\":5,\"WriteCapacityUnits\":5}}}]"
#1622059924
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\",\"KeySchema\": [{\"AttributeName\":\"InviteCode\",\"KeyType\":\"Range\"}],\"Projection\":{ \"ProjectionType\":\"INCLUDE\", \"NonKeyAttributes\":[\"Admin\"] } , \"ProvisionedThroughput\":{\"ReadCapacityUnits\":5,\"WriteCapacityUnits\":5}}}]"
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N --global-secondary-index-updates "[ { \"Delete\": { \"IndexName\": \"InviteCodeIndex\"}]"\
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N --global-secondary-index-updates "[ { \"Delete\": { \"IndexName\": \"InviteCodeIndex\"}]"
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N --global-secondary-index-updates "[ { \"Delete\": { \"IndexName\": \"InviteCodeIndex\"}}]"
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\",\"KeySchema\": [{\"AttributeName\":\"InviteCode\",\"KeyType\":\"Range\"}],\"Projection\":{ \"ProjectionType\":\"INCLUDE\", \"NonKeyAttributes\":[\"Admin\"] } , \"ProvisionedThroughput\":{\"ReadCapacityUnits\":5,\"WriteCapacityUnits\":5}}}]"
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\",\"KeySchema\": [{\"AttributeName\":\"InviteCode\",\"KeyType\":\"Hash\"}],\"Projection\":{ \"ProjectionType\":\"INCLUDE\", \"NonKeyAttributes\":[\"Admin\"] } , \"ProvisionedThroughput\":{\"ReadCapacityUnits\":5,\"WriteCapacityUnits\":5}}}]"
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=S --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\",\"KeySchema\": [{\"AttributeName\":\"InviteCode\",\"KeyType\":\"Hash\"}],\"Projection\":{ \"ProjectionType\":\"ALL\" } , \"ProvisionedThroughput\":{\"ReadCapacityUnits\":5,\"WriteCapacityUnits\":5}}}]"
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=S --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\",\"KeySchema\": [{\"AttributeName\":\"InviteCode\",\"KeyType\":\"HASH\"}],\"Projection\":{ \"ProjectionType\":\"ALL\" } , \"ProvisionedThroughput\":{\"ReadCapacityUnits\":5,\"WriteCapacityUnits\":5}}}]"
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\",\"KeySchema\": [{\"AttributeName\":\"InviteCode\",\"KeyType\":\"HASH\"}],\"Projection\":{ \"ProjectionType\":\"INCLUDE\", \"NonKeyAttributes\":[\"Admin\"] } , \"ProvisionedThroughput\":{\"ReadCapacityUnits\":5,\"WriteCapacityUnits\":5}}}]"
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N --global-secondary-index-updates "[ { \"Delete\": { \"IndexName\": \"InviteCodeIndex\"}}]"
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=S --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\",\"KeySchema\": [{\"AttributeName\":\"InviteCode\",\"KeyType\":\"HASH\"}],\"Projection\":{ \"ProjectionType\":\"INCLUDE\", \"NonKeyAttributes\":[\"Admin\"] } , \"ProvisionedThroughput\":{\"ReadCapacityUnits\":5,\"WriteCapacityUnits\":5}}}]"
history
awslocal dynamodb describe-table --table-name Users
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test2\"}}"
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=S
awslocal dynamodb describe-table --table-name Users
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=S
awslocal dynamodb update-table --table-name Users
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N--global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\",\"KeySchema\": [{\"AttributeName\":\"InviteCode\",\"KeyType\":\"HASH\"}],\"Projection\":{ \"ProjectionType\":\"ALL\" } , \"ProvisionedThroughput\":{\"ReadCapacityUnits\":5,\"WriteCapacityUnits\":5}}}]"
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=N --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\",\"KeySchema\": [{\"AttributeName\":\"InviteCode\",\"KeyType\":\"HASH\"}],\"Projection\":{ \"ProjectionType\":\"ALL\" } , \"ProvisionedThroughput\":{\"ReadCapacityUnits\":5,\"WriteCapacityUnits\":5}}}]"
awslocal dynamodb query --table-name Users --index-name InviteCodeIndex --key-condition-expression "InviteCode= :name"  --expression-attribute-values '{":name":{"S":"thisisaninvitecode"}}'
awslocal dynamodb query --table-name Users --index-name InviteCodeIndex --key-condition-expression "InviteCode= :name"  --expression-attribute-values '{":name":{"N":"thisisaninvitecode"}}'
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=FirstName,AttributeType=S --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"FirstNameIndex\",\"KeySchema\": [{\"AttributeName\":\"FirstName\",\"KeyType\":\"HASH\"}],\"Projection\":{ \"ProjectionType\":\"ALL\" } , \"ProvisionedThroughput\":{\"ReadCapacityUnits\":5,\"WriteCapacityUnits\":5}}}]"
awslocal dynamodb update-table --table-name Users --global-secondary-index-updates "[ { \"Delete\": { \"IndexName\": \"InviteCodeIndex\"}}]"
awslocal dynamodb update-table --table-name Users --global-secondary-index-updates "[ { \"Delete\": { \"IndexName\": \"FirstNameIndex\"}}]"
awslocal dynamodb update-table --table-name Users --attribute-definitions AttributeName=InviteCode,AttributeType=S --global-secondary-index-updates "[ { \"Create\": { \"IndexName\": \"InviteCodeIndex\",\"KeySchema\": [{\"AttributeName\":\"InviteCode\",\"KeyType\":\"HASH\"}],\"Projection\":{ \"ProjectionType\":\"ALL\" } , \"ProvisionedThroughput\":{\"ReadCapacityUnits\":5,\"WriteCapacityUnits\":5}}}]"
awslocal dynamodb query --table-name Users --index-name InviteCodeIndex --key-condition-expression "InviteCode= :name"  --expression-attribute-values '{":name":{"S":"thisisaninvitecode"}}'
vi main.go
ls
cd dynamodbaddrecord/
ls

go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
cd ..
ls
cd googletokenjwt/
vi main.go 
cd ..
cd dynamodbaddrecord/
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
export AWS_REGION="us-east-1"
go test -tags=integration
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
go test -tags=integration
vi main_integration_test.go 
vi main.go
vi main_integration_test.go 
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
go test -tags=integration
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
vi main_integration_test.go 
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
rm .main.go.swp 
vi main.go
rm .main.go.swp 
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"user4\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
go test -tags=integration
vi main_integration_test.go 
vi main.go
vi main_integration_test.go 
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
vi main.go
vi main_integration_test.go 
vi main.go
vi main_integration_test.go 
vi main.go
vi main_integration_test.go 
vi main.go
vi main_integration_test.go 
vi main.go
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
vi main.go
vi main_integration_test.go 
vi main.go
go test -tags=integration
vi main.go
vi main_integration_test.go 
awslocal dynamodb delete-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
go test -tags=integration
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
vi main_integration_test.go 
go test -tags=integration
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test3\"}}"
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test4\"}}"
go test -tags=integration
vi main_integration_test.go 
DATA_DIR=/tmp/localstack/data SERVICES=dynamodb,lambda localstack start
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetUserInfo; awslocal lambda create-function --function-name my-function-go-dynamoGetUserInfo --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetUserProfileDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
cd sessions-080724-mark3a/
cd component/
vi ProfileCreation.js
cd sessions-080724-mark3a/
cd component/
ls
cd ..
expo start
cd sessions-080724-mark3a/
cd component/
rm Login.js
vi Login.js
cd ..
cd component/
vi 
ls
cd ..
cd utils/
ls
vi loginUtil.js
rm loginUtil.js
vi loginUtil.js
cd ..
cd component/
ls
vi ProfileCreation.js
rm ProfileCreation.js
vi ProfileCreation.js
cd sessions-080724-mark3a/
cd component/
rm Profile.js
vi Profile.js
cd ..
expo start
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetUserInfo; awslocal lambda create-function --function-name my-function-go-dynamoGetUserInfo --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetUserProfileDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
ls
cd cd dynamodbaddrecord/
ls
cd dynamodbaddrecord/
ls
vi main.go
go test
main_test.
ls
vi main_test.go 
go testgo test -tags=integration
vi main_test.go 
go test
go test -tags=integration
export AWS_REGION="us-east-1"
go test -tags=integration
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetUserInfo; awslocal lambda create-function --function-name my-function-go-dynamoGetUserInfo --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetUserProfileDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
cd ..
awslocal lambda delete-function --function-name my-function-go-dynamoGoogleToken; awslocal lambda create-function --function-name my-function-go-dynamoGoogleToken --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/googletokenjwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetAllPublicUserDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-dynamoreg-basic; awslocal lambda create-function --function-name my-function-go-dynamoreg-basic --runtime go1.x --zip-file fileb://~/dynamodbaddrecord/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1;awslocal lambda delete-function --function-name my-function-go-jwt; awslocal lambda create-function --function-name my-function-go-jwt --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/jwt/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1; awslocal lambda delete-function --function-name my-function-go-dynamoGetUserInfo; awslocal lambda create-function --function-name my-function-go-dynamoGetUserInfo --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://~/dynamodbGetUserProfileDetails/go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
ls
cd dynamodbaddrecord/
vi main.go
go test
vi main_test.go 
vi main_integration_test.go 
go test -tags=integration
export AWS_REGION="us-east-1"
go test -tags=integration
ls
vi main.go
go test
vi main.go
go test
vi main.go
go test
vi main.go
go test
vi main.go
go test
go test -tags=integration
vi main.go
go test -tags=integration
ls
cd ..
ls
cd dynamodbGetAllPublicUserDetails/
ls
vi main.go
go test
vi main.go
go test
vi main.go
go test
vi main.go
go test
vi main.go
go test
vi main.go
cd
cd go/src/howardtest/
ls
cd creds/
ls
vi creds.go 
awslocal dynamodb get-item --table-name Users --key "{\"Username\":{\"S\":\"test2\"}}"
vi creds_test.go 
ls
cd jwt
ls
cd ..
cd dynamodbGetAllPublicUserDetails/
ls
vi main_integration_test.go 
ls
cd ..
ls
cd dynamodbGetAllPublicUserDetails/
ls
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
cd ..
cd jwt
ls
vi main_test.go 
cd ..
cd go
ls
cd src/
ls
cd howardtest/
ls
cd creds/
ls
vi creds.go 
vi creds_integration_test.go 
ls
cd dynamodbGetAllPublicUserDetails/
ls
vi main.go
go test
vi main.go
vi main_test.go 
go test
vi main_test.go 
go test
vi main_test.go 
vi main.go
vi main_test.go 
vi main.go
go test
vi main_test.go 
vi main.go
vi main_test.go 
go test
vi main_test.go 
go test
vi main_test.go 
vi main.go 
ls
:q
GOOS=linux go build main.go;zip go-jwt.zip main
awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
vi main.go
GOOS=linux go build main.go;zip go-jwt.zip main
vi main.go
GOOS=linux go build main.go;zip go-jwt.zip main
awslocal lambda delete-function --function-name my-function-go-dynamoGetAllPublicDetails; awslocal lambda create-function --function-name my-function-go-dynamoGetAllPublicDetails --runtime go1.x --environment "Variables={JWTKEY=test1}" --zip-file fileb://go-jwt.zip --handler main --role arn:aws:iam::000000000000:role/lambda-ex1
cat log
awslocal lambda invoke --function-name my-function-go-dynamoGetAllPublicDetails --payload '{"Headers":{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QyIiwiZXhwIjoxNjIzMTY5ODI1LCJzdWIiOiJiYXNpYyB1c2VyIn0.sJ_MxoAX4NPHnikgcoS7N9x3O-mMYIY7msA-86sjoi0"}, "Body":"{\"InviteCode\": \"HLahMZtevM2vlWXlA3Ed4lxlISE=\"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
awslocal lambda invoke --function-name my-function-go-dynamoGetAllPublicDetails --payload '{"Headers":{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QyIiwiZXhwIjoxNjIzMTY5ODI1LCJzdWIiOiJiYXNpYyB1c2VyIn0.sJ_MxoAX4NPHnikgcoS7N9x3O-mMYIY7msA-86sjoi0"}, "Body":"{\"InviteCode\": \"HLahMZtevM2vlWXlA3Ed4lxlISE=\"}}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
awslocal lambda invoke --function-name my-function-go-dynamoGetAllPublicDetails --payload '{"Headers":{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QyIiwiZXhwIjoxNjIzMTY5ODI1LCJzdWIiOiJiYXNpYyB1c2VyIn0.sJ_MxoAX4NPHnikgcoS7N9x3O-mMYIY7msA-86sjoi0"}, "Body":"{\"InviteCode\": \"HLahMZtevM2vlWXlA3Ed4lxlISE=\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cd ..
sl
ls
cd dynamodbGetUserProfileDetails/
ls
cd ..
ls
cd dynamodbaddrecord/
ls
cp main_integration_test.go ../dynamodbGetAllPublicUserDetails/
cd ..
sls
ls
cd dynamodbaddrecord/
ls
cd ..
cd dynamodbGetAllPublicUserDetails/
ls
vi main_integration_test.go 
cd ..
ls
cd jwt
ls
vi main_integration_test.go 
cd ..
ls
cd dynamodbGetUserProfileDetails/
ls
cd ..
ls
cd dynamodbaddrecord/
ls
vi main_integration_test.go 
ls
cd ..
cd googletokenjwt/
ls
cd ..
cd go
ls
cd src
ls
cd howardtest/
ls
cd creds/
ls
vi creds_integration_test.go 
ls
cd .
cd ..
ls
cd 
ls
cd jwt
ls
vi main_integration_test.go 
cd ..
cd go/src
ls
cd howardtest/
ls
cd creds
ls
vi creds.go
cd 
ls
cd jwt
ls
vi main_integration_test.go 
cd ..
cd dynamodbGetAllPublicUserDetails/
vi main_integration_test.go 
cd dynamodbGetAllPublicUserDetails/
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
awslocal lambda invoke --function-name my-function-go-dynamoGetAllPublicDetails --payload '{"Headers":{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QyIiwiZXhwIjoxNjIzMTc4NzQwLCJzdWIiOiJ1c2VyIn0.fG8iNAOlUbrqXERC5cBq_mnXbh8HTRCIq2AtUwWTj5U"}, "Body":"{\"InviteCode\": \"HLahMZtevM2vlWXlA3Ed4lxlISE=\"}"}' log --log-type Tail  --query 'LogResult' --output text | base64 -d
cat log
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
export AWS_REGION="us-east-1"
go test -tags=integration
vi main_integration_test.go 
cd .
cd ..
ls
cd jwt
vi main.go
cd ..
cd dynamodbGetAllPublicUserDetails/
ls
vi main.go
cd ..
ls
cd jwt
ls
vi main_integration_test.go 
vi main.go
cd ..
cd dynamodbGetAllPublicUserDetails/
ls
vi main.go
vi main_integration_test.go 
ls
vi main_integration_test.go 
vi main_test.go 
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
cd main.go
vi main.go
go test -tags=integration
vi main.go
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
vi main_integration_test.go 
go test -tags=integration
cd cd/src
ls
cd go/src/howardtest/creds/
ls
vi creds.go 
vi creds_integration_test.go 
vi creds.go 
vi creds_test.go 
DATA_DIR=/tmp/localstack/data SERVICES=dynamodb,lambda localstack start
cd ~
ls
cd album/
ls
cd ..
ls
cd ~
ls
cd sessions-080724-mark3a/
ls
cd ..
git config user.name "howardwu1"
git remote add origin https://github.com/howardwu1/sessionsApp.git
git branch -M main
git init
git remote add origin https://github.com/howardwu1/sessionsApp.git
git branch -M main
git branch
git commit -b main
git init -b main
ls
cd ..
ls
cd howard/
ls
git init
rm -rf /home/howard/.git
git init -b main
git init
git add .
git reset .
vi .gitignore
chmod -R a+rw .config/devcert
sudo chmod -R a+rw .config/devcert
git add.
git add .
