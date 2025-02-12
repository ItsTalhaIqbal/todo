import { Router } from "express";
import { CreateUser, DeleteUser, GetAllUsers, GetUser, UpdateUser } from "../controller/user.controller.js";

const itemRoute=Router();

itemRoute.post("/createUser",CreateUser)
itemRoute.get("/getAllUsers",GetAllUsers)
itemRoute.put("/updateUser/:id",UpdateUser)
itemRoute.delete("/deleteUser/:id",DeleteUser)
itemRoute.get("/getUser/:id",GetUser)


export {itemRoute}