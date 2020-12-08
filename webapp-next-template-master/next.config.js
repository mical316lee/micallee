require("dotenv").config()
module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    PROJECT_REGION: process.env.PROJECT_REGION,
    IDENTITY_POOL_ID: process.env.IDENTITY_POOL_ID,
    USER_POOLS_ID: process.env.USER_POOLS_ID,
    USER_WEB_CLIENT_ID: process.env.USER_WEB_CLIENT_ID,
  },
}
