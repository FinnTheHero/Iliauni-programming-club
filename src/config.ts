import type { Socials } from "./types";

export const SITE_URL = "https://vervetheme.vercel.app";
export const SITE_TITLE = "IPC";
export const SITE_DESCRIPTION = "Iliauni Programming Club";
export const SITE_LOGO = "/logo.svg";

export const SOCIALS: Socials = [
  {
    name: "Github",
    href: "https://github.com/FinnTheHero/Iliauni-programming-club",
    linkTitle: ` ${SITE_TITLE} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/aryanjha256/verve",
    linkTitle: `${SITE_TITLE} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://github.com/aryanjha256/verve",
    linkTitle: `${SITE_TITLE} on Instagram`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/aryanjha256/verve",
    linkTitle: `${SITE_TITLE} on Twitter`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/aryanjha256/verve",
    linkTitle: `${SITE_TITLE} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:aleksandre.nozadze.1@iliauni.edu.ge",
    linkTitle: `Send an email to ${SITE_TITLE}`,
    active: false,
  },
];
