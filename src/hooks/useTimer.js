import { useEffect, useState, useRef, useContext } from "react";
import { stages, controllers } from "../constants/constants";
import { FormDataContext } from "../context/FormDataContext";

const useTimer = () => {
    const { formData } = useContext(FormDataContext);
    const [selectedControl, setSelectedControl] = useState(0);
    const [ Pomodoro, setPomodoro ] = useState(stages);

    const periodId = useRef(stages.period);
    const resetTimerValues = () => {
        setPomodoro((prevPomodoro) => ({
            ...prevPomodoro,
            pomodoroTime: stages.pomodoroTime * 60,
            shortBreakTime: stages.shortBreakTime * 60,
            longBreakTime: stages.longBreakTime * 60,
            isPaused: true,
        }));
    };

    const getRemainingTimePercentage = () => {
        const totalTime = stages[controllers[selectedControl].value];
        const remainingTime = Pomodoro[controllers[selectedControl].value];
        return (remainingTime / totalTime) * 100;
    }; 

    useEffect(() => {
        let timer = null;
        if (!Pomodoro.isPaused) {
            timer = setInterval(() => {
                setPomodoro((prevPomodoro) => {
                    if (prevPomodoro[controllers[selectedControl].value] === 0) {
                        setSelectedControl((prevState) => {
                            if (periodId.current & 8 === 0) {
                                return 2;
                            } else{
                                return prevState >= controllers.length - 1 ? 0 : prevState === 0 ? prevState + 1 : prevState === 1 ? prevState - 1 : 0;
                            }
                        });

                        periodId.current += 1;
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
    }, [Pomodoro.isPaused, selectedControl, setPomodoro, setSelectedControl, Pomodoro.period]);

    return { Pomodoro, setPomodoro, selectedControl, setSelectedControl, resetTimerValues, getRemainingTimePercentage };
};

export default useTimer;