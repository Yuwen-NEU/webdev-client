"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid, LiaHistorySolid } from "react-icons/lia";
import { FaInbox } from "react-icons/fa";
import "@/app/labs/lab2/tailwind/utilities.css";

// Courses points at /dashboard (courses are opened from a card) but is
// highlighted inside /courses/...; Help also opens /labs but never highlights.
const LINKS = [
  { label: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard, match: "/dashboard" },
  { label: "Courses", path: "/dashboard", icon: LiaBookSolid, match: "/courses" },
  { label: "Calendar", path: "/calendar", icon: IoCalendarOutline, match: "/calendar" },
  { label: "Inbox", path: "/inbox", icon: FaInbox, match: "/inbox" },
  { label: "Labs", path: "/labs", icon: LiaCogSolid, match: "/labs" },
  { label: "History", path: "/history", icon: LiaHistorySolid, match: "/history" },
  { label: "Help", path: "/labs", icon: FaCircleQuestion, match: null },
] as const;

const TILE = "block py-3 text-center text-sm no-underline";
const IDLE = `${TILE} bg-black text-white`;
const ACTIVE = `${TILE} bg-white text-red-600`;

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const accountActive = pathname.startsWith("/account");
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed top-0 bottom-0 left-0 z-20 hidden w-[120px] overflow-y-auto bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block py-3 text-center text-3xl font-black text-red-600 no-underline"
      >
        N
        <span className="block text-[10px] font-semibold tracking-wide text-white">
          NORTHEASTERN
        </span>
      </a>
      <Link
        href="/account"
        id="wd-account-link"
        className={accountActive ? ACTIVE : IDLE}
      >
        <FaRegCircleUser
          className={`inline-block text-3xl ${accountActive ? "text-red-600" : "text-white"}`}
        />
        <br />
        Account
      </Link>
      {LINKS.map((link) => {
        const active = link.match !== null && pathname.startsWith(link.match);
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.path}
            id={`wd-${link.label.toLowerCase()}-link`}
            className={active ? ACTIVE : IDLE}
          >
            <Icon className="inline-block text-3xl text-red-600" />
            <br />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
