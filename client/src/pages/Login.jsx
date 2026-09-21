import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import Button from "../components/Button";

import { loginUser } from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData);

      // Save token
      localStorage.setItem("token", response.data.token);

      // Save user information
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login successful!");

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login failed. Please try again."
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-[85vh] bg-gray-50">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">

          <h1 className="text-3xl font-bold mb-2">
            Welcome Back
          </h1>

          <p className="text-gray-500 mb-8">
            Login to your UHired account.
          </p>

          <form onSubmit={handleSubmit}>

            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <Button>
              Login
            </Button>

          </form>

          <p className="text-center mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Login;