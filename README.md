# Node.js E-Commerce API

It is a e commerce api build using below technologies
expressjs
nodejs
mongodb
jquery

## Setup

    
install the dependencies and run node app.js
install postman and registed || then log in || then add product details and delete also

### create the .env file and add security key and corresponding values


## Run The Service

    nodemon app.js

## API Endpoints

### Auth Routes

- Create a new User (first used flagged as admin)
  - ```POST |  /api/v1/auth/register```
- Login User
  - ```POST |  /api/v1/auth/login```

### User Routes

- Get Users (only for admin)
  - ```GET |  /api/v1/users```
- Get Single Users
  - ```GET |  /api/v1/users/{id}```


## Review Routes

- Create Review
  - ```POST |  /api/v1/reviews```
- Get Reviews
  - ```GET |  /api/v1/reviews```




## Orders Routes

- Create Order
  - ```POST |  /api/v1/orders```




## Tech used

- Nodejs
- express
- mongoDb
- mongoose
- dotenv




