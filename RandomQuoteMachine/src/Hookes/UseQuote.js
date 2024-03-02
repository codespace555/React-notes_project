import React, { useEffect, useState } from 'react'

function UseQuote() {
  const [data, setData] = useState({})
  useEffect(() => {
    const url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
    fetch(url)
    .then((response) => response.json())
    .then((response) => setData(response.quotes))
      .catch((error) => console.log(`Error: ${error}`))
 },[])


 return data
}

export default UseQuote
