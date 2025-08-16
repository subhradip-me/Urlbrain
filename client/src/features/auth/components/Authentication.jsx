import React, { useState } from "react";
import { API } from "../../../api/API";

export default function Authentication() {
  const [showLogin, setShowLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirm, setSignupConfirm] = useState("");
  const [signupUsername, setSignupUsername] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", {
        email: loginEmail,
        password: loginPassword,
      });
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (signupPassword !== signupConfirm) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await API.post("/auth/register", {
        email: signupEmail,
        password: signupPassword,
        name: signupUsername,
      });
      localStorage.setItem("token", res.data.token);
      alert("Registration successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="flex items-center justify-center bg-zinc-300 p-4"
    >
      <div
        className="relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg"
        style={{ background: "#ffff" }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: showLogin ? "translateX(0%)" : "translateX(-50%)",
            width: "200%",
          }}
        >
          {/* Login Card */}
          <div className="w-1/2 flex-shrink-0 p-6">
            <div className="bg-[#fff] rounded-lg p-6 h-full flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-1">Login</h2>
                <p className="text-gray-500 text-sm">
                  Enter your email below to login to your account
                </p>
              </div>
              <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="login-email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    placeholder="m@example.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-zinc-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="login-password"
                    className="block text-sm font-medium mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="login-password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-zinc-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 rounded bg-zinc-900 text-white font-semibold hover:bg-zinc-600 transition"
                >
                  Login
                </button>
              </form>
              <div className="mt-4 text-center text-sm">
                {"Don't have an account? "}
                <button
                  type="button"
                  className="underline text-blue-600"
                  onClick={() => setShowLogin(false)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>

          {/* Signup Card */}
          <div className="w-1/2 flex-shrink-0 p-6">
            <div className="bg-[#ffff] rounded-lg p-6 h-full flex flex-col justify-center">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-1">Sign Up</h2>
                <p className="text-gray-500 text-sm">
                  Enter your details below to create an account
                </p>
              </div>
              <form className="flex flex-col gap-4" onSubmit={handleSignup}>
                <div>
                  <label
                    htmlFor="signup-username"
                    className="block text-sm font-medium mb-1"
                  >
                    Username
                  </label>
                  <input
                    id="signup-username"
                    type="text"
                    placeholder="Your username"
                    value={signupUsername}
                    onChange={(e) => setSignupUsername(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-zinc-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="signup-email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    placeholder="m@example.com"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-zinc-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="signup-password"
                    className="block text-sm font-medium mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="signup-password"
                    type="password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-zinc-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium mb-1"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    value={signupConfirm}
                    onChange={(e) => setSignupConfirm(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-zinc-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 rounded bg-zinc-900 text-white font-semibold hover:bg-zinc-600 transition"
                >
                  Sign Up
                </button>
              </form>
              <div className="mt-4 text-center text-sm">
                {"Already have an account? "}
                <button
                  type="button"
                  className="underline text-blue-600"
                  onClick={() => setShowLogin(true)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
