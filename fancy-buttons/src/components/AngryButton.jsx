import React, { useState } from "react";

function AngryButton(props) {

  const [anger, setAnger] = useState(0);

  const handleAnger = () => {
    if(anger < 1) {
      setAnger(anger + 0.1);
    }else{
      setAnger(0);
    }
    props.increaseAnger(0.1);
  }
   return (
     <button className="AngryButton"
             onClick={handleAnger}
             style={{ backgroundColor: `rgba(255,0,0,${anger})` }}>
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
     </button>
   )
}

export default AngryButton