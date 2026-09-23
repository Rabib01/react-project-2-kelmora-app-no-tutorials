import { useState, createContext } from "react";

export const SearchContext = createContext();

export default function SearchProvider({ children }) {
  const [searchState, setSearchState] = useState("");

  const handleSearchStrokes = (e) => setSearchState(e.target.value);

  return (
    <SearchContext.Provider value={{ searchState, handleSearchStrokes }}>
      {children}
    </SearchContext.Provider>
  );
}
