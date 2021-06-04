### Mongodb + Deno + oka CRUD API

#### Step

```bash
deno run --allow-all server.ts
```

#### Example

* addUser 

```bash
Request:
POST
url: 
http://localhost:3000/api/user/
param:
{ 
    "userName": "user11",
    "email": "2428306489@qq.com",
    "password": "password1",
    "isAdmin": false
}

```
* getUserById

```bash
Request:
GET

url: 
http://localhost:3000/api/user/:id

```
* getUserList 

```bash
Request:
GET

url: 
http://localhost:3000/api/user/

```

* updateUser

```bash
Request:
PUT

url: 
http://localhost:3000/api/user/:id

param:
{ 
    "userName": "user11",
    "email": "2428306489@qq.com",
    "password": "password1",
    "isAdmin": false
}

```
* deleteUser

```bash
Request:
DELETE

url: 
http://localhost:3000/api/user/:id

```

[https://deno.land/x/mongo@v0.22.0](https://deno.land/x/mongo@v0.22.0)
[https://dev.to/nakshcodes/create-your-first-restful-api-with-deno-oak-and-mongodb-48a7](https://dev.to/nakshcodes/create-your-first-restful-api-with-deno-oak-and-mongodb-48a7)
