export const INCR_BREAK = 'INCR_BREAK';
export const DECR_BREAK = 'DECR_BREAK';
export const INCR_SESSION = 'INCR_SESSION';
export const DECR_SESSION = 'DECR_SESSION';
export const START_TIMER = 'START_TIMER';
export const PAUSE_TIMER = 'PAUSE_TIMER';
export const RESET_TIMER = 'RESET_TIMER'
export const SWITCH_BREAK = 'SWITCH_BREAK';
export const SWITCH_SESSION = 'SWITCH_SESSION';
export const DECR_SECONDS = 'DECR_SECONDS';
export const SETTINGS = 'SETTINGS'

export const incrBreak = () => ({
    type: INCR_BREAK
})
export const decrBreak = () => ({
    type: DECR_BREAK
})

export const incrSession = () => ({
    type: INCR_SESSION
})

export const decrSession = () => ({
    type: DECR_SESSION
})

export const startTimer = () => ({
    type: START_TIMER
})

export const pauseTimer = () => ({
    type: PAUSE_TIMER
})

export const resetTimer = () => ({
    type: RESET_TIMER
})

export const switchBreak = () => ({
    type: SWITCH_BREAK
})

export const switchSession = () => ({
    type: SWITCH_SESSION
})

export const decrSeconds = () => ({
    type: DECR_SECONDS
})

export const settings = () => ({
    type: SETTINGS
})