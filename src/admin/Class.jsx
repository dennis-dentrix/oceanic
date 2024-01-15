import { GridDeleteIcon } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCourse, getCourses } from "../services/courseApi";
import { useParams } from "react-router-dom";
import Spinner from "../ui/Spin";

export function Class() {
  // const router = useRouter();
  // const { id } = router.query;
  // if (!id) {
  //   return <Redirect to="/classes" />;
  // }
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
  });

  let course = courses?.find((item) => item.id === Number(id));
  if (isLoading) return <Spinner />;

  return (
    <div className="flex justify-between py-2border rounded-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Course Name
            </th>

            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Students Enrolled
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Students competed
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              File
            </th>
            <th></th>
          </tr>
        </thead>

        {course ? (
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((item) => {
              if (item.class_id === +id) {
                return (
                  <tr key={item.id}>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {item.title}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">3</td>
                    <td className="px-4 py-2 whitespace-nowrap">2</td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <a
                        href="#"
                        className="inline-flex items-center shadow-md px-3 py-1 border-bottom border-red-300 text-base leading-6 font-medium text-black hover:text-red-500 focus:outline-none focus:border-red-300 transition ease-in-out duration-150 sm:text-base group"
                      >
                        View file
                      </a>
                    </td>

                    <td className="flex gap-2">
                      <button className="px-2 py-1 m-2 text-grey rounded-md bg-blue">
                        Edit course
                      </button>
                      <button
                        className="px-2 py-1 m-2 text-grey rounded-md bg-blush"
                        onClick={() => mutate(item.id)}
                        disabled={isDeleting}
                      >
                        {isDeleting ? "Deleting..." : <GridDeleteIcon />}
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        ) : (
          <tbody className="flex flex-col items-center mx-auto  h-screen">
            <p>Sorry. There is currently no course in this class</p>
            <button className="px-2 py-1 m-2 text-grey rounded-md bg-blush">
              Create course
            </button>
          </tbody>
        )}
      </table>
    </div>
  );
}
