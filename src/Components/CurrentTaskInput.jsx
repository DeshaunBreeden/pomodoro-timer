import React from "react";

const CurrentTaskInput = ({ currentTask, setCurrentTask }) => {
  const handleTaskChange = (e) => {
    setCurrentTask(e.target.value);
  };

  return (
    <div className="current-task-container mt-4 text-pmd-blue-800">
      <input
        type="text"
        value={currentTask}
        onChange={handleTaskChange}
        placeholder="Enter your current task..."
        className="w-60 bg-pmd-blue-50 py-2 px-4 text-sm font-bold rounded-xl focus:outline-none border border-pmd-blue-300 placeholder-pmd-red-700"
      />
    </div>
  );
};

export default CurrentTaskInput;