// lib/useSmootherReady.ts
"use client";

import { ScrollSmoother } from "gsap/all";
import { useEffect, useState } from "react";

export function useSmootherReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // ইতিমধ্যে তৈরি হয়ে থাকলে সাথে সাথেই true
    if (ScrollSmoother.get()) {
      setReady(true);
      return;
    }
    // না হলে poll করে wait করো (খুব হালকা, কয়েক ফ্রেমের মধ্যেই resolve হবে)
    let raf: number;
    const check = () => {
      if (ScrollSmoother.get()) {
        setReady(true);
      } else {
        raf = requestAnimationFrame(check);
      }
    };
    raf = requestAnimationFrame(check);
    return () => cancelAnimationFrame(raf);
  }, []);

  return ready;
}
