import { controllers } from "../constants/constants";

const useCalculateTime = ({ Pomodoro, selectedControl }) => {
  const selectedValue = controllers[selectedControl].value;
  const totalSeconds = Pomodoro[selectedValue];
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return { minutes, seconds };
};

export default useCalculateTime;
