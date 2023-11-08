import { stringify } from "postcss";
import { useEffect, useState } from "react";

export function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setLocation({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         });
  //       },
  //       (error) => {
  //         console.error("Error getting location:", error);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // }, [location.latitude]);

  // useEffect(() => {
  //   const lat = location.latitude;
  //   const lon = location.longitude;
  //   console.log(lon, lat);

  //   const fetchData = async () => {
  //     const apiKey = "4d50ca992516c9d0ed033e139cbbcb4e";
  //     const apiUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  //     try {
  //       const response = await fetch(apiUrl);
  //       const data = await response.json();
  //       setWeatherData(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching weather data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [location.latitude, location.longitude]);
  return (
    <div className="px-8 py-6  rounded-t-md text-white border-b-2 border-white bg-black">
      <div>
        <h1>Nairobi</h1>
        <div className="flex flex-wrap gap-8 px-3 py-2">
          <span className="flex items-center gap-2">
            <span>🌦️</span>
            <div>
              <p>Monday</p>
              34<sup>o</sup>
            </div>
          </span>
          <span className="flex items-center gap-2">
            <span>🌦️</span>
            <div>
              <p>Monday</p>
              34<sup>o</sup>
            </div>
          </span>
          <span className="flex items-center gap-2">
            <span>🌦️</span>
            <div>
              <p>Monday</p>
              34<sup>o</sup>
            </div>
          </span>
          <span className="flex items-center gap-2">
            <span>🌦️</span>
            <div>
              <p>Monday</p>
              34<sup>o</sup>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
