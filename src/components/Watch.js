import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";
import "./Watch.css";

const Watch = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());
  const [hourColor, setHourColor] = useState("#4caf50");
  const [minuteColor, setMinuteColor] = useState("#ff9800");
  const [isHourPickerVisible, setIsHourPickerVisible] = useState(false);
  const [isMinutePickerVisible, setIsMinutePickerVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const savedHourColor = localStorage.getItem("hourColor");
    const savedMinuteColor = localStorage.getItem("minuteColor");

    if (savedHourColor) setHourColor(savedHourColor);
    if (savedMinuteColor) setMinuteColor(savedMinuteColor);

    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours24 = time.getHours();
  const hours = (hours24 % 12 || 12).toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const ampm = hours24 < 12 ? "AM" : "PM";

  const handleHourClick = () => setIsHourPickerVisible(true);
  const handleMinuteClick = () => setIsMinutePickerVisible(true);
  const handleTimeClick = () => navigate("/shortcuts");

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="watch-container">
      <button className="fullscreen-btn" onClick={toggleFullscreen}>
        <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
      </button>

      <div className="horizontal-clock">
        <div
          className="time-section"
          style={{ backgroundColor: hourColor }}
          onClick={handleHourClick}
        >
          <span className="time-text">{hours}</span>
        </div>

        <span className="colon">:</span>

        <div
          className="time-section"
          style={{ backgroundColor: minuteColor }}
          onClick={handleMinuteClick}
        >
          <span className="time-text minutes-text">
            {minutes}
            {/* <span className="ampm">{ampm}</span> */}
          </span>
        </div>
      </div>

      <Modal
        isOpen={isHourPickerVisible}
        onClose={() => setIsHourPickerVisible(false)}
        color={hourColor}
        onColorChange={(e) => {
          const newColor = e.target.value;
          setHourColor(newColor);
          localStorage.setItem("hourColor", newColor);
        }}
      />

      <Modal
        isOpen={isMinutePickerVisible}
        onClose={() => setIsMinutePickerVisible(false)}
        color={minuteColor}
        onColorChange={(e) => {
          const newColor = e.target.value;
          setMinuteColor(newColor);
          localStorage.setItem("minuteColor", newColor);
        }}
      />
    </div>
  );
};

export default Watch;
