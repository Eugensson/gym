"use client";

import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

import { navLinks } from "@/constants";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <RiMenu4Fill size={30} className="text-primary-200 lg:hidden" />
      </SheetTrigger>
      <SheetContent side="top" className="h-screen lg:hidden">
        <SheetHeader>
          <SheetTitle className="mb-10">
            <Logo />
          </SheetTitle>
          <SheetDescription className="sr-only">Mobile nemu</SheetDescription>
        </SheetHeader>
        <ul className="mb-10 flex flex-col items-center gap-y-8">
          {navLinks.map(({ path, name, offset }) => (
            <li key={name} className="text-white">
              <ScrollLink
                spy
                smooth
                to={path}
                offset={offset}
                duration={500}
                className="capitalize text-body-md"
                activeClass="active"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center items-center gap-x-8 lg:hidden">
          <li>
            <button type="button" className="btn btn-lg btn-secondary">
              Log in
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-lg btn-primary">
              Sign Up
            </button>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};
