const express=require('express');
const port=5000;
const app=express();
const connect=require('./configs/db');
const user = require('./model/user.model');
const user_controller=require('./controller/user.controller');
app.use(express.json());
app.use('/users',user_controller);
module.exports=()=>{
    app.listen(port,async()=>{
        await connect();
        console.log(`listening on ${port}`);
    })
}
