import CourseDrawer from "./CourseDrawer";
import ExamDrawer from "./ExamDrawer";

export default function Course() {
  return (
    <div className="space-y-8">
      <div className="px-2 py-1 width-full rounded-md text-black font-medium tracking-wide bg-grey shadow-md shadow-black flex flex-col gap-4">
        <h1>Hello, Denis</h1>
        <p>Welcome to class. Here we learn about our oceans</p>
      </div>

      <div>
        <h1 className="text-lg font-bold capitalize underline">Join a class</h1>

        <div className="shadow-md px-3 py-8 flex items-stretch gap-4">
          <CourseDrawer />
          <CourseDrawer />
          <ExamDrawer />
        </div>
      </div>
    </div>
  );
}
