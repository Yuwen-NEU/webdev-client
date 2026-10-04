"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox } from "react-icons/fa";
import "@/app/labs/lab2/tailwind/utilities.css";

const TILE = "block py-3 text-center text-sm no-underline";
const IDLE = `${TILE} bg-black text-white`;
const ACTIVE = `${TILE} bg-white text-red-600`;

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const links = [
    { id: "wd-dashboard-link", label: "Dashboard", href: "/dashboard", match: "/dashboard", icon: AiOutlineDashboard },
    { id: "wd-course-link", label: "Courses", href: "/dashboard", match: "/courses", icon: LiaBookSolid },
    { id: "wd-calendar-link", label: "Calendar", href: "/calendar", match: "/calendar", icon: IoCalendarOutline },
    { id: "wd-inbox-link", label: "Inbox", href: "/inbox", match: "/inbox", icon: FaInbox },
    { id: "wd-labs-link", label: "Labs", href: "/labs", match: "/labs", icon: LiaCogSolid },
  ];
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
      {links.map(({ id, label, href, match, icon: Icon }) => {
        const active = pathname.startsWith(match);
        return (
          <Link key={id} href={href} id={id} className={active ? ACTIVE : IDLE}>
            <Icon className="inline-block text-3xl text-red-600" />
            <br />
            {label}
          </Link>
        );
      })}
      <Link href="/labs" id="wd-ai-nav-help" className={IDLE}>
        <FaCircleQuestion className="inline-block text-3xl text-red-600" />
        <br />
        Help
      </Link>
    </nav>
  );
}
