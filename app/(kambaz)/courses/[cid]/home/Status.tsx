import { FaCheckCircle } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaHouse, FaChartSimple } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";
import { IoMegaphoneOutline, IoNotificationsOutline } from "react-icons/io5";
import { LuGraduationCap, LuSparkles } from "react-icons/lu";
import type { IconType } from "react-icons";

const ACTIONS: { id: string; label: string; icon: IconType }[] = [
  { id: "wd-import-existing", label: "Import Existing Content", icon: BiImport },
  { id: "wd-import-commons", label: "Import from Commons", icon: LiaFileImportSolid },
  { id: "wd-choose-home", label: "Choose Home Page", icon: FaHouse },
  { id: "wd-course-stream", label: "View Course Stream", icon: FaChartSimple },
  { id: "wd-new-announcement", label: "New Announcement", icon: IoMegaphoneOutline },
  { id: "wd-new-analytics", label: "New Analytics", icon: BsGraphUp },
  { id: "wd-course-notifications", label: "View Course Notifications", icon: IoNotificationsOutline },
  { id: "wd-view-gradebook", label: "View Gradebook", icon: LuGraduationCap },
  { id: "wd-ai-status", label: "Sample action", icon: LuSparkles },
];

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-2 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-green-600 bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      {ACTIONS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          id={id}
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-neutral-100 px-3 py-2 text-left text-sm"
        >
          <Icon className="me-2 shrink-0 text-base" /> {label}
        </button>
      ))}
    </div>
  );
}
