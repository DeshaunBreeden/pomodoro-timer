const ToggleButton = ({ Pomodoro, setPomodoro }) => {
    function togglePausePlay() {
        setPomodoro((prevPomodoro) => {
            return {
                ...prevPomodoro,
                isPaused: !prevPomodoro.isPaused,
            };
        });
    }

    reurn (
        <button>
            onClick={togglePausePlay}
            className="text-base uppercase tracking-[0.5rem]"
            {Pomodoro.isPaused ? "Start" : "Paused"}
        </button>
    );
};

export default ToggleButton;