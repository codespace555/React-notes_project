import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


function Getstart() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData();
    
  }, []);
 
  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
    
  };
  const filteredData = (data.users || []).filter(
    (item) =>
      item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive search by name
  );
  
  return (
    <div>
      <h2>Data from API</h2>
      <input
        type="text"
        placeholder="Search by name"
        value = {searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {searchTerm && filteredData.map((item) => (
          <li key={item.id}>{item.firstName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Getstart;
