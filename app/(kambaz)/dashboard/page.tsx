import "@/app/labs/lab2/tailwind/utilities.css";
import CourseCard from "./CourseCard";
import * as db from "../database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-3xl font-semibold">
        Dashboard
      </h1>
      <hr className="my-3 border-neutral-300" />
      <h2 id="wd-dashboard-published" className="text-2xl">
        Published Courses ({courses.length})
      </h2>
      <hr className="my-3 border-neutral-300" />
      <div id="wd-dashboard-courses" className="flex flex-wrap gap-8">
        {courses.map((course) => (
          <CourseCard key={course._id} {...course} />
        ))}
      </div>
    </div>
  );
}
