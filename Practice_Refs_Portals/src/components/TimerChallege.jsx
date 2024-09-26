import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}) {
    const [remainingTime, setReminingTime] = useState(targetTime * 1000);
    const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

    const timer = useRef();
    const dialog = useRef();
    if (remainingTime <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleTimerReset() {
        setReminingTime(targetTime * 1000);
    }

    function handleStartTimer() {
        timer.current = setInterval(() => {
            setReminingTime((prevTime) => prevTime - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }
    return <>
        <ResultModal ref={dialog} 
            targetTime={targetTime} 
            remainingTime={remainingTime} 
            onReset={handleTimerReset}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={ timerIsActive ? handleStop : handleStartTimer}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is Running...' : 'Timer inActive'}
            </p>
        </section>
    </>
}