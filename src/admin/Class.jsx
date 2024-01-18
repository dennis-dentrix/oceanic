import { GridDeleteIcon } from "@mui/x-data-grid";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Drawer } from "antd";
import { deleteCourse, getCourses } from "../services/courseApi";
import Spinner from "../ui/Spin";
import CourseForm from "./CourseForm";
import { getClasses } from "../services/classApi";

export function Class() {
  const [open, setOpen] = useState(false);

  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data: courses, isLoading } = useQuery({
    queryKey: ["allCourses"],
    queryFn: getCourses,
  });

  const { data: classes, isLoading: isFetching } = useQuery({
    queryKey: ["classes"],
    queryFn: getClasses,
  });

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["allCourses"],
      });
    },
  });

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  if (isLoading || isFetching) return <Spinner />;
  let cls = classes?.find((item) => item.id === Number(id));
  return (
    <div className="flex flex-col items-start justify-between py-2  rounded-md">
      <div>
        <button
          className="px-2 py-1 m-2 text-grey rounded-md bg-blush"
          onClick={showDrawer}
        >
          Create Course
        </button>
        <Drawer title="Add Course" onClose={onClose} open={open}>
          <CourseForm id={Number(id)} />
        </Drawer>
      </div>
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

        {cls ? (
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((item) => {
              if (item.classID === Number(id)) {
                return (
                  <tr key={item.id}>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {item.title}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">3</td>
                    <td className="px-4 py-2 whitespace-nowrap">2</td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <a
                        href={item.file}
                        target="_blank"
                        rel="noreferrer"
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
            <button
              className="px-2 py-1 m-2 text-grey rounded-md bg-blush"
              onClick={showDrawer}
            >
              Create course
            </button>

            <Drawer title="Add Course" onClose={onClose} open={open}>
              <CourseForm id={id} />
            </Drawer>
          </tbody>
        )}
      </table>
    </div>
  );
}
