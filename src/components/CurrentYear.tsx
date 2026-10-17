"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Renders the build year on the server and the visitor's current year once hydrated. */
export function CurrentYear({ fallback }: { fallback: number }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => fallback,
  );
  return <>{year}</>;
}
