import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp} °C`
    );
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=44a6c7aa330748f665b912f89a534a59&units=metric`;
  axios.get(url).then(handleResponse);
  return <h1> Hello from Weather raect</h1>;
}
