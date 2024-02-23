import React, { useState } from "react";
import data from "../data";

export default function Index() {
  const [show, setShow] = useState(null);
  const [enable, setEnable] = useState(false)
  const[enableArray, setEnablearray] = useState([])

  const handleClick = (getCurrentId) => {
    setShow(show === getCurrentId ? null : getCurrentId);
    console.log(show);
  };
  const handleEnable = () => {
setEnable(!enable)
console.log(enable)
  }

  const handlemultplSlection = (getCurrentId) => {
    const copyArray = [...enableArray]
    const index = copyArray.indexOf(getCurrentId)
    if(index === -1){
        copyArray .push(getCurrentId)
    }else{
        copyArray.splice(index,1)
    }
    setEnablearray(copyArray)
console.log(enableArray)
  }
  return (
    <>
      <div className="flex flex-col align-middle items-center justify-center w-screen h-auto bg-orange-500">
          <h1 className="align-middle text-2xl font-semibold ">Welcome to my Home Page
          </h1>
          <button className="text-xl font-semibold border-2 p-5 rounded-md my-5" onClick={() => handleEnable()}>enable multy selection mode</button>
        <div className=" w-[700px]  h-screen">
            
          {data && data.length > 0
            ? data.map((dataitem) => {
                return (
                <div className="item">
                  <div
                    className="bg-orange-300 my-5 text-2xl font-semibold p-5 rounded-md "
                    key={dataitem.id}

                    onClick={() => enable?handleClick(dataitem.id):handlemultplSlection(dataitem.id)}
                  >
                    <div className="flex justify-between">
                    <span>{dataitem.question}</span> <span>+</span>
                    </div>
                   
                    
                    {!enable
                    ? enableArray.indexOf(dataitem.id) !== -1 && (
                        <div className="content text-sm text-white h-auto mt-5">
                          {dataitem.answer}
                        </div>
                      )
                    : show === dataitem.id && (
                        <div className="content text-sm text-white h-auto mt-5">
                          {dataitem.answer}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            : "Not found"}
        </div>
      </div>
    </>
  );
}
