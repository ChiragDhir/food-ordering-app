const mongoose=require('mongoose');
const Food=require('./models/food');

const Dummy_foods=[
    {
        name:'Burger',
        price:10,
        desc:'Extra cheese and spice'
    },
    {
        name:'Paneer Tikka',
        price:22.25,
        desc:'Smooth and Delicious paneer grilled to perfection'
    },
    {
        name:'Pizza',
        price:15,
        desc:'Dominos pizza with achari onion flavour'
    },
    {
        name:'Pasta',
        price:20,
        desc:'Pasta with white and red sauces mixed'
    },
    {
        name:'Noodles',
        price:12.99,
        desc:'Delicious noodles with different taste'
    },
]

const seedDB= async ()=>{
   await Food.deleteMany({});

   await Food.insertMany(Dummy_foods);

   console.log('DB seeded');
}

module.exports=seedDB;