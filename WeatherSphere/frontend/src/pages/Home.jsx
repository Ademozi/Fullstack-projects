import { useState } from "react";

import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Navbar from "../components/Navbar";

import { getWeather } from "../services/weatherService";
import { addFavorite } from "../services/favoriteService";

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

    const handleAddFavorite = async (weather) => {

    try {

        const favoriteData = {
            city: weather.city,
            country: weather.country
        };

        const response = await addFavorite(favoriteData);

        alert(response.message);

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Unable to save favorite."
            );

        }

    };

    return (
        <>
            <Navbar />

            <div 
                style={{
                    maxWidth: "300px",
                    margin: "40px auto",
                }}
            >

                <h1>WeatherSphere</h1>

                <SearchBar onSearch={handleSearch} />

                <WeatherCard 
                    weather={weather}
                    onAddFavorite={handleAddFavorite} />

            </div>
        </>
        
    );
}

export default Home;