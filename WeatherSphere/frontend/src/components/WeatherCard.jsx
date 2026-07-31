function WeatherCard({ weather }) {

    if (!weather) {
        return <p>Search for a city to see the weather.</p>;
    }

    return (
        <div 
            style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                marginTop: "30px",
                backgroundColor: "lightgray"
            }}
        >
            <h2>
                {weather.city}, {weather.country}
            </h2>

            <h3>
                🌡️ {weather.temperature} °C
            </h3>

            <p>
                ☁️ {weather.description}
            </p>

            <p>
                💧 Humidity: {weather.humidity}%
            </p>

            <p>
                💨 Wind: {weather.windSpeed} m/s
            </p>
        </div>
    );
}

export default WeatherCard;