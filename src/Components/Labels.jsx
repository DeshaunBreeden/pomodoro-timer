import React from "react";

const Labels = ({selected, handleEvent}) => {
    const controllers = [
        { label: "Pomodoro", value: "pomodoroTime" },
        { label: "Short Break", value: "shortBreakTime" },
        { label: "Long Break", value: "longBreakTime" },
    ];

    return (
        <ul className = "tw-infoContainer">
            {controllers.map((controller, index) => (
                <li
                key={index}
                className={`tw-infoItem ${selected === index && "active"}`}
                onClick={() => handleEvent(index)}>
                {controller.label}
                </li>
            ))}
        </ul>
    );
};

export default Labels;