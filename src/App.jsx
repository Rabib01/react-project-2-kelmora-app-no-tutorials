import { useEffect, useContext } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";

// import FontText from "./components/FontText";
import NavRail from "./components/navigation/NavRail";
import Navbar from "./components/navigation/NavBar";

//context
import { SearchContext } from "./components/context/SearchProvider";

function App() {
  const { searchState } = useContext(SearchContext);

  useEffect(() => {
    console.log(searchState);
  }, [searchState]);

  return (
    <>
      <Navbar />
      <NavRail />

      {/* <FontText /> */}
    </>
  );
}

export default App;
