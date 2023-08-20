import React from "react";
import { controllers } from "../constants/constants";

const Labels = ({selectedControl, setSelectedControl}) => {
    function handleSelectedControl(index){
        setSelectedControl(index);
    }

    return (
        <ul className = "tw-infoContainer">
            {controllers.map((controller, index) => (
                <li
                key={index}
                className={`tw-infoItem ${selectedControl === index && "active"}`}
                onClick={() => handleSelectedControl(index)}>
                {controller.label}
                </li>
            ))}
        </ul>
    );
};

export default Labels;