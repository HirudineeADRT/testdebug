let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    debugger;
    await cognito_idp.listUsers({
        UserPoolId: "us-east-1_D10y3fy0o",
        Limit: 10
    }).promise()
        .then(data => {
            console.log(data)
            console.log(event)
            // your code goes here
        })
        .catch(err => {
            console.log(err)
            // error handling goes here
        });

    return { "message": "Successfully executed" };
};