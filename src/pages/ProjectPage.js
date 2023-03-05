// ProjectPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import TaskList from "../components/TaskList";
import { selectProjectById } from "../features/project/projectSlice";
import { selectTasksByProjectId } from "../features/task/taskSlice";

function ProjectPage() {
  const { projectId } = useParams();
  const project = useSelector((state) => selectProjectById(state, projectId));
  const tasks = useSelector(selectTasksByProjectId(projectId));
  console.log(project)

  return (
    <div className="flex-1 flex flex-col">
      <header className="bg-green-700 py-4 px-8">
        <h1 className="text-white text-3xl font-bold">{project.name}</h1>
      </header>
      <main className="flex-1 p-8">
        <div className="flex justify-between mb-6">
          <TaskList
            status="To Do"
            tasks={tasks.filter((task) => task.status === "To Do")}
            projectId={projectId}
          />
          <TaskList
            status="In Progress"
            tasks={tasks.filter((task) => task.status === "In Progress")}
            projectId={projectId}
          />
          <TaskList
            status="Done"
            tasks={tasks.filter((task) => task.status === "Done")}
            projectId={projectId}
          />
        </div>
      </main>
    </div>
  );
}

export default ProjectPage;
