const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_XXXXXX",
    "aws_user_pools_web_client_id": "XXXXXXXXXXXX",
    "oauth": {
        "domain": "yourdomain.us-east-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:4200/",
        "redirectSignOut": "http://localhost:4200/",
        "responseType": "code"
    }
};


export default awsmobile;