import { useEffect,useState } from "react";


export default function useData(userID) {
    const  [data, setData] = useState({});
    useEffect(() => {
        const url = `https://dummyjson.com/users/${userID}`
        fetch(url)
    .then((response) => response.json())
    .then((response) => setData(response))

      .catch((error) => console.log(`Error: ${error}`))

    },[userID])

    return data
}

  
