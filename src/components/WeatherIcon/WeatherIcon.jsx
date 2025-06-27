export default function WeatherIcon({ iconUrl, iconAltText, iconDescription }) {
  if (!iconUrl) return null;
  return (
    <>
      <img src={iconUrl} alt={iconAltText || "Weather Icon"} />
      <p>{iconDescription}</p>
    </>
  );
}
