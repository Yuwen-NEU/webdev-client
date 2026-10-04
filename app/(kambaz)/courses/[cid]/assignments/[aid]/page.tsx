import Link from "next/link";

const INPUT =
  "w-full rounded border border-neutral-300 bg-white px-3 py-2 font-sans text-sm";
const LABEL = "pt-2 text-sm md:text-right";
const ENTRY_OPTIONS = [
  { id: "wd-text-entry", label: "Text Entry", checked: false },
  { id: "wd-website-url", label: "Website URL", checked: true },
  { id: "wd-media-recordings", label: "Media Recordings", checked: false },
  { id: "wd-student-annotation", label: "Student Annotation", checked: false },
  { id: "wd-file-upload", label: "File Uploads", checked: false },
];
const ROW = "mb-4 grid grid-cols-1 gap-2 md:grid-cols-[160px_1fr] md:gap-4";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
          Assignment Name
        </label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={INPUT} />
      </div>
      <div className="mb-4">
        <textarea
          id="wd-description"
          rows={8}
          className={INPUT}
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
        />
      </div>

      <div className={ROW}>
        <label htmlFor="wd-points" className={LABEL}>
          Points
        </label>
        <input id="wd-points" defaultValue={100} className={INPUT} />
      </div>

      <div className={ROW}>
        <label htmlFor="wd-group" className={LABEL}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={INPUT}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className={ROW}>
        <label htmlFor="wd-display-grade-as" className={LABEL}>
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className={INPUT}
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="COMPLETE">Complete/Incomplete</option>
          <option value="LETTER">Letter Grade</option>
        </select>
      </div>

      <div className={ROW}>
        <label htmlFor="wd-submission-type" className={LABEL}>
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-4">
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className={`${INPUT} mb-4`}
          >
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NO_SUBMISSION">No Submission</option>
          </select>
          <div className="mb-2 text-sm font-semibold">Online Entry Options</div>
          {ENTRY_OPTIONS.map(({ id, label, checked }) => (
            <div key={id} className="mb-2 flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="online-entry"
                id={id}
                defaultChecked={checked}
              />
              <label htmlFor={id}>{label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className={ROW}>
        <label htmlFor="wd-assign-to" className={LABEL}>
          Assign
        </label>
        <div className="rounded border border-neutral-300 p-4">
          <label
            htmlFor="wd-assign-to"
            className="mb-1 block text-sm font-semibold"
          >
            Assign to
          </label>
          <input
            id="wd-assign-to"
            defaultValue="Everyone"
            className={`${INPUT} mb-4`}
          />
          <label
            htmlFor="wd-due-date"
            className="mb-1 block text-sm font-semibold"
          >
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            defaultValue="2024-05-13"
            className={`${INPUT} mb-4`}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="wd-available-from"
                className="mb-1 block text-sm font-semibold"
              >
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2024-05-06"
                className={INPUT}
              />
            </div>
            <div>
              <label
                htmlFor="wd-available-until"
                className="mb-1 block text-sm font-semibold"
              >
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2024-05-20"
                className={INPUT}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={ROW}>
        <label htmlFor="wd-ai-editor-notes" className={LABEL}>
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={3} className={INPUT} />
      </div>

      <hr className="my-4 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
