import { useState } from "react";

import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

import { getWeather } from "../services/weatherService";

function Home() {

    const [weather, setWeather] = useState(null);

    const handleSearch = async (city) => {

        try {

            const data = await getWeather(city);

            setWeather(data.weather);

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Unable to fetch weather."
            );

        }

    };

    return (
        <div>

            <h1>WeatherSphere</h1>

            <SearchBar onSearch={handleSearch} />

            <WeatherCard weather={weather} />

        </div>
    );
}

export default Home;