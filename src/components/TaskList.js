// TaskList.js
import React from "react";
import { Droppable } from "react-beautiful-dnd";

import TaskCard from "./TaskCard";

function TaskList({ status, tasks, projectId }) {
  return (
    <div className="w-1/3 bg-gray-100 rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">{status}</h2>
      <Droppable droppableId={status}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                projectId={projectId}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TaskList;
