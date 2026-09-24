import { SunMoon } from "lucide-react";

export default function LightDark() {
  return (
    <button
      type="button"
      className="relative flex size-10 items-center justify-center rounded-xl text-ink/70 transition hover:bg-ink/5 hover:text-ink"
    >
      {/* <SunMoon size={39} color="#1b2430" /> */}
      <SunMoon size={39} color="#c7d31d" />
    </button>
  );
}
