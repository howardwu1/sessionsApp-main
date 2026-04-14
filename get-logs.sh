#!/bin/bash
awslocal lambda invoke --function-name my-function --payload '{"key": "value"}' out
sed -i'' -e 's/"//g' out
sleep 5
awslocal logs get-log-events --log-group-name /aws/lambda/my-function --log-stream-name $(cat out) --limit 5
