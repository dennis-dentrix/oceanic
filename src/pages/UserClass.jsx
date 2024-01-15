import { GridDeleteIcon } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../services/courseApi";
import Spinner from "../ui/Spin";

function UserClass() {
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });
  if (isLoading) return <Spinner />;
  console.log(courses);
  return (
    <div className="border-bottom py-2 rounded-md h-screen">
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
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {courses.map((course) => (
            <tr className="border-bottom" key={course.id}>
              <td className="px-4 py-2 whitespace-nowrap">{course.title}</td>

              <td className="px-4 py-2 whitespace-nowrap">
                <a
                  href={course.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center shadow-md px-2 py-1 border-bottom border-red-300 text-base leading-6 font-medium text-black hover:text-red-500 focus:outline-none focus:border-red-300 transition ease-in-out duration-150 sm:text-base group"
                >
                  View file
                </a>
              </td>

              <div className="flex gap-2">
                <button className="px-2 py-1 m-2 text-grey rounded-md bg-blush">
                  <GridDeleteIcon />
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserClass;
