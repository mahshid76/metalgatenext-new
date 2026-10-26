"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const MAX_RETRIES = 4;

// next/image that quietly tries again when a file fails to load (for example a
// transient 404 or network error right after a deployment), so a visitor never
// gets stuck with a broken or blank photo.
export default function RetryImage({ src, onError, ...props }) {
  const [attempt, setAttempt] = useState(0);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleError = (event) => {
    onError?.(event);
    if (attempt >= MAX_RETRIES) return;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAttempt((n) => n + 1), 800 * (attempt + 1));
  };

  // A new key remounts the <img>, and the query string bypasses a cached failure.
  return <Image key={attempt} src={attempt ? `${src}?retry=${attempt}` : src} onError={handleError} {...props} />;
}
