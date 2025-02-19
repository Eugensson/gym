"use client";

import { Link as ScrollLink } from "react-scroll";

import { navLinks } from "@/constants";

export const Nav = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-x-8">
        {navLinks.map(({ path, name, offset }) => (
          <li
            key={name}
            className="text-white hover:text-primary-200 cursor-pointer transition-colors"
          >
            <ScrollLink
              spy={true}
              hashSpy={true}
              smooth={true}
              to={path}
              offset={offset}
              duration={500}
              delay={50}
              className="capitalize"
              activeClass="active"
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
