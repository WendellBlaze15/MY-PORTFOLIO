import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-narrow flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button render={<Link href="/" />}>Back to home</Button>
    </div>
  );
}
