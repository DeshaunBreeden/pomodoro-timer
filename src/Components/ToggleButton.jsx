import React from "react";

const ToggleButton = ({ Pomodoro, setPomodoro }) => {
  const togglePause = () => {
    setPomodoro((prevPomodoro) => ({
      ...prevPomodoro,
      isPaused: !prevPomodoro.isPaused,
    }));
  };

  const buttonText = Pomodoro.isPaused ? "Start" : "Pause";

  return (
    <button
      onClick={togglePause}
      className="text-base uppercase tracking-[0.5rem]"
      aria-label={Pomodoro.isPaused ? "Start" : "Pause"}
    >
      {buttonText}
    </button>
  );
};

export default ToggleButton;