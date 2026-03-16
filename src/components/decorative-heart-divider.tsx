import { Heart, Sparkles } from "lucide-react";

type DecorativeHeartDividerProps = {
  className?: string;
};

export function DecorativeHeartDivider({
  className = "",
}: DecorativeHeartDividerProps) {
  return (
    <div
      className={`mx-auto mb-4 flex max-w-xs items-center justify-center gap-3 text-[var(--accent)]/65 ${className}`}
    >
      <div className="h-px flex-1 bg-[var(--muted)]" />
      <Heart className="h-4 w-4" aria-hidden="true" />
      <div className="h-px flex-1 bg-[var(--muted)]" />
    </div>
  );
}

