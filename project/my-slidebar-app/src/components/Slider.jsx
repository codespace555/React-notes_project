import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
export default function Slider({ url, limit = 5 }) {
  const [image, setImage] = useState([]);
  const [currentSlid, setCurrentSlide] = useState(0);
  const [errormsg, setErrormsg] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchImage(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await res.json();
      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (error) {
      setErrormsg(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") {
      fetchImage(url);
    }
  }, [url]);
  console.log(image);
  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (errormsg !== null) {
    return <div style={{ color: "red" }}>{errormsg}</div>;
  }
  const handlePrev = () => {
    setCurrentSlide(currentSlid === 0 ? image.length - 1 : currentSlid - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlid === image.length - 1 ? 0 : currentSlid + 1);
  };
  setTimeout(handleNext, 15000)
console.log(currentSlid)
  return (
    <>
      <div className=" flex items-center justify-center">
        <div className="flex justify-center items-center w-[1400px] h-[450px] ">
          {image && image.length > 0
            ? image.map((pic, index) => {
                return (
                  <img
                    key={pic.id}
                    src={pic.download_url}
                    alt={pic.download_url}
                    className={`rounded-md border-2 h-full w-full drop-shadow-xl ${
                      currentSlid === index ? "block": "hidden"
                    }`}
                  />
                );
              })
            : null}
          <button
            onClick={() => handlePrev()}
            className="absolute  left-4 bg-white rounded-full m-2 p-2"
          >
            <FaAngleDoubleLeft className="w-[2rem] h-[2rem] " />
          </button>
          <button onClick={() => handleNext()} className="absolute  right-4 bg-white rounded-full m-2 p-2">
            <FaAngleDoubleRight className="w-[2rem] h-[2rem] " />
          </button>
          <span className="dot flex absolute place-self-end ">
            {image && image.length
              ? image.map((_, index) => (
                  <button
                    key={index}
                    className={`current-dot bg-white h-[15px] w-[15px] rounded-full border-none outline-none m-3 cursor-pointer ${currentSlid === index ? "bg-slate-400" : "bg-white"} `}
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                ))
              : null}
          </span>
        </div>
      </div>
    </>
  );
}
