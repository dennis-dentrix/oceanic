import { useQuery } from "@tanstack/react-query";
import CourseDrawer from "./CourseDrawer";
import ExamDrawer from "./ExamDrawer";
import { getCourses } from "../../services/courseApi";
import Spinner from "../../ui/Spin";

export default function Course() {
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });
  if (isLoading) return <Spinner />;
  return (
    <div className="space-y-8">
      <div className="px-2 py-1 width-full rounded-md text-black font-medium tracking-wide bg-grey shadow-md shadow-black flex flex-col gap-4">
        <h1>Hello, Denis</h1>
        <p>Welcome to class. Here we learn about our oceans</p>
      </div>

      <div>
        <h1 className="text-lg font-bold capitalize underline">Join a class</h1>

        <div className="shadow-md px-3 py-8 flex items-stretch gap-4 ">
          {courses.map((course) => (
            <CourseDrawer
              key={course.id}
              isLoading={isLoading}
              title={course.title}
              introduction={course.introduction}
              section1={course.section1}
            />
          ))}

          <ExamDrawer />
        </div>
      </div>
    </div>
  );
}
