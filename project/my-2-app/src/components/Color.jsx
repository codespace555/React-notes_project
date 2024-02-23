import React, { useEffect, useState } from "react";

export default function Color() {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("");
  const random = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreaterandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "e", "f"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[random(hex.length)];
      console.log(hexColor);
    }
    setColor(hexColor);
    
  };
  const handleCreaterandomrbgColor = () => {
    const r = random(256);
    const g = random(256);
    const b = random(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };
  
  useEffect(() => {
    if (typeofColor === "rbg") {
      handleCreaterandomrbgColor;
    } else {
      handleCreaterandomHexColor;
    }
  }, [typeofColor]);
  return (
    <div className={`w-screen h-screen p-5`} style={{ backgroundColor: color }}>
      <button
        className="w-auto h-auto p-2 m-2 rounded-md bg-white"
        onClick={() =>
          typeofColor === "hex"
            ? handleCreaterandomHexColor()
            : handleCreaterandomrbgColor()
        }
      >
        Random Color
      </button>
      <button
        className="w-auto h-auto p-2 m-2 rounded-md bg-white"
        onClick={() => setTypeofColor("hex")}
      >
        Hex Color
      </button>
      <button
        className="w-auto h-auto p-2 m-2 rounded-md bg-white"
        onClick={() => setTypeofColor("rgb")}
      >
        Create RGB Color
      </button>
      <h3>{typeofColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
      <h1 className="text-5xl text-center">{color}</h1>
    </div>
  );
}
