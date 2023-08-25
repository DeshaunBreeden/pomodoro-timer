import Labels from "./Components/Labels";
import DisplayTime from "./Components/DisplayTime";
import ToggleButton from "./Components/ToggleButton";
import useTimer from "./hooks/useTimer";
import { CircularProgressbarWithChildren, buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { controllers } from "./constants/constants";
import Modal from "./Components/settingsModal";
import { useState } from "react";

const App = () => {
  const { Pomodoro, selectedControl, setPomodoro, setSectedControl, resetTimerValues, getRemainingTimePercentage } = useTimer();
  const [isSettingsOn, setIsSettingsOn] = useState(false);

  return (
    <main className="relative flex flex-col justify-center items-center">
      <Labels
        resetTimerValues={resetTimerValues}
        selectedControl={selectedControl}
        setSectedControl={setSectedControl}
      />

      <div className="tw-timer-container">
        <div className="tw-timer">
          <div className="flex flex-col justify-center items-center font-semibold relative">
            <CircularProgressbarWithChildren
              strokeWidth={2}
              trailColor="transparent"
              value={getRemainingTimePercentage()}
              styles={buildStyles({
                trailColor: "transparent",
                pathColor: "#f87070",
              })}
            >
              <DisplayTime Pomodoro={Pomodoro} selectedControl={selectedControl} />
              <ToggleButton Pomodoro={Pomodoro} setPomodoro={setPomodoro}
              />
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
      <button className="w-8 h-8 m-6"
        type="button"
        onClick={() => setIsSettingsOn(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBot="0 0 24 24" strokeWidth={1.5} stroke="currentColor ">
          <path strokeLinejoin="round" strongLinecap="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      </button>
      <Modal isSettingsOn={isSettingsOn} setIsSettingsOn={setIsSettingsOn} setPomodoro={setPomodoro} />
    </main>
  );
};

export default App
