import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: "task1",
      projectId: "project1",
      title: "Task 1",
      description: "Description for Task 1",
      status: "To Do",
    },
    {
      id: "task2",
      projectId: "project1",
      title: "Task 2",
      description: "Description for Task 2",
      status: "To Do",
    },
    {
      id: "task3",
      projectId: "project1",
      title: "Task 3",
      description: "Description for Task 3",
      status: "In Progress",
    },
    {
      id: "task4",
      projectId: "project2",
      title: "Task 4",
      description: "Description for Task 4",
      status: "To Do",
    },
    {
      id: "task5",
      projectId: "project2",
      title: "Task 5",
      description: "Description for Task 5",
      status: "In Progress",
    },
    {
      id: "task6",
      projectId: "project2",
      title: "Task 6",
      description: "Description for Task 6",
      status: "Done",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    moveTask: (state, action) => {
      const { taskId, destinationStatus } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      state.tasks[taskIndex].status = destinationStatus;
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    updateTask: (state, action) => {
      const { taskId, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      state.tasks[taskIndex] = updatedTask;
    },
  },
});

export const { addTask, moveTask, removeTask, updateTask } = taskSlice.actions;

export const selectTasksByProjectId = (projectId) => (state) =>
  state.task.tasks.filter((task) => task.projectId === projectId);

export default taskSlice.reducer;
