export default function UserMenu() {
  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-ink/5 sm:gap-3"
      >
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-deep text-sm font-semibold text-paper">
          MR
        </div>

        <div className="hidden text-left sm:block">
          <p className="max-w-32 truncate text-sm font-semibold text-ink">
            Muhtasim Rabib
          </p>

          <p className="text-xs text-ink/50">Administrator</p>
        </div>

        <span className="hidden text-xs text-ink/50 sm:block">▼</span>
      </button>

      {/* Dropdown */}
    </div>
  );
}
