import { useState, useEffect } from "react";

export default function QuestionTimer({timeout, onTimeOut, mode}) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(() => {
        console.log('Setting timeout');
        const clearTime = setTimeout(onTimeOut, timeout);
        return () => {
            clearTimeout(clearTime);
        }
    }, [timeout, onTimeOut]);
    useEffect(() => {
        console.log('Setting interval')
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 100);
        }, 100);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return <progress id="question-time" max={timeout} value={remainingTime} className={mode}/>
}