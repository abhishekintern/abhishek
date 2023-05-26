import { useEffect, useState } from "react";
import { useIdleTimer } from "react-idle-timer";

export default function IdleJS() {
  const [state, setState] = useState("Active");
  const [remaining, setRemaining] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [eventType, setEventType] = useState("event");

  const onIdle = () => {
    setState("Idle");
  };

  const onActive = () => {
    setState("Active");
  };

  const onAction = (event) => {
    setEventType(event?.type);
  };

  const { getRemainingTime, getTotalIdleTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: 10_000,
    throttle: 500,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000));
      setTotalTime(Math.ceil(getTotalIdleTime() / 1000));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="w-full h-screen flex items-center justify-center p-5">
      <div className="h-full w-full border-2 bg-purple-100 flex flex-col items-center justify-center">
        <h1>React Idle Timer</h1>
        <br />
        <p>Current State: {state}</p>
        <p>Last Event: {eventType}</p>
        <p>{remaining} seconds remaining</p>
        <p>{totalTime} seconds Idle Time</p>
      </div>
    </div>
  );
}
