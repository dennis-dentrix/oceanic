/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../services/courseApi";
import Spinner from "../ui/Spin";

function Homepage() {
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });
  if (isLoading) return <Spinner />;
  // console.log(courses);
  return (
    <div>
      <UserCards />

      <div className="py-4">
        <h4>All courses</h4>

        <div className="flex  grid-flow-col flex-wrap gap-3 place-items-center py-4 ">
          {courses.map((course) => (
            <CourseCard
              title={course.title}
              description={course.description}
              image={course.image}
              file={course.file}
              key={course.id}
            />
          ))}
        </div>
      </div>

      <div>
        <h4>Enrolled Courses</h4>

        <div className="flex  grid-flow-col flex-wrap gap-3 place-items-center py-4 ">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
}

function UserCards() {
  return (
    <div className="flex gap-3 items-center">
      <div className="flex gap-3 w-36 border px-2 items-center rounded-lg py-3">
        <p className="text-3xl">6</p>
        <p className="text-sm tracking-wider">Enrolled courses</p>
      </div>

      <div className="flex gap-3 w-36 border px-2 items-center rounded-lg py-3">
        <p className="text-3xl">4</p>
        <p className="text-sm tracking-wider">Completed courses</p>
      </div>
    </div>
  );
}

function CourseCard({ title, description, image, file }) {
  return (
    <div className="rounded-md border h-[21rem] w-52">
      <img src={image} alt={title} className="w-full" />

      <div className="px-2 py-3 space-y-2">
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm line-clamp-4 overflow-hidden text-ellipsis">
          {description}
        </p>

        <div>
          <button className="bg-gray-200 rounded-lg px-2 py-1">
            <a href={file} target="_blank" rel="noopener noreferrer">
              Get Content
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
