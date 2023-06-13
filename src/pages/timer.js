import useGetCountdown from "@/hooks/useGetCountdown";
import { useEffect, useState } from "react";

const Timer = () => {
  const apiUrl = "http://localhost:3001/api/timer";
  const seconds = useGetCountdown(apiUrl);
  const [countdown, setCountdown] = useState(seconds);

  useEffect(() => {
    setCountdown(seconds);
  }, [seconds]);

  useEffect(() => {
    console.log("RENDER");
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    if (countdown <= 0) {
      return clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [seconds, countdown]);

  const formatCountdown = () => {
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return <p>{formatCountdown()}</p>;
};

export default Timer;
