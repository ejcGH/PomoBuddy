import React from "react";
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css'
import 'react-circular-progressbar/dist/styles.css';

const Timer = () => {

    const value = 0.66;
    return (
<main>
<CircularProgressbar  
value={value} 
maxValue={1} 
text={`${value * 100} : ${value * 100}`} 

/>
</main>

    )

}


export default Timer;