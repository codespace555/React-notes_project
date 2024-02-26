
import { useState } from 'react'
import { useEffect } from 'react'

export default function useCurrency(currency) {
    const [data, setData] = useState({})
 useEffect(() => {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    fetch(url)
    .then((response) => response.json())
    .then((response) => setData(response[currency]))
      .catch((error) => console.log(`Error: ${error}`))
 },[currency])

 return data
}
