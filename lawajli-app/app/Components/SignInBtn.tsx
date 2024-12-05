"use client"
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { signIn } from "next-auth/react";

const SignInBtn = () => {
  return (
    <>
      <div onClick={() => signIn("github", { redirectTo: "/dashboard" })} className="btn-singin-platform">
        <FaGithub size={30} /> Sign In With Github
      </div>
      <div onClick={() => signIn("github", { redirectTo: "/dashboard" })} className="btn-singin-platform">
        <FcGoogle size={30} /> Sign In With Google
      </div>
      <div onClick={() => signIn("twitter", { redirectTo: "/dashboard" })} className="btn-singin-platform">
        <FaXTwitter size={30} /> Sign In With Twitter
      </div>
    </>
  );
};

export default SignInBtn;
