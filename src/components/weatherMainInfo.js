export default function WeatherMainInfo({ weather }) {
  return (
    <>
      <div>
        <div>
          <div>{weather?.location.name}</div>
          <div>{weather?.location.country}</div>
        </div>
        <div>
          <div>
            <img
              src={`http:${weather?.current.condition.icon}`}
              width="128"
              alt={weather?.current.condition.text}
            />
          </div>
          <div>
            <div>{weather?.current.condition.text}</div>
            <div>{weather?.current.temp_c}°</div>
          </div>
        </div>
        <iframe
          title="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62447.65656519827!2d-77.02805450867064!3d-11.975987013790926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c56a978fd8bf%3A0x3d67f37d51e1d7c0!2sSan%20Juan%20de%20Lurigancho!5e0!3m2!1ses!2spe!4v1670179156507!5m2!1ses!2spe"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
