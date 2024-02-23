import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
export default function Star({ noofStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);
  const [ratingWrite , setRatingWrite] = useState("Poor")
  function handleClick(getCurrentindex) {
    setRating(getCurrentindex)
    const write = ["Poor", "Avg", "Good" , "V Good","Exilent"]
    setRatingWrite(write[getCurrentindex -1])
    
  }
  function handleMouseEnter(getCurrentindex) {
    setHoverStar(getCurrentindex)
    const write = ["Poor", "Avg", "Good" , "V Good","Exilent"]
    setRatingWrite(write[getCurrentindex -1])

  }
  function handleMouseLeave() {
    setHoverStar(rating)
    

  }
 

  return (
    <>
      <div className="star-rating flex  items-center justify-center">
        {[...Array(noofStar)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hoverStar || rating) ? " active" && "text-orange-300" :"inactive" && "text-black" }
              onClick={() => handleClick(index)}
              onMouseEnter={ () => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
           
          );
          
        })}
      </div>
      <div className="text-2xl">{ratingWrite}</div>
    </>
  );
}
