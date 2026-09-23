import { createContext, useState } from "react";

//  this creates the context and we want it to be the same regardless of each renders and through out the lifetime of the applicaito
// this creates the context object when we call createContext - has two parts - provider annd cosuuer
export const SearchContext = createContext();

export default function SearchProvider({ children }) {
  const [searchState, SetSearch] = useState("");

  const handleSearch = function (e) {
    SetSearch(e.target.value);
  };

  return (
    <SearchContext.Provider value={{ searchState, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

// When we do this
// function SearchProvider({ children })

// React automatically puts the App into the Provider's children prop
// <SearchProvider>
//   <App />
// </SearchProvider>
