const mongoose=require("mongoose");
const passportlocalmongoose=require("passport-local-mongoose");
var UserSchema=mongoose.Schema({
username: String,
Password: String
});

UserSchema.plugin(passportlocalmongoose);
module.exports=mongoose.model("User", UserSchema);