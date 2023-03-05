import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addTask } from "../features/task/taskSlice";

const NewTaskForm=({ projectId, columnTitle }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        id: nanoid(),
        projectId,
        title,
        description,
        status: columnTitle,
      })
    );
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 my-2 rounded-md bg-white shadow-md"
          required
        />
      </div>
      <div className="mt-4">
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 my-2 rounded-md bg-white shadow-md"
          required
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default NewTaskForm;
