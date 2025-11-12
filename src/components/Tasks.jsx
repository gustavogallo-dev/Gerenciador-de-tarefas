import { ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onDeleteTaskClick, onTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="font-sans text-base sm:text-lg md:text-xl space-y-4 p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-md shadow-2xl w-full max-w-2xl mx-auto">
      {tasks.map((task) => (
        <li key={task.id} className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-white/10 backdrop-blur-md text-white p-2 rounded-md w-full hover:bg-white/20 transition duration-300 ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>

          <div className="flex gap-2 justify-end sm:justify-start">
            <button
              onClick={() => onSeeDetailsClick(task)}
              className="bg-white/10 font-sans backdrop-blur-md p-2 rounded-md text-white hover:bg-white/20 transition duration-300"
            >
              <ChevronRightIcon />
            </button>

            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-white/10 backdrop-blur-md p-2 rounded-md text-white hover:bg-white/20 transition duration-300"
            >
              <Trash2 />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
