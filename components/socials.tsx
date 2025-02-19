import Link from "next/link";

import { socialList } from "@/constants";

export const Socials = () => {
  return (
    <ul className="flex items-center gap-6 ">
      {socialList.map(({ label, icon: Icon, link }) => (
        <li key={label} aria-label={`${label} link`}>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            <Icon size={34} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
