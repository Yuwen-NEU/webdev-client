/* Student Profile form (1.3.6 "On your own").
   TODO: every value below is a SAMPLE - replace the placeholders, defaults,
   and checked options with your own details. Keep the file path, the
   component name, and the form id wd-your-form as they are. */
export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Student Profile</h4>

      <h5>Name and login</h5>
      <label htmlFor="wd-your-first-name">First name: </label>
      <input
        type="text"
        placeholder="Yuwen"
        defaultValue="Yuwen"
        id="wd-your-first-name"
      />
      <br />
      <label htmlFor="wd-your-last-name">Last name: </label>
      <input
        type="text"
        placeholder="Huang"
        defaultValue="Huang"
        id="wd-your-last-name"
      />
      <br />
      <label htmlFor="wd-your-student-id">Student ID: </label>
      <input
        type="password"
        defaultValue="00123456"
        title="Your university student ID"
        id="wd-your-student-id"
      />
      <br />

      <h5>Why I am taking this course</h5>
      <label htmlFor="wd-your-bio">Short bio: </label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={6}
        defaultValue="I am taking CS5610 to learn how the front end and back end of a web application fit together, and to get comfortable building and deploying full stack projects."
      />
      <br />

      <h5>Class standing</h5>
      <label>Class standing:</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-standing-freshman" />
      <label htmlFor="wd-your-standing-freshman">Freshman</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-standing-sophomore"
      />
      <label htmlFor="wd-your-standing-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-standing-junior" />
      <label htmlFor="wd-your-standing-junior">Junior</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-standing-senior" />
      <label htmlFor="wd-your-standing-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-standing-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-standing-graduate">Graduate</label>
      <br />

      <label>Enrollment:</label>
      <br />
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-enrollment-full"
      />
      <label htmlFor="wd-your-enrollment-full">Full-time</label>
      <br />
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-enrollment-part"
        defaultChecked
      />
      <label htmlFor="wd-your-enrollment-part">Part-time</label>
      <br />

      <h5>Interests</h5>
      <label>Topics I care about:</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-frontend"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-frontend">Front end frameworks</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-backend"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-backend">Back end and APIs</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-databases"
      />
      <label htmlFor="wd-your-interest-databases">Databases</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-accessibility"
      />
      <label htmlFor="wd-your-interest-accessibility">Accessibility</label>
      <br />

      <h5>Program</h5>
      <label htmlFor="wd-your-major">Major: </label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
        <option value="CY">Cybersecurity</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics to deepen this term: </label>
      <br />
      <select
        multiple
        id="wd-your-topics"
        defaultValue={["REACT", "NODE"]}
      >
        <option value="HTML">HTML and CSS</option>
        <option value="REACT">React and Next.js</option>
        <option value="NODE">Node and Express</option>
        <option value="MONGO">MongoDB</option>
        <option value="DEPLOY">Deployment and CI</option>
      </select>
      <br />

      <h5>Details</h5>
      <label htmlFor="wd-your-email">School email: </label>
      <input
        type="email"
        placeholder="huang.y17@northeastern.edu"
        defaultValue="huang.y17@northeastern.edu"
        id="wd-your-email"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        type="number"
        defaultValue="2027"
        min={2025}
        max={2035}
        id="wd-your-grad-year"
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date: </label>
      <input
        type="date"
        defaultValue="2025-09-02"
        min="2000-01-01"
        max="2035-12-31"
        id="wd-your-start-date"
      />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited I am about this course (0-10):{" "}
      </label>
      <input
        type="range"
        defaultValue="9"
        min="0"
        max="10"
        id="wd-your-excitement"
      />
      <br />

      <button id="wd-your-form-save" type="submit">
        Save
      </button>
      <button id="wd-your-form-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
