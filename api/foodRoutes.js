const express=require('express');
const Router=express.Router();
const Food=require('../models/food');

Router.get('/allfoods',async(req,res)=>{

try{
const allfoods= await Food.find({});
res.status(200).json(allfoods);
}
catch(e){
res.status(404).json({msg:"Cannot fetch the food at the moment"});
}

})

module.exports=Router;
