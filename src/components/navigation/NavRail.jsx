const navItems = [
  "Dashboard",
  "Students",
  "Teachers",
  "Batches",
  "Attendance",
  "Fees",
  "Exams",
  "Notices",
];

export default function NavRail() {
  return (
    <aside className="hidden h-screen font-headlines font-extrabold w-64 shrink-0 flex-col border-r border-black/10 bg-paper lg:flex">
      {/* Logo */}
      <div className="flex h-20 items-center px-6">
        <h1 className="font-headlines text-4xl font-semibold text-ink">
          KelMora
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        <div className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item}
              className="flex w-full items-center rounded-xl px-3 py-3 text-left text-sm font-bodySecondary text-ink/70 transition hover:bg-ink/5 hover:text-ink"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* User */}
      <div className="border-t border-black/10 p-3">
        <div className="flex items-center gap-3 rounded-xl px-3 py-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-deep text-sm font-semibold text-paper">
            MR
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">
              Muhtasim Rabib
            </p>

            <p className="truncate text-xs text-ink/60">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
