// import { startTimer} from './actions/TimerActions'
import {
  INCR_BREAK,
  DECR_BREAK,
  INCR_SESSION,
  DECR_SESSION,
  START_TIMER,
  PAUSE_TIMER,
  RESET_TIMER,
  SWITCH_BREAK,
  SWITCH_SESSION,
  DECR_SECONDS,
} from "../actions/TimerActions";

const initialState = {
  breakDuration: 10,
  sessionDuration: 50,
  interval: "Session",
  secondsRemain: 25 * 60,
  countdown: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCR_BREAK:
      return {
        ...state,
        breakDuration: state.breakDuration + 1,
      };
    case DECR_BREAK:
      return {
        ...state,
        breakDuration: state.breakDuration - 1,
      };
    case INCR_SESSION:
      return {
        ...state,
        sessionDuration: state.sessionDuration + 1,
        seccondsRemain: (state.sessionDuration + 1) * 60,
      };
    case DECR_SESSION:
      return {
        ...state,
        sessionDuration: state.sessionDuration - 1,
        secondsRemain: (state.sessionDuration - 1) * 60,
      };
    case START_TIMER:
      return {
        ...state,
        countdown: true,
      };
    case PAUSE_TIMER:
      return {
        ...state,
        countdown: false,
      };
    case RESET_TIMER:
      return {
        ...state,
        breakDuration: 10,
        sessionDuration: 50,
        interval: "Session",
        secondsRemain: 25 * 60,
        countdown: false,
      };
    case SWITCH_BREAK:
      return {
        ...state,
        interval: "Break",
        secondsRemain: state.breakDuration * 60,
      };
    case SWITCH_SESSION:
      return {
        ...state,
        interval: "Session",
        secondsRemain: state.sessionDuration * 60,
      };
    case DECR_SECONDS:
      return {
        ...state,
        secondsRemain: state.secondsRemain - 1,
      };
    default:
      return state;
  }
};

export default rootReducer