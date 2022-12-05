import styled from "@emotion/styled";

const MainInfo = styled.div`
  background-color: gainsboro;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  margin: 2rem;
  padding: 2rem;
`;

const DataNames = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

const DataInfo = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`;

const WeatherLocation = styled.div`
  border: 1px solid black;
  padding: 1rem;
  max-width: 10rem;
  border-radius: 1rem;
`;

const WeatherCurrent = styled.div`
  border: 1px solid black;
  padding: 1rem;
  max-width: 10rem;
  border-radius: 1rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
`;

const WeatherImg = styled.div`
  border: 1px solid black;
  padding: 0.25rem;
  border-radius: 1rem;
  margin: 1rem;
`;

export default function WeatherMainInfo({ weather }) {
  return (
    <>
      <MainInfo>
        <DataNames>
          <WeatherLocation>{weather?.location.name}</WeatherLocation>
          <WeatherLocation>{weather?.location.country}</WeatherLocation>
        </DataNames>
        <DataInfo>
          <div>
            <WeatherCurrent>{weather?.current.condition.text}</WeatherCurrent>
            <WeatherCurrent>{weather?.current.temp_c}°</WeatherCurrent>
          </div>
          <WeatherImg>
            <img
              src={`http:${weather?.current.condition.icon}`}
              width="128"
              alt={weather?.current.condition.text}
            />
          </WeatherImg>
        </DataInfo>
        <iframe
          title="mapa"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62430.78066269788!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1670248809324!5m2!1ses!2spe`}
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </MainInfo>
    </>
  );
}
