const axios = require("axios");

const getWeather = async (req, res) => {

    const { city } = req.params;

    if (!city) {
        return res.status(400).json({
            success: false,
            message: "City is required."
        });
    }

    try {

        const apiKey = process.env.WEATHER_API_KEY;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url, {
            timeout: 5000
        });

        const weather = {
            city: response.data.name,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            windSpeed: response.data.wind.speed
        };

        return res.status(200).json({
            success: true,
            weather
        });

    } catch (error) {

        console.error(error.message);

        if (error.response) {
            return res.status(error.response.status).json({
                success: false,
                message: error.response.data.message
            });
        }

        return res.status(500).json({
            success: false,
            message: "Weather service unavailable."
        });

    }
};

module.exports = {
    getWeather
};