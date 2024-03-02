import { useEffect, useState } from "react";
import { ThemecontextProvider } from "./contex/Themecontext";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("light");

  useEffect(() =>{
document.querySelector("html").classList.remove("light","dark ")
document.querySelector("html")
    .classList.add(themeMode);
  },[themeMode])


  return (
    <>
      <ThemecontextProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>

            <div className="w-full max-w-sm mx-auto"></div>
          </div>
        </div>
      </ThemecontextProvider>
    </>
  );
}

export default App;
