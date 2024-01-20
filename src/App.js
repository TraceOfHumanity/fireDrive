import "./index.css";

import React from "react";

import { useDispatch } from "react-redux";

import { Aside } from "./components/Aside";
import StarsAnimation from "./components/CanvasBg";
import { setTheme } from "./redux/features/themeSlice";
import { getTheme } from "./utils/functions";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const theme = getTheme();
    document.documentElement.classList.toggle(`${theme}`);
    dispatch(setTheme(theme));
  }, []);

  return (
    <div className=" h-screen w-screen dark:text-cyan-100 flex gap-2">
      <div className="fixed -z-10">
        <StarsAnimation />
      </div>
      <div className="relative z-10">
        <Aside />
      </div>
    </div>
  );
}

export default App;
