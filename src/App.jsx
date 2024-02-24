import { useState } from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/Home";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
