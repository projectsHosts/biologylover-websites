import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(7200);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = () => {
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = time % 60;
    return `${h}:${m}:${s}`;
  };

  return <div className="timer">⏳ {format()}</div>;
};

export default Timer;