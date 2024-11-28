import React from "react";
import { useState } from "react";
import { BiRegistered } from "react-icons/bi";
import { useDispatch } from "react-redux";


const SignupPage = () => {
  const dispatch =useDispatch();
  const [FormData,setformData]=useState({
    name:'',
    email:'',
    password:''
  });
  const [message,setmessage]=useState("");
  const handleChange=(e)=>{
    setformData({
        ...FormData,
        [e.target.name]:e.target.value,
    });
  };
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch('http://localhost:8080',{
        method :'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(FormData),

      }); 
      if(response.ok){
        const data=await response.json();
        setmessage("user registration successfull");
        dispatch(BiRegistered(FormData.name));
        setTimeout(()=>{
            onclose();
        },1000);
      } 
      else{
        const error=await response.json();
        setmessage(`error occured ${error}`);
      }
    }
    catch(error){
        setmessage(`error ${error}`);
    }

  };
  const HandleOverlay=(e)=>{
    if(e.target===e.currentTarget){
        onclose();
    }
  }
 
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 "onClick={HandleOverlay}>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"onClick={(e)=>e.stopPropagation()}>
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Create an Account
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 text-sm font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={FormData.name}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={FormData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={FormData.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* Confirm Password */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
            />
          </div>
          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        {/* Footer */}
        <div className="text-center mt-4 text-sm text-gray-500">
          <p>
            Already have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
