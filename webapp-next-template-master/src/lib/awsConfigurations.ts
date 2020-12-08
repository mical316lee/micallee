const awsConfiguration = {
  Auth: {
    region: process.env.PROJECT_REGION,
    identityPoolId: process.env.IDENTITY_POOL_ID,
    userPoolId: process.env.USER_POOLS_ID,
    userPoolWebClientId: process.env.USER_WEB_CLIENT_ID,
  },
}

export default awsConfiguration
