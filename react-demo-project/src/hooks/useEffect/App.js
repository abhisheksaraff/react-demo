import React, { useState, useEffect } from "react";

const App = () => {
  //functional state
  const [color, setColor] = useState("black");
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("hi")

    const changeColorOnClick = () => {
      let tempCount = count + 1;
      setCount(tempCount)
      console.log(tempCount);
      if (color === "black") {
        setColor("red");
      } else {
        setColor("black");
      }
    };
    
    document.addEventListener("keyup", changeColorOnClick);

    //code that executes when componentWillUnmount()
    return () => {
      document.removeEventListener("keyup", changeColorOnClick);
    };
  }, [color, count]); // parameter for change (componentDidUpdate())

  return (
    <div>
      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
    </div>
  );
};

export default App;