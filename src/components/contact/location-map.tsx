import { ExternalLink } from "lucide-react";

type LocationMapProps = {
  /** Shown on the page */
  address: string;
  /** Used for the Google Maps lookup; defaults to `address` */
  query?: string;
};

/**
 * Small interactive Google Maps embed pinned to the address (no API key
 * needed). Lazy-loaded so it doesn't slow down the initial page load.
 */
export function LocationMap({ address, query = address }: LocationMapProps) {
  const q = encodeURIComponent(query);
  const embedUrl = `https://www.google.com/maps?q=${q}&z=15&output=embed`;
  const openUrl = `https://www.google.com/maps/search/?api=1&query=${q}`;

  return (
    <div className="space-y-2">
      <div className="relative h-40 overflow-hidden rounded-xl border border-border sm:h-44">
        <iframe
          src={embedUrl}
          title={`Map showing ${address}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 size-full border-0 dark:[filter:invert(0.9)_hue-rotate(180deg)_brightness(0.95)_contrast(0.9)]"
        />
      </div>
      <a
        href={openUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring inline-flex items-center gap-1 rounded-sm text-xs font-medium text-primary hover:underline"
      >
        Open in Google Maps
        <ExternalLink className="size-3" />
      </a>
    </div>
  );
}
