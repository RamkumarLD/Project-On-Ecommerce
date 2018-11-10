var mongoose =require('mongoose');
var Schema = mongoose.Schema;

//creating the schema

var UserSchema = new Schema({
    firstname :{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type: String,
        unique : true,
        index : false
    },
    mobilenumber:{
        type: Number
    },
    dob:{
        type: Date
    },
    password:{
        type: String
    },
    confirm_password:{
        type: String
    }

});

var User = module.exports = mongoose.model('userOfEcom', UserSchema);