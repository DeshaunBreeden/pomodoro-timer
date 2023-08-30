import React from "react";
import useCalculateTime from "../hooks/useCalculateTime";

const DisplayTime = ({ Pomodoro, selectedControl }) => {
  const { minutes, seconds } = useCalculateTime({ Pomodoro, selectedControl });

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return (
    <>{formattedMinutes}:{formattedSeconds}</>
  );
};

export default DisplayTime;