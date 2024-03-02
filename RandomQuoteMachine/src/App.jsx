
import "./App.css";
import Quotes from "./component/Quotes";
import UseContextProvider from "./context/UseContextProvider";



function App() {
 
  return (
    <>
      {" "}
      <UseContextProvider>
       <Quotes/>
      </UseContextProvider>
    </>
  );
}

export default App;
