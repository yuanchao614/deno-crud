### Mongodb + Deno + oka CRUD API

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
