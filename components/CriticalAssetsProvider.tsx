"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import BrandLoader, { FADE_DURATION_MS_INITIAL } from "@/components/BrandLoader";

/** How long we wait for components to register critical assets (ms). */
const REGISTRATION_WINDOW_MS = 150;
/** Max wait for critical assets; prevents indefinite block on load/network error. */
const MAX_WAIT_MS = 10_000;

type ResolveFn = () => void;

const CriticalAssetsContext = createContext<{
  registerCriticalAsset: (id: string, promise: Promise<void>) => void;
} | null>(null);

export function useCriticalAsset() {
  const ctx = useContext(CriticalAssetsContext);
  return ctx;
}

/**
 * Registers a critical above-the-fold asset. Call with a Promise that resolves
 * when the asset has loaded (e.g. from next/image onLoadingComplete).
 * Used so the initial loader stays visible until all critical assets are ready.
 */
export function CriticalAssetsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const promisesRef = useRef<Promise<void>[]>([]);
  const resolveRef = useRef<ResolveFn | null>(null);
  const [phase, setPhase] = useState<"loading" | "exiting" | "ready">("loading");
  const startedRef = useRef(false);

  const registerCriticalAsset = useCallback((id: string, promise: Promise<void>) => {
    promisesRef.current.push(promise);
  }, []);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    // Only wait for critical assets on home page (hero above the fold).
    if (pathname !== "/") {
      setPhase("ready");
      return;
    }

    const t = setTimeout(() => {
      const promises = promisesRef.current;
      const allLoaded =
        promises.length > 0
          ? Promise.all(promises).then(() => {})
          : Promise.resolve();
      const timeout = new Promise<void>((resolve) =>
        setTimeout(resolve, MAX_WAIT_MS)
      );
      const p = Promise.race([allLoaded, timeout]);

      p.then(() => {
        setPhase("exiting");
        resolveRef.current = () => {
          setPhase("ready");
        };
      }).catch(() => {
        setPhase("exiting");
        resolveRef.current = () => setPhase("ready");
      });
    }, REGISTRATION_WINDOW_MS);

    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (phase !== "exiting") return;
    const d = setTimeout(() => {
      resolveRef.current?.();
    }, FADE_DURATION_MS_INITIAL);
    return () => clearTimeout(d);
  }, [phase]);

  const contentReady = phase === "ready";

  return (
    <CriticalAssetsContext.Provider value={{ registerCriticalAsset }}>
      <div
        className="min-h-0 flex flex-col"
        style={{
          opacity: contentReady ? 1 : 0,
          transition: `opacity ${FADE_DURATION_MS_INITIAL}ms ease-out`,
          pointerEvents: contentReady ? undefined : "none",
        }}
        aria-hidden={!contentReady}
      >
        {children}
      </div>
      {!contentReady && (
        <BrandLoader
          progress={null}
          isExiting={phase === "exiting"}
          className="initial-load-overlay"
          fadeDurationMs={FADE_DURATION_MS_INITIAL}
        />
      )}
    </CriticalAssetsContext.Provider>
  );
}
