import React, { useState, useEffect } from "react";
import ButtonControl from "./ButtonControl";

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let timerId = null;

        if(!isPaused){
            timerId = setInterval(() => {
                setTimeLeft((pervTimeLeft) => {
                    if (pervTimeLeft === 0) {
                        clearInterval(timerId);
                        return 0; 
                } else {
                    return pervTimeLeft - 1;
                }
                });
            }, 1000);
        } else {

        }
        return () => clearInterval(timerId);
    }, [isPaused]);

    function pausedTimer(){
        setIsPaused((prevState) => !prevState);
        console.log(isPaused);
    }

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <>
        <div className="tw-ptimer-container">
            <div className="tw-ptimer">
                <div className="flex flex-col justify-center items-center">
                    {minutes}:{seconds < 10 ? "0" : ""}
                    {seconds}
                    <ButtonControl
                    handleEvent={pausedTimer}
                    isPaused={isPaused}
                    />
                </div>
            </div>
        </div>
        </>
    );
};

export default PTimer;

