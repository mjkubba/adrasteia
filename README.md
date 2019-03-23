# barnabas
Tool to save your VPC Info


## To build:
Need to set your mongoDB location by using:
`export MONGO_DB=mongodb://<mongodb location>:<mongodb port>/<database name>`

if you need mongoDB on docker use: `docker run --name=mongo -d -p 27017:27017 mongo`   
then `export MONGO_DB=mongodb://localhost:27017/mydb`

### All in one:
start the server using `node /dst/server.js`

### Backend + docker frontend:
start the server using `node /dst/server.js`
start the frontend with `TBD`
