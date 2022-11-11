import React from "react";

const SettingsContext = React.createContext({
    studyMinutes: 60,
    breakMinutes:10
});

export default SettingsContext;