import React, { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setslected] = useState(null);
  // const [icon, setIcon] = useState("+");
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiSelected, setMultiseleced] = useState([]);
  const [btnColor,setBtncolor] = useState("bg-orange-500")
  function handelsingleselection(getCurrentId) {
    setslected(getCurrentId === selected ? null : getCurrentId);
  }
 
  function handelmultiselection(getCurrentId) {
    const copyArray = [...multiSelected];
    const index = copyArray.indexOf(getCurrentId);
    if (index === -1) {
      copyArray.push(getCurrentId);
    } else {
      copyArray.splice(index, 1);
    }
    setMultiseleced(copyArray);
   
  }

  return (
    <div className="wrapper flex h-screen w-screen bg-slate-700 align-middle justify-center items-center flex-col">
      <button
        className={`w-[700px] mb-5  text-white rounded-md h-10 ${btnColor}`}
        onClick={() => setEnableMulti(!enableMulti) || setBtncolor(enableMulti?"bg-orange-500":"bg-orange-800") }
      >
        Enable multi selection
      </button>
      <div className="accoording w-[700px]">
        {data && data.length > 0
          ? data.map((dataitem) => {
              return (
                <div
                  className="item border-red-200 bg-orange-500 mb-[10px] px-[10px] py-[20px] rounded-md "
                  key={dataitem.id}
                >
                  <div
                    onClick={
                      enableMulti
                        ? () => handelmultiselection(dataitem.id)
                        : () => handelsingleselection(dataitem.id)
                    }
                    className="title text-white flex justify-between items-center align-middle cursor-pointer"
                  >
                    <span className="text-2xl ">{dataitem.question}</span>
                    <span className=" text-2xl font-bold">+</span>
                  </div>
                  {enableMulti
                    ? multiSelected.indexOf(dataitem.id) !== -1 && (
                        <div className="content text-sm text-white h-auto mt-5">
                          {dataitem.answer}
                        </div>
                      )
                    : selected === dataitem.id && (
                        <div className="content text-sm text-white h-auto mt-5">
                          {dataitem.answer}
                        </div>
                      )}
                </div>
              );
            })
          : "Not Found data"}
      </div>
    </div>
  );
}
