import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons"; // Import icons
import "./Watch.css";

const Watch = () => {
  const navigate = useNavigate(); // Create navigate function for navigation
  const [time, setTime] = useState(new Date());
  const [hourColor, setHourColor] = useState("#2196f3"); // Default hour color
  const [minuteColor, setMinuteColor] = useState("#ff5722"); // Default minute color
  const [isHourPickerVisible, setIsHourPickerVisible] = useState(false);
  const [isMinutePickerVisible, setIsMinutePickerVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false); // State for fullscreen

  useEffect(() => {
    // Load colors from localStorage
    const savedHourColor = localStorage.getItem("hourColor");
    const savedMinuteColor = localStorage.getItem("minuteColor");

    if (savedHourColor) setHourColor(savedHourColor);
    if (savedMinuteColor) setMinuteColor(savedMinuteColor);

    // Set up time interval
    const interval = setInterval(() => setTime(new Date()), 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  // Convert to 12-hour format with leading zeros
  const hours24 = time.getHours();
  const hours = (hours24 % 12 || 12).toString().padStart(2, "0"); // Ensure two digits
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const ampm = hours24 < 12 ? "AM" : "PM"; // Determine AM/PM

  // Calculate the percentage of the bottom section to be filled based on the minutes
  const fillPercentage = (parseInt(minutes) / 60) * 100;

  const handleHourClick = () => {
    setIsHourPickerVisible(true); // Open hour color picker
  };

  const handleMinuteClick = () => {
    setIsMinutePickerVisible(true); // Open minute color picker
  };

  const handleTimeClick = () => {
    navigate("/shortcuts"); // Navigate to Shortcuts page
  };

  const saveColorToLocalStorage = (key, color) => {
    localStorage.setItem(key, color);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="watch-container">
      <button
        onClick={toggleFullscreen}
        style={{
          position: "absolute",
          color: "rgba(255, 255, 255, 0.24)",
          backgroundColor: "transparent",
          top: "20px",
          right: "20px",
          zIndex: 1001,
          border: "none",
          borderRadius: "5px",
        }}
      >
        <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />{" "}
        {/* Use icons here */}
      </button>

      <div
        className="top-section"
        style={{ backgroundColor: hourColor }}
        onClick={handleHourClick} // Open hour color picker on click
      >
        <span className="time-text" onClick={handleTimeClick}>
          {hours} {/* Display hours with AM/PM */}
        </span>{" "}
        {/* Navigate on click */}
      </div>
      <div
        className="bottom-section"
        style={{ backgroundColor: minuteColor, height: `${fillPercentage}%` }}
        onClick={handleMinuteClick} // Open minute color picker on click
      >
        <span className="time-text minutes-text" onClick={handleTimeClick}>
          {minutes}
        </span>{" "}
        {/* Navigate on click */}
      </div>

      {/* Modal for hour color picker */}
      <Modal
        isOpen={isHourPickerVisible}
        onClose={() => setIsHourPickerVisible(false)}
        color={hourColor}
        onColorChange={(e) => {
          const newColor = e.target.value;
          setHourColor(newColor);
          saveColorToLocalStorage("hourColor", newColor); // Save to localStorage
        }}
      />

      {/* Modal for minute color picker */}
      <Modal
        isOpen={isMinutePickerVisible}
        onClose={() => setIsMinutePickerVisible(false)}
        color={minuteColor}
        onColorChange={(e) => {
          const newColor = e.target.value;
          setMinuteColor(newColor);
          saveColorToLocalStorage("minuteColor", newColor); // Save to localStorage
        }}
      />
    </div>
  );
};

export default Watch;
