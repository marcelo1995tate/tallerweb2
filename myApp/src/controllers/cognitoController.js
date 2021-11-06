const AmazonCognitoIdentify = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentify.CognitoUserPool;
const AWS = require('aws-sdk');

const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');


const poolData = {
    UserPoolId: "us-east-2_h4xAR1LVI",
    ClientId: "1gtgvae8tjq3j19sjs8pgs6hha"
}

const userPool = new AmazonCognitoIdentify.CognitoUserPool(poolData);

exports.signIn = (req, res) => {
    try{
        let datos = req.body;
        
        var authenticationDetails = new AmazonCognitoIdentify.AuthenticationDetails({
            Username: datos.email,
            Password: datos.password,
        });

        var userData = {
            Username: datos.email,
            Pool: userPool
        };

        var cognitoUser = new AmazonCognitoIdentify.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result){
                console.log('access token' + result.getAccessToken().getJwtToken());
                console.log('id token' + result.getIdToken().getJwtToken());
                console.log("Te logueaste");
            },
            onFailure: function(err){
                console.log(err);
            },
        })
        

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

