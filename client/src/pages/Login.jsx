import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Navbar />

      <div className="flex justify-center mt-20">
        <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">

          <h1 className="text-3xl font-bold mb-2">
            Welcome Back!
          </h1>

          <p className="text-gray-500 mb-8">
            Login to your UHired account.
          </p>

          <InputField
            label="Email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button>Login</Button>

          <p className="text-center mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold"
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