export default function Loading() {
  return (
    <div className="container-narrow space-y-8 pt-28 pb-20" aria-busy="true">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="h-6 w-40 animate-pulse rounded-full bg-white/5" />
          <div className="h-12 w-4/5 animate-pulse rounded-lg bg-white/5" />
          <div className="h-6 w-3/5 animate-pulse rounded-lg bg-white/5" />
          <div className="h-20 w-full animate-pulse rounded-lg bg-white/5" />
          <div className="flex gap-3">
            <div className="h-10 w-36 animate-pulse rounded-lg bg-white/5" />
            <div className="h-10 w-28 animate-pulse rounded-lg bg-white/5" />
          </div>
        </div>
        <div className="aspect-square animate-pulse rounded-2xl bg-white/5" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-24 animate-pulse rounded-2xl bg-white/5"
          />
        ))}
      </div>
    </div>
  );
}
