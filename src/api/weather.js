import axios from "axios";



const URL="https://weatherbit-v1-mashape.p.rapidapi.com"
const options = {
  method: "GET",
  url: `${URL}/current`,
  params: { lon: "76.38", lat: "30.33" },
  headers: {
    "X-RapidAPI-Key": "063b0494f2msh4df81d2bd9972cep175991jsn23c45138f8a8",
    "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
  },
}

export const currentWeather=()=>axios.request(options)