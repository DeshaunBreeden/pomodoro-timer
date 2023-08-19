import React, { useState, useEffect } from "react";
import ButtonControl from "./ButtonControl";

const Timer = () => {
    const [Pomodoro, setPomodoro] = useState({
        pomodroTime: 25 * 60,
        shortBreakTime: 5 * 60,
        longBreakTime: 10 * 60,
        isPaused: false,
        period: 4,
    });


    const controllerValues = ["pomodoroTime", "shortBreakTime", "longBreakTime"];
    useEffect(() => {
        let timer = null;
        if (!Pomodoro.isPaused) {
            timer = setInterval(() => {
                setPomodoro((prevPomodoro) => {
                    if (prevPomodoro[`${controllerValues[selected]}`] === 0) {
                        clearInterval(timer);
                        return prevPomodoro;
                    }
                    const returnValue = {
                        ...prevPomodoro,
                        [`${controllerValues[selected]}`]: prevPomodoro[`${controllerValues[selected]}`] - 1,
                    };
                    return returnValue;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [Pomodoro.isPaused]);

    function pausedTimer() {
        setPomodoro((prevState) => {
            return {
                ...prevState,
                isPaused: !prevState.isPaused,
            };
        });
    }

    return (
        <>
            <div className="tw-ptimer-container">
                <div className="tw-ptimer">
                    <div className="flex flex-col justify-center items-center font-semibold">
                        {Math.floor(Pomodoro [`${controllerValues[selected]}`] / 60)}: {Pomodoro[`${controllerValues[selected]}`] % 60 < 10 ? "0" : ""}
            {Pomodoro[`${controllerValues[selected]}`] % 60}
                        <ButtonControl
                            handleEvent={pausedTimer}
                            isPaused={Pomodoro.isPaused}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timer;

