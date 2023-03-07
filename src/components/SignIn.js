import React from "react";
import {FcGoogle} from 'react-icons/fc'

const SignIn = () => {
    return (
        <div class="h-screen bg-purple-400 flex justify-center items-center">
            <div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
            <div class="absolute w-48 h-48 rounded-xl bg-purple-300 bottom-6 right-10 transform rotate-12 hidden md:block"></div>
            <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 w-11/12 md:w-1/3">
                <div>
                    <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer text-purple-500">
                        Welcome back, Chief!
                    </h1>
                    <p class=" text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                        Here's your kingdom. Please login and See your plans. Good luck!
                    </p>
                </div>

                <div class="flex w-full items-center justify-center bg-purple-100 py-5">
                    <button class="group relative h-12 w-52 overflow-hidden rounded-lg bg-white text-lg shadow">
                        <div class="absolute inset-0 w-3 bg-purple-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span class="relative text-purple-600 group-hover:text-white">Sign in with <FcGoogle style={{display:"inline"}} /></span>
                    </button>
                </div>
            </div>
            <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
            <div class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
        </div>
    );
};

export default SignIn;
