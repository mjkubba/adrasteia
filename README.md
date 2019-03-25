# barnabas
Tool to save your VPC Info

### Why nodejs:
Many reasons why I picked nodejs,
* big reason is frontend, the frontend is written in reactjs and it will be easier to bundle the backend together using node vs building a separate backend in a different language.
* async, its fast and async language by default without adding more libraries (I know, I know! I'm already using like 10,000 of them now probably)
* easy to test, even though I'm not doing a good job at it
* native json support + easy to use mongoose



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

## API
### VPCs:
- GET /vpcs : will give you json of all VPCs
- GET /vpcs/<VPC NAME> : Will only give you the provided vpc name, and retrns empty json array if not found
- POST /vpcs Will save new vpc to the db, required input json:
  - vpcName
  - accountNumber
  - description   
eg:
`{
  "vpcName": "myvpc",
  "accountNumber": "123456789012",
  "description": "my production vpc"
  }`

### Subnets:
- GET /subnets : will give you json of all Subnets
- GET /subnets/<VPC Name> : will give you the subnets for the provided vpc
- POST /subnets : will save new subnet to db, required input json:
  - vpcName
  - subnetName
  - description   
eg:
`{
"vpcName": "myvpc",
"subnetName": "subnet123",
"description": "my access subnet"
}`


More to come...
