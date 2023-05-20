import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [countdownValue, setCountdownValue] = useState(0);

  useEffect(() => {
    const fetchCountdownValue = async () => {
      try {
        const response = await fetch(
          "https://abhishek-rho.vercel.app/api/timer"
        );
        const data = await response.json();
        // console.log(data);
        let seconds = data.countdown * 60;
        setCountdownValue(seconds);
      } catch (error) {
        console.debug("Error fetching countdown value:", error);
      }
    };

    fetchCountdownValue();
  }, []);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdownValue((prev) => prev - 1);
    }, 1000);
    if (countdownValue === 0) {
      return clearInterval(countdownInterval);
    }

    return () => clearInterval(countdownInterval);
  }, [countdownValue]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const timerText = (countdownValue) => {
    if (countdownValue > 0) {
      return formatTime(countdownValue);
    } else {
      return "Time's up!";
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2">Countdown Timer</h2>
      <p className="text-lg">{timerText(countdownValue)}</p>
    </div>
  );
};

export default CountdownTimer;
