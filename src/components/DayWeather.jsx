import React, { useEffect, useState } from "react";
import { currentWeather } from "../api/weather";

const DayWeather = () => {
  return (
    <div className="relative h-[80vh] object-cover bg-[url('https://i.pinimg.com/564x/c2/09/e9/c209e904baae3eb6dc6f7f2046cb095d.jpg')]">
      <div className="mx-auto max-w-7xl">
        <div className="relative pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-14 max-w-7xl px-4 sm:px-6  lg:px-8 ">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-lg text-base text-gray-500 ">
                <span className="block xl:inline">Currently</span>
              </h1>
              <p className="mt-2 text-6xl font-bold tracking-tight text-gray-900 max-w-xl mx-0">
                {"22" + String.fromCharCode(176) + "C"}
                {/* <span>
                  <p>Clear</p>
                  <p>Feels like 22</p>
                </span> */}
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DayWeather;

// {
//   "count": 1,
//   "data": [
//     {
//       "app_temp": 25.6,
//       "aqi": 56,
//       "city_name": "Patiāla",
//       "clouds": 50,
//       "country_code": "IN",
//       "datetime": "2022-10-11:12",
//       "dewpt": 19.7,
//       "dhi": 34.76,
//       "dni": 298.49,
//       "elev_angle": 5.01,
//       "ghi": 51.51,
//       "gust": 1.2119141,
//       "h_angle": 90,
//       "lat": 30.33,
//       "lon": 76.38,
//       "ob_time": "2022-10-11 12:07",
//       "pod": "d",
//       "precip": null,
//       "pres": 979,
//       "rh": 71,
//       "slp": 1008,
//       "snow": null,
//       "solar_rad": 47.6,
//       "sources": [
//         "analysis"
//       ],
//       "state_code": "23",
//       "station": "AV559",
//       "sunrise": "00:50",
//       "sunset": "12:26",
//       "temp": 25.2,
//       "timezone": "Asia/Kolkata",
//       "ts": 1665490077,
//       "uv": 1.3396025,
//       "vis": 16,
//       "weather": {
//         "code": 721,
//         "icon": "a03d",
//         "description": "Haze"
//       },
//       "wind_cdir": "WNW",
//       "wind_cdir_full": "west-northwest",
//       "wind_dir": 289,
//       "wind_spd": 1.1339226
//     }
//   ]
// }
