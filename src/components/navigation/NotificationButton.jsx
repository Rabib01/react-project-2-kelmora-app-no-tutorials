import { BellRing } from "lucide-react";

export default function NotificationButton() {
  return (
    <button
      type="button"
      className="relative flex size-10 items-center justify-center rounded-xl text-ink/70 transition hover:bg-ink/5 hover:text-ink"
    >
      {/* Notification icon goes here */}
      <BellRing size={35} color="#1b2430" />

      {/* This will conditionally render if notifications ever appear */}
      {/* <span className="absolute right-2 top-2 size-2 rounded-full bg-rust" /> */}
    </button>
  );
}
