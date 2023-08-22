import { useEffect, useState } from "react";
import { stages, controllers } from "../constants/constants";

const useTimer = () => {
    const [selectedControl, setSelectedControl] = useState(0);
    const [ Pomodoro, setPomodoro ] = useState(stages);

    const getRemainingTimePercentage = () => {
        const totalTime = stages[controllers[selectedControl].value];
        const remainingTime = Pomodoro[controllers[selectedControl].value];
        return (remainingTime / totalTime) * 100;
    };

    const resetTimerValues = () => {
        setPomodoro((prevPomodoro) => ({
            ...prevPomodoro,
            pomodoroTime: stages.pomodoroTime,
            shortBreakTime: stages.shortBreakTime,
            longBreakTime: stages.longBreakTime,
        }));
    };

    useEffect(() => {
        let timer = null;

        if (!Pomodoro.isPaused) {
            timer = setInterval(() => {
                setPomodoro((prevPomodoro) => {
                    if (prevPomodoro[controllers[selectedControl].value] === 0) {
                        setSelectedControl((prevState) => {
                            return prevState < controllers.length - 1 ? prevState + 1 : 0;
                        });
                        resetTimerValues();
                        clearInterval(timer);
                        return prevPomodoro;
                    }
                    return {
                        ...prevPomodoro,
                        [controllers[selectedControl].value] : prevPomodoro[controllers[selectedControl].value] - 1,
                    };
                });
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [Pomodoro.isPaused, selectedControl, setPomodoro, setSelectedControl]);

    return { Pomodoro, setPomodoro, selectedControl, setSelectedControl, getRemainingTimePercentage, resetTimerValues };
};

export default useTimer;