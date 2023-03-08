import React from "react";
import { BsFileEarmarkPlus, BsPlusCircleFill } from "react-icons/bs";

const ProjectsBoards = () => {
    return (
        <div>
            <div>
                <div className="bg-gradient-to-r from-blue-300 via-purple-500 to-green-400 flex flex-row justify-between items-center h-10 px-5 border-1 border-gray-500 rounded-tr-lg rounded-tl-lg  my-10 static">
                    <div class="flex h-16 w-16 items-center justify-center relative bottom-0 -left-10">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU"
                            alt=""
                            className="w-full h-full rounded-full"
                        />
                    </div>
                    <div className="text-xl font-bold text-white">Kanban Project</div>
                    <div className="  inline-block text-white text-3xl font-bold cursor-pointer hover:animate-pulse">
                        <BsPlusCircleFill />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 justify-center items-center mt-10">
                <div className="bg-blue-300 p-1 rounded-lg h-screen">
                    <div className="bg-white flex flex-row justify-between items-center h-10 px-5 border-1 border-gray-500 rounded-tr-lg rounded-tl-lg static top-0 mb-1">
                        <div className="text-xl font-bold text-blue-500">Working</div>
                        <div className="  inline-block text-blue-500 text-3xl font-bold cursor-pointer hover:animate-pulse">
                            <BsFileEarmarkPlus />
                        </div>
                    </div>
                    <div className="w-full   rounded-lg border-none  p-1 overflow-y-auto relative">
                        <div class="flex items-center justify-around rounded-xl bg-white p-4 shadow-lg mt-1">
                            <div class="">
                                <h2 class="font-semibold text-blue-500">Kanban Board</h2>
                                <p className="text-md text-black">Md Abdur Rahman</p>
                            </div>
                            <div className="text-blue-500 text-3xl cursor-pointer ">
                                <BsPlusCircleFill />
                            </div>
                        </div>
                        <div class="flex items-center justify-around rounded-xl bg-white p-4 shadow-lg mt-1">
                            <div class="">
                                <h2 class="font-semibold text-blue-500">Kanban Board</h2>
                                <p className="text-md text-black">Md Abdur Rahman</p>
                            </div>
                            <div className="text-blue-500 text-3xl cursor-pointer ">
                                <BsPlusCircleFill />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-purple-300 p-1 rounded-lg h-screen">
                    <div className="bg-white flex flex-row justify-between items-center h-10 px-5 border-1 border-gray-500 rounded-tr-lg rounded-tl-lg static top-0 mb-1">
                        <div className="text-xl font-bold text-purple-500">Working</div>
                        {/* <div className="  inline-block text-purple-500 text-3xl font-bold cursor-pointer hover:animate-pulse">
                            <BsFileEarmarkPlus />
                        </div> */}
                    </div>
                    <div className="w-full   rounded-lg border-none  p-1 overflow-y-auto relative">
                        <div class="flex items-center justify-around rounded-xl bg-white p-4 shadow-lg mt-1">
                            <div class="">
                                <h2 class="font-semibold text-purple-500">Kanban Board</h2>
                                <p className="text-md text-black">Md Abdur Rahman</p>
                            </div>
                            <div className="text-purple-500 text-3xl cursor-pointer ">
                                <BsPlusCircleFill />
                            </div>
                        </div>
                        <div class="flex items-center justify-around rounded-xl bg-white p-4 shadow-lg mt-1">
                            <div class="">
                                <h2 class="font-semibold text-purple-500">Kanban Board</h2>
                                <p className="text-md text-black">Md Abdur Rahman</p>
                            </div>
                            <div className="text-purple-500 text-3xl cursor-pointer ">
                                <BsPlusCircleFill />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-green-300 p-1 rounded-lg h-screen">
                    <div className="bg-white flex flex-row justify-between items-center h-10 px-5 border-1 border-gray-500 rounded-tr-lg rounded-tl-lg static top-0 mb-1">
                        <div className="text-xl font-bold text-green-500">Working</div>
                    </div>
                    <div className="w-full   rounded-lg border-none  p-1 overflow-y-auto relative">
                        <div class="flex items-center justify-around rounded-xl bg-white p-4 shadow-lg mt-1">
                            <div class="">
                                <h2 class="font-semibold text-green-500">Kanban Board</h2>
                                <p className="text-md text-black">Md Abdur Rahman</p>
                            </div>
                            <div className="text-green-500 text-3xl cursor-pointer ">
                                <BsPlusCircleFill />
                            </div>
                        </div>
                        <div class="flex items-center justify-around rounded-xl bg-white p-4 shadow-lg mt-1">
                            <div class="">
                                <h2 class="font-semibold text-green-500">Kanban Board</h2>
                                <p className="text-md text-black">Md Abdur Rahman</p>
                            </div>
                            <div className="text-green-500 text-3xl cursor-pointer ">
                                <BsPlusCircleFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsBoards;
