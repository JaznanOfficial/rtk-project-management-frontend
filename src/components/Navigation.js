import React from "react";
import { FaTags } from "react-icons/fa";
import {MdMarkEmailRead} from "react-icons/md"

const Navigation = () => {
    return (
        <div class="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg shadow-2xl">
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div>
                <div class="flex items-center bg-purple-50 text-gray-800">
                    <div class="p-2 w-full">
                        <div class="grid grid-cols-12 gap-4 justify-center items-center">
                            <div class="col-span-12 sm:col-span-6 md:col-span-1 ">
                                <div class="relative w-full">
                                    <img
                                        class="w-2/3 mx-auto md:w-full rounded"
                                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                        alt=""
                                    />
                                    <span class="absolute bottom-0 left-8 md:left-14 transform translate-y-1/4 w-5 h-5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-6 md:col-span-5 shadow-xl justify-center items-center">
                                <div class="flex flex-row bg-white shadow-sm rounded p-4  justify-center items-center">
                                    <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                                        <MdMarkEmailRead/>
                                    </div>
                                    <div class="flex flex-col flex-grow ml-4">
                                        <div class="text-sm text-gray-500">Email</div>
                                        <p class="font-bold text-lg break-all text-blue-500">jaznanofficial@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-6 md:col-span-4 shadow-xl justify-center items-center">
                                <div class="flex flex-row bg-white shadow-sm rounded p-4 justify-center items-center">
                                    <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
                                        <FaTags/>
                                    </div>
                                    <div class="flex flex-col flex-grow ml-4">
                                        <div class="text-sm text-gray-500">Name</div>
                                        <div class="font-bold text-lg text-green-500">Md Abdur Rahman</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-span-12 sm:col-span-6 md:col-span-2">
                                <button class="group relative h-12 w-36 overflow-hidden rounded-lg bg-white text-lg shadow-xl">
                                    <div class="absolute inset-0 w-3 bg-purple-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                    <span class="relative text-purple-600 group-hover:text-white">
                                        Sign out{" "}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
