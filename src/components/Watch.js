import React, { useState, useEffect } from "react";
import "./Watch.css";

const Watch = () => {
  const [time, setTime] = useState(new Date());
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  const hours24 = time.getHours();
  const hours = (hours24 % 12 || 12).toString();
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const day = time.toLocaleString("en-US", { weekday: "short" });
  const month = time.toLocaleString("en-US", { month: "short" });
  const date = time.getDate().toString();

  return (
    <div className="watch-container">
      <div className="time-date-wrapper">
        {/* Clock */}
        <div className="clock-box">
          <span className="clock-text">
            {hours}:{minutes}
          </span>
        </div>

        {/* Date */}
        <div className="date-box">
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span className="date-day">{day}</span>
            <span className="date-month">{month}</span>
          </div>
          <span className="date-number">{date}</span>
        </div>
      </div>

      {/* Fullscreen Button */}
      <div className="fullscreen-btn" onClick={toggleFullScreen}>
        {isFullScreen ? "-" : "-"}
      </div>
    </div>
  );
};

export default Watch;
