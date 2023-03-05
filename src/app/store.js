import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../features/project/projectSlice';
import taskReducer from '../features/task/taskSlice';

const store = configureStore({
  reducer: {
    project: projectReducer,
    task: taskReducer,
  },
});

export default store;
