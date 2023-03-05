import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeTask, updateTask } from "../features/task/taskSlice";
// import { removeTask, updateTask } from "../features/tasks/taskSlice";
// import { useNavigate } from "react-router-dom";

function TaskCard({ task, projectId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id, projectId: projectId },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        if (dropResult.status !== task.status) {
          dispatch(
            updateTask({
              id: task.id,
              changes: { status: dropResult.status },
            })
          );
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  const handleEdit = () => {
    navigate.push(`/projects/${projectId}/tasks/${task.id}`);
  };

  return (
    <div
      ref={drag}
      className={`p-4 bg-white rounded-md shadow-md mb-4 ${
        isDragging && "opacity-50"
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{task.title}</h3>
        <div className="flex">
          <button
            className="text-gray-500 hover:text-gray-700 mr-2"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-500">{task.description}</p>
    </div>
  );
}

export default TaskCard;
