"use client"

import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

// Create a context to hold the Lenis instance
const LenisContext = createContext<Lenis | null>(null);

const LenisProvider = ({ children }: { children: React.ReactNode }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis instance
        const lenisInstance = new Lenis({
            duration: 1.5, // Scroll duration
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
        });

        function raf(time: number) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        setLenis(lenisInstance);

        return () => lenisInstance.destroy(); // Cleanup on unmount
    }, []);

    return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
};

// Custom hook to use the Lenis context
export const useLenis = () => {
    return useContext(LenisContext);
};

export default LenisProvider;
