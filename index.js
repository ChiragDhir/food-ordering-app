const express=require('express');
const app=express();
const mongoose=require('mongoose');
const seedDB=require('./seed');
const cors=require('cors');

mongoose.connect('mongodb://localhost:27017/food-app')
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log(err);
});

// seedDB();

//sharing resources with react server using package called cors
app.use(cors(
    {
        origin:['http://localhost:3000'],
        credentials:true
    }
));


const foodRoutes=require('./api/foodRoutes');


app.get('/hello',(req,res)=>{
    res.status(200).json({msg:"you request is valid"});
})

app.use(foodRoutes);

const port= process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server running at ${port}`);
})