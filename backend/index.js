const express= require("express")
const app=express();
const dbconn=require("./DB/dbconn")
const dbschema=require("./DB/dbschema")
require("dotenv/config");
const cors=require("cors");

app.use(cors({origin:true}));
app.use(express.json());
app.get("/",(req,res)=>{
  res.send("Hello World")
})

const userRoute=require("./Routes/user")
app.use("/api/user",userRoute)

app.listen(3000,()=>{console.log("Listening to port 3000")})