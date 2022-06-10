import React, { useState } from "react";

function App() {
  const [currentTime, buttonClick] = useState(new Date().toLocaleTimeString('in-In'));

  function showTime() {
    buttonClick(new Date().toLocaleTimeString('in-In'))
  }
  
  // setInterval(showTime, 1000)

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;