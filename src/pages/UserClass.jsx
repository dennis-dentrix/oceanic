import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../services/courseApi";
import Spinner from "../ui/Spin";
import { useState } from "react";

function UserClass() {
  const [enroll, setEnroll] = useState(false);
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  if (isLoading) return <Spinner />;

  function handleEnroll() {
    setEnroll(!enroll);
  }
  return (
    <div className="border-bottom rounded-md h-screen">
      {enroll ? (
        ""
      ) : (
        <button
          className="px-2 py-1 text-grey rounded-md bg-blush"
          onClick={handleEnroll}
        >
          Enroll
        </button>
      )}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Course Name
            </th>

            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              File
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {courses.map((course) => (
            <tr className="border-bottom" key={course.id}>
              <td className="px-4 py-2 whitespace-nowrap">{course.title}</td>

              <td className="px-4 py-2 whitespace-nowrap">
                <a
                  aria-disabled={enroll}
                  href={enroll ? course.file : "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center shadow-md px-2 py-1 border-bottom border-red-300 text-base leading-6 font-medium text-black hover:text-red-500 focus:outline-none focus:border-red-300 transition ease-in-out duration-150 sm:text-base group pointer"
                >
                  View file
                </a>
              </td>

              {/* <td className="flex gap-2">
                <button className="px-2 py-1 m-2 text-grey rounded-md bg-blush">
                  <GridDeleteIcon />
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserClass;
