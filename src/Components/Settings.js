import React from "react";


const SettingsModal = ({closeModal}) => {

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeModal(false)}> X </button>
                <div className="title">
                    <h1>Timer Settings</h1>
                </div>
                <div className="body">
                    <h2>Minutes dialer</h2>
                    <h2>Seconds dialer</h2>
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)}>Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>


    )
}

export default SettingsModal;