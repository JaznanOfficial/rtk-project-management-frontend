// components/Task.js
import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="p-2 my-2 rounded-md bg-white shadow-md"
        >
          <h4 className="font-bold mb-2">{task.title}</h4>
          <p className="text-gray-600">{task.description}</p>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
