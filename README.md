# adrasteia

No longer needed, please checkout https://docs.aws.amazon.com/vpc/latest/ipam/what-it-is-ipam.html


~Tool to save your VPC Info~



## Build:
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
`node dst/server.js`

### Backend Only:
Build first then set:  
`export NOFE=true`   
Start the server using:   
`node dst/server.js`   

### Using Docker:
Start with:   
`docker run --name=adrasteia -p 3333:3333 -e MONGO_DB=mongodb://<IP>:<PORT>/<DB> mjkubba/adrasteia`

## API
### VPCs:
- GET /vpcs : will give you json of all VPCs
- GET /vpcs/<VPC NAME> : Will only give you the provided vpc name, and retrns empty json array if not found
- GET /account/<ACCOUNT NUMBER> : Will only give you the provided account number name, and retrns empty json array if not found
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
- GET /subnets/vpc/<VPC Name> : will give you the subnets for the provided vpc
- GET /subnets/cidr/<CIDR> : will give you the subnets for the provided CIDR
- POST /subnets : will save new subnet to db, required input json:
  - vpcName
  - subnetName
  - description   
eg:
`{
"vpcName": "myvpc",
"subnetName": "subnet123",
"cidr": "10.0.0.0/16",
"description": "my access subnet"
}`


More to come...
