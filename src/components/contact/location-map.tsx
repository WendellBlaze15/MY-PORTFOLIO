import { ExternalLink, MapPin } from "lucide-react";

type LocationMapProps = {
  /** Shown on the page */
  address: string;
  /** Used for the Google Maps lookup; defaults to `address` */
  query?: string;
};

/**
 * Interactive Google Maps embed pinned to the address (no API key needed).
 * Lazy-loaded so it doesn't slow down the initial page load.
 */
export function LocationMap({ address, query = address }: LocationMapProps) {
  const q = encodeURIComponent(query);
  const embedUrl = `https://www.google.com/maps?q=${q}&z=16&output=embed`;
  const openUrl = `https://www.google.com/maps/search/?api=1&query=${q}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-foreground/[0.03]">
      <div className="relative aspect-[4/3] sm:aspect-[16/7]">
        <iframe
          src={embedUrl}
          title={`Map showing ${address}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 size-full border-0 dark:[filter:invert(0.9)_hue-rotate(180deg)_brightness(0.95)_contrast(0.9)]"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3">
        <p className="flex min-w-0 items-center gap-2 text-sm">
          <MapPin className="size-4 shrink-0 text-primary" />
          <span className="truncate">{address}</span>
        </p>
        <a
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-primary hover:underline"
        >
          Open in Google Maps
          <ExternalLink className="size-3.5" />
        </a>
      </div>
    </div>
  );
}
