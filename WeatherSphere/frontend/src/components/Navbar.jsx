import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
                borderBottom: "1px solid #ddd"
            }}
        >
            <h2>🌤️ WeatherSphere</h2>

            <div>
                <Link to="/login">Login</Link>

                {" | "}

                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;