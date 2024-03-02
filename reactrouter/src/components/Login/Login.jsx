import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contex/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
    const {setUser,user} = useContext(UserContext)
    useEffect(() => {
      setUser(userName)
      console.log(user)

    })
    
  return (
    <div>
        <form action={`/user/${userName}`} method="get" className="flex items-center justify-center flex-1 h-full m-5">
      <input
        type="text"
        value = {userName}
        onChange={(e) => setUserName(e.target.value)}
        id="name"
        placeholder="Enter Id"
        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        required
      />
      <button className="m-5 border-2 px-5 py-2 rounded-lg bg-orange-700">Login</button>
      </form>
    </div>
  );
}

export default Login;
