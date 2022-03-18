import { useState } from "react";
import './clock.css';

function Clock() {
    const time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
    
    function updateTime () {
        const time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);
    
    return (
        <div className="clock">
            <h1>
                {currentTime}
            </h1>
        </div>
    )
}

export default Clock;