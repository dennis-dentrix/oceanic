import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../services/courseApi";
import Spinner from "../ui/Spin";

function Homepage() {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["course", Math.random()],
  //   queryFn: getCourses,
  // });
  // if (isLoading) return <Spinner />;

  return (
    <div>
      <UserCards />

      <div className="py-4">
        <h4>All courses</h4>

        <div className="flex  grid-flow-col flex-wrap gap-3 place-items-center py-4 ">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
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

function CourseCard() {
  return (
    <div className="rounded-md border h-[21rem] w-52">
      <img src="./img-1.jpeg" alt="" className="w-full" />

      <div className="px-2 py-3 space-y-2">
        <h4 className="font-bold">Marine and people</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          dignissimos nemo odit at autem nisi providen...
        </p>

        <div>
          <button className="bg-gray-200 rounded-lg px-2 py-1">Enroll</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
