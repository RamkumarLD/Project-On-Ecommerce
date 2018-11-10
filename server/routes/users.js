var User=require('../model/user');

exports.registerUser = function (req,res){
    console.log(req.body);

   var firstname  = req.body.firstname;
   
   var lastname = req.body.lastname;
             
   var email = req.body.email;
                
   var mobilenumber = req.body.mobilenumber;
         
   var dob = req.body.dob;
        
   var password = req.body.password;
             
   var confirm_password = req.body.confirm_password;

   var newUser =  new User({
       firstname: firstname,
       lastname:lastname,
       email:email,
       mobilenumber:mobilenumber,
       dob:dob,
       password:password,
       confirm_password:confirm_password
   });

   User.findOne({email:email}, (err,event)=>{
       if(err){
           res.send({status: false, message:"error occured while finding if the email exists", err});
           console.error(err);
       }
       else{
           if(event == null){
               newUser.save((err1,result)=>{
                   if(err1){
                       res.send({status:false, message:"Registration failed", err1});
                       console.error(err1);
                   }
                   else{
                       res.send({status:true, message:"Registration successful",result});
                       console.log(result);
                   }
               });
           }
           else{
                res.send({status:false, message:"Email already exists:", event});
                console.log("email already exists:" +event);
           }
       }
   });
}

exports.loginUser = (req,res)=>{
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({email:email}, (err,obj)=>{
        if(err){
            res.send({status:false, message:`error occured while processing login request`});
            console.log(err);
        }
        else{
            if(obj == null){
                res.send({status:false, message:`User not registered`});

            }
            else{
                if(obj.password == password){
                    res.send({status:true, message:"login successful:", obj});
                    console.log(obj);
                } else{
                    res.send({status:false, message: `incorrect password`});
                    console.log(obj);
                }
            }
        }
    });
}