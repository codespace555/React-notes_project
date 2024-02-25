import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllow, setIsNumberAllow] = useState(false);
  const [password, setPassword] = useState("");
  const [isCharAllow, setIsCharAllow] = useState(false);

const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllow) {
      str += "0123456789";
    }
    if (isCharAllow) {
      str += "!@#$%^&*()_+=-";
    }
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, isNumberAllow, isCharAllow, setPassword]);

  const copyPasswordText = useCallback((() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
   
    window.navigator.clipboard.writeText(password)
  }),[password])

  useEffect(()=>{passwordGenerator()},[length, isNumberAllow, isCharAllow,passwordGenerator]) 

  return (
    <>
      <div className="m-5 bg-slate-500 rounded-md flex flex-col items-center gap-5 p-5">
        <h1 className="text-center text-xl bg-slate-800 p-3 rounded-md">Password Generator</h1>
        <div>
          <input type="text"
          value={password}
          className=" w-[500px] h-11 rounded-bl-md rounded-tl-md p-5"
          placeholder="Generated Password " 
          ref={passwordRef}
          readOnly />
          <button className="bg-slate-950 h-11 w-20 rounded-tr-md rounded-br-md hover:outline-double hover:border-2 border-blue-600  outline-white" onClick={copyPasswordText}>Copy</button>
        </div>
        <div className="flex justify-around mt-5 gap-2">
          <input type="range"
          value={length}
          max={15}
          min={6}
          onChange={(e) => {setLength(e.target.value)}} />
         <label htmlFor="length" className="font-bold">Length: {length}</label>
         <input type="checkbox" onClick={()=>{setIsNumberAllow(!isNumberAllow)}} />
         <label htmlFor="number"  >Numbers</label>
         <input type="checkbox" id="char" onClick={()=>{setIsCharAllow(!isCharAllow)}}/>
         <label htmlFor="char">Special Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
