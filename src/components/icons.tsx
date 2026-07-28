import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export type IconName =
  | "shield"
  | "paw"
  | "camera"
  | "users"
  | "key"
  | "route"
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "check"
  | "arrow"
  | "menu"
  | "close"
  | "quote"
  | "star"
  | "plus"
  | "badge"
  | "clipboard"
  | "eye";

const paths: Record<IconName, React.ReactNode> = {
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4.3 2.9 8.3 7 9.5 4.1-1.2 7-5.2 7-9.5V6l-7-3Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </>
  ),
  paw: (
    <>
      <ellipse cx="6.5" cy="10.5" rx="1.9" ry="2.4" />
      <ellipse cx="17.5" cy="10.5" rx="1.9" ry="2.4" />
      <ellipse cx="10" cy="6" rx="1.8" ry="2.2" />
      <ellipse cx="14" cy="6" rx="1.8" ry="2.2" />
      <path d="M12 13.2c2.6 0 4.6 1.8 4.6 3.8 0 1.6-1.3 2.7-3 2.7-.7 0-1.2-.2-1.6-.2-.4 0-.9.2-1.6.2-1.7 0-3-1.1-3-2.7 0-2 2-3.8 4.6-3.8Z" />
    </>
  ),
  camera: (
    <>
      <path d="M3.5 7.2 15 4l1.4 4.8L4.9 12 3.5 7.2Z" />
      <path d="m16.4 8.8 3.2-.9a1.6 1.6 0 0 1 2 1.1l.3 1.2a1.6 1.6 0 0 1-1.1 2l-3.2.9" />
      <path d="M7 12.6V16a3 3 0 0 0 3 3h1" />
      <circle cx="12" cy="20" r="1.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16.2 5.2a3.2 3.2 0 0 1 0 5.9" />
      <path d="M17.5 14.6A6 6 0 0 1 21 20" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h9" />
      <path d="M17.5 12v3" />
      <path d="M20.5 12v2.2" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6H14a3.5 3.5 0 0 1 0 7h-4a3.5 3.5 0 0 0 0 7h5.5" />
    </>
  ),
  phone: (
    <path d="M6.2 3.5h2.9l1.5 3.7-1.9 1.2a11.5 11.5 0 0 0 5 5l1.2-1.9 3.7 1.5v2.9a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  mail: (
    <>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.2" />
      <path d="m3.4 7 8.6 6 8.6-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s7-5.9 7-11a7 7 0 1 0-14 0c0 5.1 7 11 7 11Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </>
  ),
  check: <path d="m4.5 12.5 4.8 4.8L19.5 7" />,
  arrow: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  quote: (
    <path
      d="M9.6 5.4C6.6 6.9 4.8 9.6 4.8 12.9c0 3.2 1.8 5.3 4.4 5.3 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8 0-1 .2.4-1.6 1.7-3 3.4-3.9l-2.5-1.9Zm9.3 0c-3 1.5-4.8 4.2-4.8 7.5 0 3.2 1.8 5.3 4.4 5.3 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8 0-1 .2.4-1.6 1.7-3 3.4-3.9l-2.5-1.9Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  star: (
    <path
      d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8L12 3.5Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="5.2" />
      <path d="m8.4 13.4-1.6 7L12 18l5.2 2.4-1.6-7" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4.5" width="14" height="16" rx="2.2" />
      <path d="M9 4.5V3.6A1.6 1.6 0 0 1 10.6 2h2.8A1.6 1.6 0 0 1 15 3.6v.9" />
      <path d="M9 11h6" />
      <path d="M9 15h4" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3.1" />
    </>
  ),
};

export function Icon({
  name,
  className = "size-5",
  ...rest
}: { name: IconName; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...rest} className={className}>
      {paths[name]}
    </svg>
  );
}
