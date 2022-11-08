import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import {
  switchBreak,
  switchSession,
  decrSeconds,
} from "../actions/TimerActions";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Timer.css";
import "react-circular-progressbar/dist/styles.css";
import SettingsModal from "./Settings";

const Timer = ({
  secondsRemain,
  countdown,
  interval,
  switchBreak,
  switchSession,
  startTimer,
  pauseTimer,
  settings,
}) => {
  const value = 0.22;

  const [openModal, setOpenModal] = useState(false);
 
  return (
    <main>
      <CircularProgressbar
        value={value}
        maxValue={1}
        text={`${value * 100} : ${value * 100}`}
      />
      <div>
        {/* Play button */}
        <button {...startTimer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        </button>
        {/* Pause button */}
        <button {...pauseTimer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <div>
        {/* Settings button */}
        <button
          {...settings}
          className="with-text openModalBtn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>
          Settings
        </button>
        {openModal && <SettingsModal closeModal={ setOpenModal} />}
      </div>
    </main>
  );
};

const mapStateToProps = ({ secondsRemain, countdown, interval }) => ({
  secondsRemain,
  countdown,
  interval,
});

const mapDispatchToProps = {
  switchSession,
  switchBreak,
  decrSeconds,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
