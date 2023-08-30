import React, { useState } from "react";

const CurrentTaskInput = ({ currentTask, setCurrentTask }) => {
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const addTask = () => {
    if (currentTask.trim() !== "") {
      setTasks([...tasks, currentTask]);
      setCurrentTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="current-task-container mt-4">
      <input
        type="text"
        value={currentTask}
        onChange={handleTaskChange}
        placeholder="Enter your task..."
        className="text-pmd-blue-900 w-48 bg-pmd-blue-50 py-2 px-4 text-sm font-bold rounded-xl focus:outline-none border border-pmd-blue-300 placeholder-pmd-red-700"
      />
      <button
        onClick={addTask}
        className="py-2 ml-2 bg-pmd-blue-300 text-pmd-blue-900 text-sm font-bold  rounded-full px-4 hover:bg-pmd-blue-300 transition-all cursor-pointer"
      >
        Add Task
      </button>

      <div className="mt-2">
        {tasks.map((task, index) => (
          <div key={index} className="flex justify-between items-center">
            <p className="mt-1 text-pmd-blue-900 w-48 bg-pmd-blue-50 py-2 px-4 text-sm font-bold rounded-xl focus:outline-none border border-pmd-blue-300">{task}</p>
            <button
              onClick={() => removeTask(index)}
              className="text-pmd-blue-300 font-bold rounded-xl cursor-pointer mt-1 text-4xl"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentTaskInput;