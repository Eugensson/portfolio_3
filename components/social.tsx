import Link from "next/link";

import { SOCIAL_LINKS } from "@/constants";

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

export const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <ul className={containerStyles}>
      {SOCIAL_LINKS.map(({ name, path, icon: Icon }) => (
        <li key={name} className="flex items-center justify-center">
          <Link
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${name}`}
            className={iconStyles}
          >
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
};
