"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {navLinks} from "@/constant/Constant";
import Link from "next/link";
import { useHandleNavClick } from "@/hooks/useHandleNavClick";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = useHandleNavClick(() => setMenuOpen(false));

    return (
        <div className="fixed z-[1000] h-[88px] w-full transition-all duration-200 bg-white">
            <div className="mx-auto flex h-full w-[90%] items-center justify-between xl:w-[63%]">
                {/* Logo */}
                <Link href="/">
                    <h1 className="font-bold text-[2rem]">SONIC</h1>
                </Link>

                {/* Desktop navigation links */}
                <div className="hidden items-center space-x-10 lg:flex">
                    {navLinks.map((link) => {
                        return (
                            <a
                                key={link.id}
                                href={link.url}
                                onClick={(e) => handleClick(e, link)}
                                className="text-[#575757] hover-link"
                            >
                                {link.label}
                            </a>
                        )
                    })}
                </div>

                {/* Buttons and Mobile Menu */}
                <div className="flex items-center space-x-6">
                    {/* Buy Now button (hidden on mobile) */}
                    <Button
                        className="hidden lg:flex items-center cursor-pointer px-5 py-7 text-[16px]
                        text-[#575757] border border-gray-300 rounded-full transition-all
                        duration-400 bg-transparent hover:border-black hover:bg-white">
                        <p className="mr-2">Buy now</p>
                        <p>&gt;</p>
                    </Button>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu size={28} className="text-[#575757]" />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`absolute top-[88px] w-full bg-white shadow-md lg:hidden transition-all duration-500 ease-in-out transform ${menuOpen ? "max-h-[300px] opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"}`}
            >
                <div className="flex flex-col items-center space-y-4 py-4">
                    {navLinks.map((link) => {
                        return (
                            <a
                                key={link.id}
                                href={link.url}
                                onClick={(e) => handleClick(e, link)}
                                className="text-[#575757] hover-link"
                            >
                                {link.label}
                            </a>)
                    })}

                    {/* Buy Now Button at the Bottom */}
                    <Button
                        className="flex items-center cursor-pointer px-5 py-7 text-[16px]
                        text-[#575757] border border-gray-300 rounded-full transition-all
                        duration-400 bg-transparent hover:border-black hover:bg-white">
                        <p className="mr-2">Buy now</p>
                        <p>&gt;</p>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;