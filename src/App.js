import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "./components/Sidebar";
import KanbanBoard from "./components/KanbanBoard";
import ProjectPage from './pages/ProjectPage';


function App() {
  const projects = useSelector((state) => state.project.projects);

  return (
    
      <div className="flex">
        <Sidebar projects={projects} />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<h1 className="text-2xl font-bold">Welcome to Kanban App</h1>} />
            <Route path="/projects/:id" element={<ProjectPage />} />
          </Routes>
        </div>
      </div>
   
  );
}

export default App;
