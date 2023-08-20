import DisplayTime from "./Components/DisplayTime";
import ToggleButton from "./Components/ToggleButton";
import useTimer from "./hooks/useTimer";

const App = () => {
  const { Pomodoro, selectedControl, setPomodoro, setSectedControl } = useTimer();

  return (
    <>
      <Labels
        selectedControl={selectedControl}
        setSectedControl={setSectedControl}
      />

      <div className="tw-timer-container">
        <div className="tw-timer">
          <div className="flex flex-col justify-center items-center font-semibold">
              <DisplayTime>
                Pomodoro={Pomodoro}
                selectedControl={selectedControl}
              </DisplayTime>
              <ToggleButton>
                Pomodoro={Pomodoro}
                setPomodoro={setPomodoro}
              </ToggleButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default App
