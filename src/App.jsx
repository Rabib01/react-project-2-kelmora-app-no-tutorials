import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

import FontText from "./components/FontText";
import NavRail from "./components/navigation/NavRail";
import Navbar from "./components/navigation/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <NavRail />

      {/* <FontText /> */}
    </>
  );
}

export default App;
