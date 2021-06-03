import { Router } from "https://deno.land/x/oak/mod.ts";
import {
    addUser, getUserById, getUserList, updateUser, deleteUser
  } from "./controllers.ts";
const router = new Router(); // Create Router

router
  .get("/api/user", getUserList) // Get all users
  .get("/api/user/:id", getUserById) // Get one user by id
  .post("/api/user", addUser) // Add a user
  .put("/api/user/:id", updateUser) // Update a user by id
  .delete("/api/user/:id", deleteUser); // Delete a user by id

export default router;