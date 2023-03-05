// features/project/projectSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    { id: "project1", title: "Project 1" },
    { id: "project2", title: "Project 2" },
    { id: "project3", title: "Project 3" },
  ],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
});

export const selectProjectById = (state) => state.project.projects;

export default projectSlice.reducer;
