import { UserModel } from "../schema/user.schema.js"

export const CreateUser=async(req,res)=>{
    const {name,email,phone}=req.body
    const data = {name,email,phone}
    console.log(req.body);
    
    try {
        const user = await UserModel.create(data)
        res.status(200).send({message:"user saved to database",user})
    } catch (error) {
        res.status(500).send({error:"unable to save user to database"})
    }
}

export const GetAllUsers=async(req,res)=>{
    
    try {
        const data = await UserModel.find()
        res.status(200).send({message:"SUCCESS",data})
    } catch (error) {
        res.status(500).send({error:"unable to get Users from database"})
    }
}
export const GetUser=async(req,res)=>{
    const {id} = req.params

    
    try {
        const data = await UserModel.findById(id)
        res.status(200).send({message:"SUCCESS",data})
    } catch (error) {
        res.status(500).send({error:"unable to get Users from database"})
    }
}
export const UpdateUser = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    
    const newData = req.body; 
    try {
        const data = await UserModel.findByIdAndUpdate(id, newData);
        res.status(200).send({ message: "User updated successfully", data });
    } catch (error) {
        res.status(500).send({ error: "Unable to update user" });
    }
}

export const DeleteUser=async(req,res)=>{
    const {id}=req.params
    console.log(id);
    try {
          await UserModel.findByIdAndDelete(id)
        res.status(200).send({message:"SUCCESS",})
    } catch (error) {
        res.status(500).send({error:"unable to get data from database"})
    }
}