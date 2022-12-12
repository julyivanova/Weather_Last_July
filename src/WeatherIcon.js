import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "CLEAR_NIGHT",
    "02n": "CLEAR_NIGHT",
    "03d": "CLEAR_NIGHT",
    "03n": "CLEAR_NIGHT",
    "04d": "CLEAR_NIGHT",
    "04n": "CLEAR_NIGHT",
    "09d": "CLEAR_NIGHT",
    "09n": "CLEAR_NIGHT",
    "010d": "CLEAR_NIGHT",
    "010n": "CLEAR_NIGHT",
    "011d": "CLEAR_NIGHT",
    "011n": "CLEAR_NIGHT",
    "013d": "CLEAR_NIGHT",
    "013n": "CLEAR_NIGHT",
    "050d": "CLEAR_NIGHT",
    "050n": "CLEAR_NIGHT",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#lelele"
      size={64}
      animate={true}
    />
  );
}
