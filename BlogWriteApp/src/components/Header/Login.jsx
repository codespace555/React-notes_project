import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";
import { login as authLogin } from "../../store/authSlice";
import { Button, Logo } from "../index";
import Input from "./Input";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const UserData = await authService.getCurrentUser();
        if (UserData) {
          dispatch(authLogin(UserData));
          navigate("/");
        }
      }
    } catch (error) {
      setError("Something went wrong are not valid");
    }
  };

  return (
    <>
    
      <div className="flex items-center justify-center w-full flex-wrap p-5 bg-[url('./blog-blogging-homepage-social-media-600nw-381746308.webp')] bg-center bg-no-repeat bg-cover h-screen bg-scroll  bg-black/25">
      
        <div
          className={`mx-auto w-full max-w-lg bg-gray-300 rounded-lg p-10 border border-black/10`}
        >
          <span className="inline-block">
            <Logo />
          </span>
          <h2>Sign in to your account</h2>
          <p className="mt-2 text-center text-base text-black/60">
            Don't have an account?
            <Link
              to="/signup"
              className="font-medium hover:text-blue-900 text-blue-500 transition duration-150 ease-in-out"
            >
              {" "}
              Sign up{" "}
            </Link>
            .
          </p>
          {error && <p className=" text-red-500  text-center">{error}</p>}
          <form onSubmit={handleSubmit(login)} className="mt-8">
            <div className="space-y-5">
              <Input
                type="email"
                label="Email"
                placeHolder="Enter your email address"
                {...register("email", {
                  required: true,

                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
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
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
