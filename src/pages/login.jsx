import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import api from "../api/axios"
import Header from "../components/header";
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await login(username, password);
    if (success) {
      navigate('/');
    } else {
      // Manejar error de login
      alert('Login failed. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="container lg:max-w-screen-md mx-auto h-[calc(100vh_-_20vh)] flex items-center "> 
        <div className="w-80 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden mx-auto">
          <div className="flex flex-col justify-center items-center space-y-2">
            <h2 className="text-2xl font-medium text-slate-700">Login</h2>
            <p className="text-slate-500">Enter details below.</p>
          </div>
          <form className="w-full mt-4 space-y-3" onSubmit={handleSubmit}>
            <div>
              <input
                className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                placeholder="Username"
                id="username"
                name="username"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
              id="login"
              name="login"
              type="submit"
            >
              login
            </button>
            <p className="flex justify-center space-x-1">
              <span className="text-slate-700"> Have an account? </span>
              <a className="text-blue-500 hover:underline" href="#">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login
