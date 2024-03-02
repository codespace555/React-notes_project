import React, { useCallback, useContext, useEffect, useState } from "react";
import UseContext from "../context/UseContext";
import UseQuote from "../Hookes/UseQuote";
import UseRandomColor from "../Hookes/UseRandomColor";

function Quote_Box() {
  const randomQuotes = UseQuote();

  const { quote, author, setQuote, setAuthor, setColor,color } =
    useContext(UseContext);
  const randomgen = useCallback(() => {
    if (randomQuotes.length === 0) {
        // Handle the case when randomQuotes is empty
        return;
      }

    const index = Math.floor(Math.random() * randomQuotes.length);
    if (index >= 0 && index < randomQuotes.length) {
  const colorhex = UseRandomColor();

        setColor(colorhex);
    setQuote(randomQuotes[index].quote);
    setAuthor(randomQuotes[index].author);
    }
  }, [randomQuotes, setQuote, setAuthor]);
  // On component mount and update run the function
  useEffect(() => {
    
        randomgen(); // Call randomgen when the component mounts
     
      
  }, [randomgen]);

  const tweetQuote = () => {
    const twitterUrl = `twitter.com/intent/tweet`
    
    window.open(twitterUrl, "_top");
  };
  return (
    <>
      <div id="quote-box" style={{color:`${color}`}}>
        <div id="text"><i class="fa-solid fa-quote-left"></i> {quote}</div>
        <div id="author">- {author}</div>
<div className="link">
        <a id="tweet-quote" style={{color:"#ffff",backgroundColor:`${color}`}} onClick={tweetQuote} href="#">
        <i class="fa-brands fa-twitter"></i>
        </a>
        <button style={{color:"#ffff",backgroundColor:`${color}`}} id="new-quote" onClick={() =>(setTimeout(randomgen,
        1000))}>
          color
        </button>
        </div>
      </div>
    </>
  );
}

export default Quote_Box;
