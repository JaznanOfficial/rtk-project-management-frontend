// components/KanbanBoard.js
import React from "react";
import { useSelector } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Column from "./Column";

function KanbanBoard() {
  const projects = useSelector((state) => state.project.projects);

  const onDragEnd = (result) => {
    // TODO: Implement drag and drop functionality
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex justify-center space-x-4 overflow-x-auto">
        {projects.map((project) => (
          <Droppable droppableId={project.id} key={project.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-96 rounded-lg shadow-lg bg-gray-100 p-4"
              >
                <h2 className="text-lg font-bold mb-4">{project.title}</h2>
                <div className="flex space-x-4">
                  <Column
                    key={project.id + "todo"}
                    project={project}
                    columnTitle="To Do"
                  />
                  <Column
                    key={project.id + "inprogress"}
                    project={project}
                    columnTitle="In Progress"
                  />
                  <Column
                    key={project.id + "done"}
                    project={project}
                    columnTitle="Done"
                  />
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default KanbanBoard;
