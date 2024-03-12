import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";
import { login } from "../../store/authSlice";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Input from "./Input";

function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const signup = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(login(userData)));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
     
        <div
          className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 m-15`}
        >
          <span className="inline-block">
            <Logo />
          </span>
          <h2>Signup to create your account</h2>
          <p className="mt-2 text-center text-base text-black/60">
            Already have an account?
            <Link
              to="/login"
              className="font-medium hover:text-blue-600 text-blue-500 transition duration-150 ease-in-out"
            >
              {" "}
              Login{" "}
            </Link>
            .
          </p>
          {error && <p className=" text-red-500 mt-80 text-center">{error}</p>}
        <form onSubmit={handleSubmit(signup)} className="mt-8">
          <div className="space-y-5">
            <Input
              type="text"
              label="Full Name"
              placeHolder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              type="email"
              label="Email"
              placeHolder="Enter your email address"
              {...register("email", {
                required: true,

                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
          </div>
          <div className="space-y-1">
            <Input
              label="Password"
              type="password"
              placeHolder="Enter Your password"
              {...register("password", { required: true })}
            />
          </div>
          <Button type="submit" className="w-full mt-5">
            Sign up
          </Button>
        </form>
        </div>

        
     
    </>
  );
}

export default Signup;
