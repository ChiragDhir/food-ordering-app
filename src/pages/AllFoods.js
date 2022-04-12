import React,{useState,Fragment,useEffect} from "react";
import FoodList from "../components/foods/FoodList";
import styles from './AllFoods.module.css';
import axios from 'axios';


const AllFoods=()=>{

    
    const [foods,setFoods]=useState([]);

    //making request at backend to get all foods (with the help of axios lib)
    useEffect(()=>{

  async function getFoods(){

try{
const res = await axios.get('http://localhost:8000/allfoods');

setFoods(res.data);

}
catch(e){
    console.log(e.message);
}
  }

  getFoods();
    },[])


    return <Fragment>
        <section>
        <img className={styles.img} src="https://images.unsplash.com/photo-1486485764572-92b96f21882a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWF0JTIwd2hhdCUyMG1ha2VzJTIweW91JTIwaGFwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
        </section>
        <FoodList foods={foods}/>
    </Fragment>
}
export default AllFoods;