# barnabas
Tool to save your VPC Info


## Building:
`npm i`   
Then:   
`make build`   

## Requirements:
Set your mongoDB location by using:   
`export MONGO_DB=mongodb://<IP>:<PORT>/<DB>`

If you need mongoDB on docker use:   
`docker run --name=mongo -d -p 27017:27017 mongo`   
Then    
`export MONGO_DB=mongodb://localhost:27017/mydb`

## To Run:
### All in one:
Build first then start the server using:  
`node /dst/server.js`

### Backend Only:
Build first then set:  
`export NOFE=true`   
Start the server using:   
`node /dst/server.js`   

### Using Docker:
Start with:   
`docker run --name=barnabas-be -p 3333:3333 -e MONGO_DB=mongodb://<IP>:<PORT>/<DB> mjkubba/barnabas`
