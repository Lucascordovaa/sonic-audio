"use client"

import { createContext, useContext, useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"

const LenisContext = createContext<Lenis | null>(null)

export const useLenis = () => useContext(LenisContext)

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        if (!lenisRef.current) {
            lenisRef.current = new Lenis({
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            })

            const raf = (time: number) => {
                lenisRef.current?.raf(time)
                requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)
        }

        return () => {
            lenisRef.current?.destroy()
        }
    }, [])

    return (
        <LenisContext.Provider value={lenisRef.current}>
            {children}
        </LenisContext.Provider>
    )
}
