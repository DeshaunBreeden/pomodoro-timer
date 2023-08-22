import DisplayTime from "./Components/DisplayTime";
import ToggleButton from "./Components/ToggleButton";
import useTimer from "./hooks/useTimer";
import { CircularProgressbarWithChildren, buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { controllers } from "./constants/constants";

const App = () => {
  const { Pomodoro, selectedControl, setPomodoro, setSectedControl, getRemainingTimePercentage, resetTimerValues } = useTimer();

  return (
    <>
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
              })}>
              <DisplayTime>
                Pomodoro={Pomodoro}
                selectedControl={selectedControl}
              </DisplayTime>
              <ToggleButton>
                Pomodoro={Pomodoro}
                setPomodoro={setPomodoro}
              </ToggleButton>
              </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </>
  );
};

export default App
