import styled from "@emotion/styled";
import { useState } from "react";

const WeatherInput = styled.input`
  margin-top: 2rem;
  padding: 0.5rem;
  width: 250px;
`;

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function onChange(event) {
    const value = event.target.value;
    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onChangeCity(city);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <WeatherInput
          type="text"
          onChange={onChange}
          placeholder="Ingrese una Ciudad o un Pais"
        />
      </form>
    </>
  );
}
