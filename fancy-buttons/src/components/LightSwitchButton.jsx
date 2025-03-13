import React, { useState } from "react";

function LightSwitchButton() {

  const [light, setLight] = useState("off");

  const handleClick = () => {
    setLight(light === "on" ? "off" : "on")
  }
  return(
     <button className="LightSwitchButton"
             onClick={handleClick}>
      {light === "on" && <span className="on"><i>💡</i>I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i>I'm off!</span>}
     </button>
  )
  
}

export default LightSwitchButton 