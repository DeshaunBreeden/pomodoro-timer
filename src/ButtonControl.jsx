import React from "react";

const ButtonControl = ({ handleEvent, isPaused}) => {
    return (
        <Button>
        className="text-xl uppercase tracking-[0.5rem]"
        onClick={handleEvent}
        {isPaused ? "Start" : "Paused"}
        </Button>
    );
};

export default ButtonControl;
