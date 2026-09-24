import LightDark from "./LightDark";
import NotificationButton from "./NotificationButton";
import SearchBar from "./SearhBar";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <header className="border-b border-black/10 bg-paper">
      <div className="flex min-h-20 items-center justify-between gap-4 px-4 sm:px-6">
        {/* Title */}
        <h1 className="shrink-0 font-headlines text-xl font-semibold text-ink sm:text-2xl">
          Dashboard
        </h1>

        {/* Desktop Search */}
        <div className="hidden flex-1 justify-center md:flex">
          <SearchBar />
        </div>

        {/* Right side */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <NotificationButton />
          <LightDark />

          <UserMenu />
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-4 pb-4 md:hidden">
        <SearchBar />
      </div>
    </header>
  );
}
