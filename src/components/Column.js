// components/Column.js
import React from "react";
import { useSelector } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import Task from "./Task";
import NewTaskForm from "./NewTaskForm";

function Column({ project, columnTitle }) {
  const tasks = useSelector((state) =>
    state.task.tasks.filter((task) => task.projectId === project.id && task.status === columnTitle)
  );

  return (
    <div className="flex-1 flex flex-col">
      <h3 className="text-lg font-bold mb-2">{columnTitle}</h3>
      <Droppable droppableId={project.id + columnTitle}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="flex-1 overflow-y-auto">
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <NewTaskForm projectId={project.id} columnTitle={columnTitle} />
    </div>
  );
}

export default Column;
