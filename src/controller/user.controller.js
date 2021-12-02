const express=require('express');
const user=require('../model/user.model');
const router=express.Router();

const {body, validationResult}=require('express-validator');


router.post(
'/',
body("id").isLength({min:1}).withMessage("id is required"),
body("first_name").isLength({mid:1}).withMessage("first name is required"),
body("last_name").isLength({min:1}).withMessage("last name is required "),
body("email").isEmail(),
body("gender").isLength({min:5}).withMessage("gender is required"),
body("age").isLength({min:9}).withMessage("age is required"),
async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const new_user=await user.create(req.body);
    return res.status(201).send({new_user});
})


module.exports=router;