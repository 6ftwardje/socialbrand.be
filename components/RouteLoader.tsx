"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import BrandLoader, {
  FADE_DURATION_MS,
  MIN_VISIBLE_MS,
} from "@/components/BrandLoader";

/** Target total visible time for route transition (ms). */
const ROUTE_TRANSITION_MS = 480;
/** Fake progress: fast to 70%, then creep to 90%, then 100% at finish. */
const PROGRESS_FAST_MS = 120;
const PROGRESS_CREEP_MS = 280;

export default function RouteLoader() {
  const pathname = usePathname();
  const prevPathRef = useRef<string>(pathname);
  const [visible, setVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  useEffect(() => {
    if (pathname === prevPathRef.current) return;
    prevPathRef.current = pathname;

    clearTimers();
    setVisible(true);
    setIsExiting(false);
    setProgress(0);

    // Fake progress: 0 → 70% quickly, then 70 → 90% slowly, then 100% at end
    const t1 = setTimeout(() => setProgress(70), PROGRESS_FAST_MS);
    timersRef.current.push(t1);
    const t2 = setTimeout(
      () => setProgress(90),
      PROGRESS_FAST_MS + PROGRESS_CREEP_MS
    );
    timersRef.current.push(t2);

    const minVisible = MIN_VISIBLE_MS;
    const totalVisible = Math.max(minVisible, ROUTE_TRANSITION_MS);

    const t3 = setTimeout(() => {
      setProgress(100);
      setIsExiting(true);
    }, totalVisible);
    timersRef.current.push(t3);

    const t4 = setTimeout(() => {
      setVisible(false);
      setIsExiting(false);
      setProgress(0);
      clearTimers();
    }, totalVisible + FADE_DURATION_MS);
    timersRef.current.push(t4);

    return () => clearTimers();
  }, [pathname]);

  if (!visible) return null;

  return (
    <BrandLoader
      progress={progress}
      isExiting={isExiting}
    />
  );
}
