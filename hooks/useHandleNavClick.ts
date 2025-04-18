"use client"

import { usePathname, useRouter } from "next/navigation";
import { useLenis } from "@/components/LenisProvider";

export const useHandleNavClick = (closeMenu?: () => void) => {
    const router = useRouter();
    const pathname = usePathname();
    const lenis = useLenis();

    return (
        e: React.MouseEvent<HTMLAnchorElement>,
        link: { id: string; url: string; type: string }
    ) => {
        e.preventDefault();

        if (link.type === "scroll") {
            if (pathname === "/") {
                const target = document.getElementById(link.id);
                if (target && lenis) {
                    lenis.scrollTo(target);
                }
            } else {
                router.push(`/${link.url}`);
            }
        } else {
            router.push(link.url);
        }

        if (closeMenu) closeMenu();
    };
};
