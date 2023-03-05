// ProjectList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProject } from "../store/slices/projectSlice";

function ProjectList() {
  const projects = useSelector((state) => state.project.projects);
  const selectedProjectId = useSelector(
    (state) => state.project.selectedProjectId
  );
  const dispatch = useDispatch();

  const handleProjectClick = (project) => {
    dispatch(selectProject(project.id));
  };

  return (
    <div className="w-1/4 bg-white h-screen overflow-y-auto">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Projects</h1>
      </div>
      <div className="p-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`p-2 my-1 rounded-lg cursor-pointer ${
              selectedProjectId === project.id
                ? "bg-green-500 text-white"
                : "hover:bg-green-500 hover:text-white"
            }`}
            onClick={() => handleProjectClick(project)}
          >
            {project.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
