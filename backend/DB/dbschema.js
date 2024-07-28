const mongoose=require("mongoose")
const dbconn=require("../DB/dbconn")
const userSchema=mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true }, 
  imageUrl: { type: String, required: true },
  email_verfied: { type: Boolean, required: true },
  auth_time: { type: Number, required: true },

},
{
  timestamps:true
}
)


module.exports=mongoose.model('users',userSchema)