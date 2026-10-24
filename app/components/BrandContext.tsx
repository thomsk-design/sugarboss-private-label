"use client";

import { createContext, useContext, useState } from "react";

export type Finish = {
  id: "noir" | "ivory" | "blush";
  name: string;
  bg: string;
  ink: string;
  rule: string;
};

export const FINISHES: Finish[] = [
  { id: "noir", name: "Noir", bg: "#15110D", ink: "#F3E7CF", rule: "#D8B46A" },
  { id: "ivory", name: "Ivory", bg: "#F6EFE2", ink: "#15110D", rule: "#B8923F" },
  { id: "blush", name: "Blush", bg: "#E8D3C6", ink: "#3A2A20", rule: "#8C6A2E" },
];

type BrandState = {
  brand: string;
  setBrand: (v: string) => void;
  finish: Finish;
  setFinish: (f: Finish) => void;
};

const BrandCtx = createContext<BrandState | null>(null);

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [brand, setBrand] = useState("Your Brand");
  const [finish, setFinish] = useState<Finish>(FINISHES[0]);
  return (
    <BrandCtx.Provider value={{ brand, setBrand, finish, setFinish }}>{children}</BrandCtx.Provider>
  );
}

export function useBrand() {
  const ctx = useContext(BrandCtx);
  if (!ctx) throw new Error("useBrand must be used inside BrandProvider");
  return ctx;
}

/** The partner's brand name, live from the "try it" input. */
export function BrandName({ fallback = "Your Brand" }: { fallback?: string }) {
  const { brand } = useBrand();
  return <>{brand.trim() || fallback}</>;
}
