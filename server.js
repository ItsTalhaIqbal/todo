import express from "express";
import { connectDB } from "./DB/db.js";
import { itemRoute } from "./routes/user.route.js";
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())
app.use("/api", itemRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

try {
  connectDB()
    app.listen(3000, () => {
      console.log(" app listening on port 3000!");
    });
} catch (error) {
  console.log(error);
}
