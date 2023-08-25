import { controllers } from "../constants/constants";

const DisplayTime = ({ Pomodoro, selectedControl }) => {
    const minutes = Math.floor(Pomodoro[controllers[selectedControl].value] / 60);
    const seconds = Math.floor(Pomodoro[controllers[selectedControl].value] % 60)

    return (
        <>
        {minutes < 9 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
        </>
    );
};

export default DisplayTime;