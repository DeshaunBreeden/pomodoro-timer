import React, { useState, useEffect } from "react";
import ButtonControl from "./ButtonControl";

const Timer = () => {
    const stages = ["pomodoroTime", "shortBreakTime", "longBreakTime"]
    const [Pomodoro, setPomodoro] = useState({
        pomodroTime: 1 * 2,
        shortBreakTime: 5 * 60,
        longBreakTime: 10 * 60,
        isPaused: true,
        period: 4,
        currentStage: stages[selected],
    });

    useEffect(() => {
        let timer = null;

        if (!Pomodoro.isPaused) {
            timer = setInterval(() => {
                setPomodoro((prevPomodoro) => {
                    if (prevPomodoro[Pomodoro.currentStage] === 0) {
                        prevPomodoro.currentStage = stages[selected];
                        clearInterval(timer);
                        return prevPomodoro;
                    }
                    return {
                        ...prevPomodoro,
                        [Pomodoro.currentStage]: prevPomodoro[Pomodoro.currentStage] - 1,
                    };
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [Pomodoro.isPaused, Pomodoro.currentStage]);

    function pausedTimer() {
        setPomodoro((prevPomodoro) => {
            return {
                ...prevPomodoro,
                isPaused: !prevPomodoro.isPaused,
            };
        });
    }

    return (
        <>
            <div className="tw-ptimer-container">
                <div className="tw-ptimer">
                    <div className="flex flex-col justify-center items-center font-semibold">
                        {Math.floor(Pomodoro [Pomodoro.currentStage] / 60)}: {Pomodoro[Pomodoro.currentStage] % 60 < 10 ? "0" : ""}
            {Pomodoro[Pomodoro.currentStage] % 60}
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

