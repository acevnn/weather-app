export default function WeatherInfo({ city, country }) {
  return (
    <>
      <h1>
        {city}
        {","}
        {country}
      </h1>
    </>
  );
}
