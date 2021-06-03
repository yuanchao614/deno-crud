import { MongoClient } from "https://deno.land/x/mongo@v0.22.0/mod.ts";
import { User } from './interface.ts'
const URI = "mongodb://127.0.0.1:27017";

// Mongo Connection Init
const client = new MongoClient();
try {
    await client.connect(URI);
    console.log("Database successfully connected");
} catch (err) {
    console.log(err);
}

const db = client.database("denoApp");
const usersCollection = db.collection<User>("userTable");


const addUser = async ({
    request,
    response,
}: {
    request: any;
    response: any;
}) => {
    try {
        // If the request has no Body, it will return a 404
        if (!request.hasBody) {
            response.status = 400;
            response.body = {
                success: false,
                msg: "No Data",
            };
        } else {
            // Otherwise, it will try to insert 
            // a user in the DB and respond with 201
            const body = await request.body();
            const userValue = await body.value;
            console.log(body);
            await usersCollection.insertOne(userValue);
            response.status = 201;
            response.body = {
                success: true,
                data: userValue,
            };
        }
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString(),
        };
    }
};

// DESC: GET single user
// METHOD: GET /api/user/:id
// mongodb _id is Symbol type in deno so getUserById can't find data
const getUserByName = async ({
    params,
    response,
}: {
    params: { userName: string };
    response: any;
}) => {
    // Searches for a particular user in the DB
    const findData = await usersCollection.findOne({ userName: params.userName });
    console.log(params);

    console.log(findData);
    // If found, respond with the user. If not, respond with a 404
    if (findData) {
        response.status = 200;
        response.body = {
            success: true,
            data: findData,
        };
    } else {
        response.status = 404;
        response.body = {
            success: false,
            msg: "No user found",
        };
    }
};

// DESC: GET all user
// METHOD GET /api/user
const getUserList = async ({ response }: { response: any }) => {
    try {
        // Find all user and convert them into an Array
        const userList = await usersCollection.find({}).toArray();
        if (userList) {
            response.status = 200;
            response.body = {
                success: true,
                data: userList,
            };
        } else {
            response.status = 500;
            response.body = {
                success: false,
                msg: "Internal Server Error",
            };
        }
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString(),
        };
    }
};

// DESC: UPDATE single user
// METHOD: PUT /api/user/:id
const updateUser = async ({
    params,
    request,
    response,
}: {
    params: { id: string };
    request: any;
    response: any;
}) => {
    try {
        // Search a user in the DB and update with given values if found
        const body = await request.body();
        const userValue = await body.value;
        await usersCollection.updateOne(
            { _id: params.id },
            { $set: userValue }
        );
        // Respond with the Updated user
        const updatedUser = await usersCollection.findOne({ _id: params.id });
        response.status = 200;
        response.body = {
            success: true,
            data: updatedUser,
        };
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString(),
        };
    }
};

// DESC: DELETE single user
// METHOD: DELETE /api/user/:id
const deleteUser = async ({
    params,
    response,
}: {
    params: { id: string };
    request: any;
    response: any;
}) => {
    try {
        await usersCollection.deleteOne({ _id: params.id });
        response.status = 201;
        response.body = {
            success: true,
            msg: "deleted success",
        };
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString(),
        };
    }
};

export {
    addUser, getUserByName, getUserList, updateUser, deleteUser
}