// src/components/Shortcuts.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Shortcuts.css"; // Make sure to create this CSS file

const Shortcuts = () => {
  const navigate = useNavigate();

  return (
    <div className="shortcuts-container">
      <div
        className="back-icon"
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
      >
        &larr; {/* Simple left arrow as back icon */}
      </div>
      <div className="shortcuts-table">
        <div className="column">
          <h2>VS Code</h2>
          <table>
            <tbody>
              <tr>
                <td>Format Document</td>
                <td>Ctrl + Shift + I</td>
              </tr>
              <tr>
                <td>Open Command Palette</td>
                <td>Ctrl + Shift + P</td>
              </tr>
              <tr>
                <td>Toggle Terminal</td>
                <td>Ctrl + `</td>
              </tr>
              <tr>
                <td>Comment/Uncomment Line</td>
                <td>Ctrl + /</td>
              </tr>
              <tr>
                <td>Find</td>
                <td>Ctrl + F</td>
              </tr>
              <tr>
                <td>Replace</td>
                <td>Ctrl + H</td>
              </tr>
              <tr>
                <td>Go to Line</td>
                <td>Ctrl + G</td>
              </tr>
              <tr>
                <td>Save</td>
                <td>Ctrl + S</td>
              </tr>
              <tr>
                <td>New File</td>
                <td>Ctrl + N</td>
              </tr>
              <tr>
                <td>Close Editor</td>
                <td>Ctrl + W</td>
              </tr>
              <tr>
                <td>Duplicate Line</td>
                <td>Shift + Alt + Down/Up</td>
              </tr>
              <tr>
                <td>Show Integrated Terminal</td>
                <td>Ctrl + Shift + `</td>
              </tr>
              <tr>
                <td>Move Line Up/Down</td>
                <td>Alt + Up/Down</td>
              </tr>
              <tr>
                <td>Go to Definition</td>
                <td>F12</td>
              </tr>
              <tr>
                <td>Peek Definition</td>
                <td>Alt + F12</td>
              </tr>
              <tr>
                <td>Toggle Sidebar</td>
                <td>Ctrl + B</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="column">
          <h2>Windows</h2>
          <table>
            <tbody>
              <tr>
                <td>Show Desktop</td>
                <td>Win + D</td>
              </tr>
              <tr>
                <td>Task Manager</td>
                <td>Ctrl + Shift + Esc</td>
              </tr>
              <tr>
                <td>Switch Applications</td>
                <td>Alt + Tab</td>
              </tr>
              <tr>
                <td>Take Screenshot</td>
                <td>Win + Shift + S</td>
              </tr>
              <tr>
                <td>Lock PC</td>
                <td>Win + L</td>
              </tr>
              <tr>
                <td>Open Run Dialog</td>
                <td>Win + R</td>
              </tr>
              <tr>
                <td>Open Settings</td>
                <td>Win + I</td>
              </tr>
              <tr>
                <td>Open File Explorer</td>
                <td>Win + E</td>
              </tr>
              <tr>
                <td>Create New Folder</td>
                <td>Ctrl + Shift + N</td>
              </tr>
              <tr>
                <td>Switch Between Open Windows</td>
                <td>Alt + Esc</td>
              </tr>
              <tr>
                <td>Minimize All Windows</td>
                <td>Win + M</td>
              </tr>
              <tr>
                <td>Restore Minimized Windows</td>
                <td>Win + Shift + M</td>
              </tr>
              <tr>
                <td>Close Active Window</td>
                <td>Alt + F4</td>
              </tr>
              <tr>
                <td>Open Task View</td>
                <td>Win + Tab</td>
              </tr>
              <tr>
                <td>Snap Window Left</td>
                <td>Win + Left Arrow</td>
              </tr>
              <tr>
                <td>Snap Window Right</td>
                <td>Win + Right Arrow</td>
              </tr>
              <tr>
                <td>Open New Tab in Browser</td>
                <td>Ctrl + T</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="column">
          <h2>Developer Shortcuts</h2>
          <table>
            <tbody>
              <tr>
                <td>Open Developer Tools</td>
                <td>F12</td>
              </tr>
              <tr>
                <td>Toggle Breakpoint</td>
                <td>F9</td>
              </tr>
              <tr>
                <td>Step Over</td>
                <td>F10</td>
              </tr>
              <tr>
                <td>Step Into</td>
                <td>F11</td>
              </tr>
              <tr>
                <td>Run</td>
                <td>F5</td>
              </tr>
              <tr>
                <td>Refresh Page</td>
                <td>F5</td>
              </tr>
              <tr>
                <td>Open Console</td>
                <td>Ctrl + Shift + J</td>
              </tr>
              <tr>
                <td>Toggle Responsive Design Mode</td>
                <td>Ctrl + Shift + M</td>
              </tr>
              <tr>
                <td>View Source Code</td>
                <td>Ctrl + U</td>
              </tr>
              <tr>
                <td>Run Test</td>
                <td>Ctrl + R</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;
