import { useState } from "react";
import { register } from "../services/authService";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await register(formData);

            console.log(response.data);

            alert("User registered successfully!");

            // Clear the form after successful registration
            setFormData({
                name: "",
                email: "",
                password: ""
            });

        } catch (error) {
            console.error(error.response?.data || error.message);

            alert(
                error.response?.data?.message || "Registration failed."
            );
        }
    };

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Name</label>
                    <br />
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <label>Email</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <button type="submit">
                    Register
                </button>

            </form>
        </div>
    );
}

export default Register;