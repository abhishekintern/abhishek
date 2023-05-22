import { useEffect, useState } from "react";

const useGetCountdown = (apiUrl) => {
  const [seconds, setSeconds] = useState(null);

  useEffect(() => {
    const fetchCountdown = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        let time = data.countdown * 60;
        setSeconds(time);
      } catch (error) {
        console.error("Error fetching countdown:", error);
      }
    };

    fetchCountdown();
  }, [apiUrl]);

  return seconds
};

export default useGetCountdown;
