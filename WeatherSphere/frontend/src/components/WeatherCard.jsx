function WeatherCard({ weather }) {

    if (!weather) return null;

    return (
        <div>

            <h2>
                {weather.city}, {weather.country}
            </h2>

            <h3>
                {weather.temperature}°C
            </h3>

            <p>
                {weather.description}
            </p>

            <p>
                Humidity: {weather.humidity}%
            </p>

            <p>
                Wind: {weather.windSpeed} km/h
            </p>

        </div>
    );
}

export default WeatherCard;