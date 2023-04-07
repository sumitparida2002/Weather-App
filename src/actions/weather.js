import axios from "axios";

import { currentWeather } from "../api/weather";



export const getWeather=async ()=>{
  
  try{
    const response=await currentWeather()
    console.log(response)  
  }catch(error){
    console.log(error.message);
  }

  

}




