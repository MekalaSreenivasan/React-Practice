import { useEffect, useState } from "react";
export default function ProgressBar({timer}) {
    const [remainingTime, setRemainingTime] = useState(5000);

    useEffect(() => {
      const interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 10);
      }, 10);
  
      return () => {
        clearInterval(interval);
      }
    }, []);

    return <progress value={remainingTime} max={5000}/>;
}