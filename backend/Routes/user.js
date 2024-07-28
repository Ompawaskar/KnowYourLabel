const router = require("express").Router();
const admin = require("../config/firebase.config");
const users = require("../DB/dbschema");
const dbconection = require("../DB/dbconn");

dbconection();

const newUserData = async (decodedToken, req, res) => {
  const newUser = new users({
    name: decodedToken.name,
    email: decodedToken.email,
    userId: decodedToken.user_id, 
    imageUrl: decodedToken.picture,
    email_verfied: decodedToken.email_verified, 
    auth_time: decodedToken.auth_time,
  });

  try {
    const saveUser = await newUser.save();
    res.send({ user: saveUser });
  } catch (error) {
    res.send({ success: false, msg: error });
  }
};

const upadteUserData= async(decodedToken,req,res)=>{
const check={userId:decodedToken.user_id}
const options={
  upsert:true,
  new:true,
};
try {
  const result=await users.findOneAndUpdate(check,{auth_time:decodedToken.auth_time},options)
  res.send(result)
  
} catch (error) {
  res.send(error)
}
}
router.get("/signup", async (req, res) => {
  if (!req.headers.authorization) {
    return res.send("Invalid Auth Token");
  }

  const token = req.headers.authorization;
  console.log(token);

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);

    if (!decodedToken) {
      return res.json({ message: "Unauthorized Access" });
    } else {
      const userExist = await users.findOne({ userId: decodedToken.user_id }); 
      if (!userExist) {
        await newUserData(decodedToken, req, res);
       
      } else {
       upadteUserData(decodedToken,req,res)
       
      }
    }
  } catch (error) {
    res.send(error);
  }

  console.log(req.headers.authorization);
});

module.exports = router;
