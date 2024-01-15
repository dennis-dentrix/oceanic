/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spin";
import { Link } from "react-router-dom";
import { getClasses } from "../services/classApi";

function Homepage() {
  const { data: classes, isLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: getClasses,
  });
  if (isLoading) return <Spinner />;
  console.log(classes);
  return (
    <div>
      <div className="flex gap-3 items-center">
        <UserCards num={"6"} text={"Enrolled classes"} />
        <UserCards num={"4"} text={"Completed courses"} />
      </div>

      <div className="py-4">
        <h4>All courses</h4>

        <div className="flex  grid-flow-col flex-wrap gap-3 place-items-center py-4 ">
          {classes.map((cls) => (
            <CourseCard
              key={cls.id}
              title={cls.title}
              description={cls.description}
              image={cls.image}
              id={cls.id}
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

export function UserCards({ num, text }) {
  return (
    <div className="flex gap-3 w-36 border px-2 items-center rounded-lg py-3">
      <p className="text-3xl">{num}</p>
      <p className="text-sm tracking-wider">{text}</p>
    </div>
  );
}

function CourseCard({ title, description, image, id }) {
  return (
    <div className="rounded-md border h-[21rem] w-52">
      <img src={image} alt={title} className="w-full" />

      <div className="px-2 py-3 space-y-2">
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm line-clamp-4 overflow-hidden text-ellipsis">
          {description}
        </p>

        <div>
          <Link
            className="bg-gray-200 rounded-lg px-2 py-1"
            to={`/class/${id}`}
          >
            View class
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
