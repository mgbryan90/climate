import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  // Funcion para cargar la información de la ciudad y por defecto el valor inicial sera Lima.
  async function loadInfo(city = "lima") {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      setWeather(json);
      console.log(json);
    } catch (error) {}
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <>
      <WeatherContainer>
        <WeatherForm onChangeCity={handleChangeCity} />
        <WeatherMainInfo weather={weather} />
      </WeatherContainer>
    </>
  );
}

export default WeatherApp;
