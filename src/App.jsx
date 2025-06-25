import React, { useEffect, useState } from "react";

export function App() {
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [inputValue, setInputValue] = useState("Skopje");
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const key = "e9ddf2073a9f49ab98a91154252506";
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${inputValue}&aqi=no`;

  async function fetchWeather() {
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log("qwe", result.current.is_day);
      setImage(result.current.condition.icon);
      setText(result.current.condition.text);
      console.log(result);
      setCityName(result.location.name);
      setCountryName(result.location.country);
    } catch (error) {
      console.error("this is the error available", error);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, [inputValue]);

  function getInputData(event) {
    setInputValue(event.target.value.trim());
  }

  function handleCitySubmit() {
    fetchWeather();
  }

  console.log(cityName);

  return (
    <>
      <h1>Weather App</h1>
      <h2>
        {cityName}
        {", "}
        {countryName}
      </h2>
      <input type="text" onChange={getInputData} />
      <button onClick={handleCitySubmit}>Submit!</button>
      <img src={image} alt="" />
      <p>{text}</p>
    </>
  );
}
