const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Username is required'],
        unique:true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Please fill a valid email address']
      },
    organization: {
        type:String,
        required:true
      },
      packageType: {
        type:String,
        required:true
      },
    password: {
        type: String,
        required: true,
      },
})

module.exports = mongoose.model("UserSchema", UserSchema);