// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectProjectById } from "../features/project/projectSlice";

function Sidebar() {
  const projects = useSelector(selectProjectById);

  return (
    <div className="flex flex-col bg-gray-100 w-64 px-8 pt-4 pb-6">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Kanban App</h1>
      <nav>
        <ul>
          {projects.map((project) => (
            <li key={project.id} className="mb-4">
              <Link
                to={`/projects/${project.id}`}
                className="text-green-700 font-bold hover:underline"
              >
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
