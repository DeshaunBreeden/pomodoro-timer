export const controllers = [
    { label: "Pomodoro", value: "PomodoroTime" },
    { label: "Short Break", value: "shortBreakTime" },
    { label: "Long Break", value: "longBreakTime" },
];

export const stages = {
    PomodoroTime: 25 * 60,
    shortBreakTime: 5 * 60,
    longBreakTime: 15 * 60,
    isPaused: true,
    period: 1,
};