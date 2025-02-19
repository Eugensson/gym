"use client";

import { useEffect, useState } from "react";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { NavMobile } from "@/components/nav-mobile";

import { cn } from "@/lib/utils";

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 mx-auto max-w-[1440px] flex items-center justify-between px-5 lg:px-20 transition-all duration-300",
        active ? "py-4 bg-neutral-500" : "py-5 bg-transparent"
      )}
    >
      <Logo />
      <Nav />
      <ul className="hidden lg:flex items-center gap-x-4">
        <li>
          <button
            type="button"
            className="btn btn-sm text-white hover:text-primary-200 transition-colors"
          >
            Log in
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-sm btn-primary">
            Sign Up
          </button>
        </li>
      </ul>
      <NavMobile />
    </header>
  );
};
