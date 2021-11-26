const AmazonCognitoIdentify = require('amazon-cognito-identity-js');
const jwt = require('jsonwebtoken');

const poolData = {
    UserPoolId: "us-east-2_1hP3AvUh1",
    ClientId: "rlmfo1gapiaataf6dqi5tonsn"
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
                res.send(result.getIdToken().getJwtToken());
            },
            onFailure: function(err){
                console.log(err);
                res.send(err);
            },
        })
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.signUp = (req, res) => {
    try{
        let datos = req.body;
        let attributeList = [];

        let dataName = {
            Name: 'name',
            Value: datos.name,
        };

        let dataAddress = {
            Name: 'address',
            Value: datos.address,
        };

        let dataFamilyName = {
            Name: 'family_name',
            Value: datos.family_name,
        };        

        attributeList.push(dataName,dataAddress,dataFamilyName);

        userPool.signUp(datos.email , datos.password , attributeList , null ,
            function(err){
                if(err){
                    res.send(err.name);
                    return;
                }
                res.send('Te registraste correctamente, porfavor verifica tu correo');
            })
            
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
