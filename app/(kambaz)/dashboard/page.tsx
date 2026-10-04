import "@/app/labs/lab2/tailwind/utilities.css";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-3xl font-semibold">
        Dashboard
      </h1>
      <hr className="my-3 border-neutral-300" />
      <h2 id="wd-dashboard-published" className="text-2xl">
        Published Courses (5)
      </h2>
      <hr className="my-3 border-neutral-300" />
      <div
        id="wd-dashboard-courses"
        className="flex flex-wrap gap-8"
      >
        <CourseCard
          id="1234"
          title="CS1234 React JS"
          subtitle="Full Stack software developer"
          image="/images/reactjs.jpg"
        />
        <CourseCard
          id="2345"
          title="CS2345 Node JS"
          subtitle="Server side JavaScript"
          image="/images/nodejs.jpg"
        />
        <CourseCard
          id="3456"
          title="CS3456 MongoDB"
          subtitle="NoSQL Databases"
          image="/images/mongodb.jpg"
        />
        <CourseCard
          id="5610"
          title="CS5610 Web Development"
          subtitle="Yuwen's favorite course — building Kambaz from HTML to full stack"
          image="/images/teslabot.jpg"
        />
        <CourseCard
          id="CS9999"
          title="CS9999 Sample Course"
          subtitle="Assistant-generated sample — not my course"
          image="/images/reactjs.jpg"
        />
      </div>
    </div>
  );
}
