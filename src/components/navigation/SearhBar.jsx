import { useContext } from "react";
import { SearchContext } from "../context/SearchProvider";

export default function SearchBar() {
  const { handleSearch } = useContext(SearchContext);

  return (
    <input
      onChange={handleSearch}
      type="search"
      placeholder="Search..."
      className="w-full rounded-xl border border-black/10 bg-zinc-100 px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink/40 focus:border-deep md:w-64 lg:w-xl"
    />
  );
}
