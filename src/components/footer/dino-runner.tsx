/**
 * Chrome "no internet" style T-rex running along the footer divider and
 * hopping over cacti. Pure CSS (see `.dino-*` in globals.css): the cacti slide
 * across in percentages, and the jump keyframes are timed to the moments each
 * cactus reaches the dino, so it works at any width. Decorative only.
 */

function Dino() {
  return (
    <svg viewBox="0 0 20 22" className="size-full" shapeRendering="crispEdges">
      <g fill="currentColor">
        {/* Tail */}
        <rect x="0" y="8" width="2" height="4" />
        <rect x="2" y="10" width="2" height="5" />
        {/* Body + neck */}
        <rect x="4" y="9" width="10" height="7" />
        <rect x="9" y="6" width="5" height="4" />
        {/* Head + jaw */}
        <rect x="10" y="0" width="10" height="6" />
        <rect x="10" y="6" width="7" height="1.5" />
        {/* Arm */}
        <rect x="14" y="11" width="3" height="1.5" />
        <rect x="16" y="12" width="1" height="2" />
      </g>
      {/* Eye */}
      <rect x="12" y="1.5" width="1.6" height="1.6" style={{ fill: "var(--background)" }} />
      {/* Legs: two frames swapped to look like running */}
      <g className="dino-legs-a" fill="currentColor">
        <rect x="5" y="16" width="2" height="6" />
        <rect x="7" y="21" width="1.5" height="1" />
        <rect x="10" y="16" width="2" height="3" />
      </g>
      <g className="dino-legs-b" fill="currentColor">
        <rect x="5" y="16" width="2" height="3" />
        <rect x="10" y="16" width="2" height="6" />
        <rect x="12" y="21" width="1.5" height="1" />
      </g>
    </svg>
  );
}

function Cactus() {
  return (
    <svg viewBox="0 0 10 16" className="size-full" shapeRendering="crispEdges">
      <g fill="currentColor">
        <rect x="4" y="0" width="2.5" height="16" rx="1" />
        <rect x="1" y="5" width="2" height="5" rx="1" />
        <rect x="1" y="9" width="3.5" height="1.5" />
        <rect x="7.5" y="3" width="1.8" height="5" rx="0.9" />
        <rect x="6" y="7" width="3.3" height="1.5" />
      </g>
    </svg>
  );
}

export function DinoRunner() {
  return (
    <div className="dino-track relative h-20 overflow-hidden" aria-hidden>
      {/* Ground: the footer divider, with specks scrolling past */}
      <div className="absolute inset-x-0 bottom-1 h-px bg-border" />
      <div className="dino-ground absolute inset-x-0 bottom-0 h-1 opacity-30" />

      <div className="dino-cactus absolute bottom-1 h-5 w-3 text-emerald-600/70 dark:text-emerald-400/70">
        <Cactus />
      </div>
      <div className="dino-cactus dino-cactus-2 absolute bottom-1 h-4 w-2.5 text-emerald-600/70 dark:text-emerald-400/70">
        <Cactus />
      </div>

      <div className="dino absolute bottom-1 left-[12%] h-8 w-[30px] text-foreground/75">
        <Dino />
      </div>
    </div>
  );
}
