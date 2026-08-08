import { cn } from "@/lib/utils";

type PlaceholderBadgeProps = {
  className?: string;
  label?: string;
};

/** Visual marker for unverified / draft content. */
export function PlaceholderBadge({
  className,
  label = "[PLACEHOLDER]",
}: PlaceholderBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-amber-200 uppercase",
        className
      )}
    >
      {label}
    </span>
  );
}
