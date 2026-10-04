import { FaUserCircle } from "react-icons/fa";

const PEOPLE = [
  ["Tony Stark", "001234561S", "S101", "STUDENT", "2020-10-01", "10:21:32"],
  ["Bruce Wayne", "001234562S", "S101", "STUDENT", "2020-11-02", "15:32:43"],
  ["Steve Rogers", "001234563S", "S101", "STUDENT", "2020-10-02", "23:32:43"],
  ["Natasha Romanoff", "001234564S", "S101", "TA", "2020-11-05", "13:23:34"],
  ["Thor Odinson", "001234565S", "S101", "STUDENT", "2020-12-01", "11:22:33"],
  ["Nick Fury", "001234566F", "S101", "FACULTY", "2020-11-15", "40:12:18"],
  // My roster additions
  ["Yuwen Huang", "002610001S", "S101", "STUDENT", "2026-10-03", "12:45:10"],
  ["Ada Lovelace", "002610002S", "S101", "STUDENT", "2026-09-28", "08:15:42"],
  ["Grace Hopper", "002610003T", "S101", "TA", "2026-09-30", "21:03:55"],
  // Sample rows
  ["Jane Sample", "009999001S", "S101", "STUDENT", "2026-09-01", "01:00:00"],
  ["Alex Sample", "009999002S", "S101", "STUDENT", "2026-09-02", "02:00:00"],
  ["Sam Sample", "009999003S", "S101", "STUDENT", "2026-09-03", "03:00:00"],
];

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {PEOPLE.map(([name, loginId, section, role, last, total]) => (
            <tr key={loginId} className="border-b border-neutral-200 odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
                <span className="text-red-700">{name}</span>
              </td>
              <td className="wd-login-id p-2">{loginId}</td>
              <td className="wd-section p-2">{section}</td>
              <td className="wd-role p-2">{role}</td>
              <td className="wd-last-activity p-2">{last}</td>
              <td className="wd-total-activity p-2">{total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
