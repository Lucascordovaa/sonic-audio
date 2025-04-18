// AOSWrapper.tsx
'use client'
import { useEffect, ReactNode } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSWrapperProps {
    children: ReactNode;
}

const AOSWrapper: React.FC<AOSWrapperProps> = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease",
            once: true,
            anchorPlacement: "top-bottom",
        });
    }, []);

    return <>{children}</>;
};

export default AOSWrapper;
