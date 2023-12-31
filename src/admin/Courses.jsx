/* eslint-disable react/prop-types */
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { NavLink, Outlet } from "react-router-dom";
import { getCourses } from "../services/courseApi";
import Spinner from "../ui/Spin";
import CourseDrawer from "../features/learning/CourseDrawer";
import { useState } from "react";

export default function ClassMngmt() {
  const [showClass, setShowclass] = useState(false);
  const {
    data: courses,
    isLoading: loadCourse,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  if (error) return <p>Error</p>;

  if (loadCourse) return <Spinner />;
  return (
    <div className="space-y-6">
      <div className="flex gap-6 items-stretch h-max border-b border-black p-2">
        {courses.map((course) => (
          <>
            <CoursesCard
              course={course}
              key={course.id}
              setShowclass={setShowclass}
              showClass={showClass}
            />
          </>
        ))}
      </div>
      {showClass ? (
        <ClassView />
      ) : (
        <p className="grid place-content-center text-xl bg-red-300 px-2 py-1 rounded-full ">
          Click on a class to view
        </p>
      )}
    </div>
  );
}

function CoursesCard({ course, setShowclass, showClass }) {
  console.log(course);
  return (
    <div>
      <NavLink className="bg-black text-white rounded-md px-4 py-6 w-48 h-[15rem] flex flex-col justify-around gap-5">
        <div className="flex flex-col items-end gap-3">
          <h1>{course.title}</h1>
          {/* <p className="text-sm">10 Minutes</p>
          <p className="text-sm">0/100 points</p> */}
        </div>
        <button
          className="bg-blue py-2 rounded-full"
          onClick={(id) => setShowclass(!showClass)}
        >
          View
        </button>
      </NavLink>

      {/* <div className="h-full overflow-y-scroll">
        <CourseDrawer />
      </div> */}
    </div>
  );
}

function ClassView() {
  return (
    <div className="">
      Content displayed
      <h1>Hello world</h1>
    </div>
  );
}

// function ClassView() {
//   const columns = [
//     { field: "id", headerName: "ID", width: 70 },
//     { field: "firstName", headerName: "First name", width: 130 },
//     { field: "lastName", headerName: "Last name", width: 130 },
//     {
//       field: "dateEnrolled",
//       headerName: "Date Enrolled",
//       type: "number",
//       width: 130,
//     },
//     {
//       field: "dateCompleted",
//       headerName: "Date Completed",
//       type: "number",
//       width: 130,
//     },

//     {
//       field: "score",
//       headerName: "Score",
//       description: "This column lists number of events user has booked.",
//       sortable: true,
//       width: 90,
//       type: "number",
//     },
//   ];

//   const rows = [
//     {
//       id: 1,
//       lastName: "Snow",
//       firstName: "Jon",
//       dateEnrolled: 2,
//       dateCompleted: 1,
//       score: 10,
//     },
//     {
//       id: 2,
//       lastName: "Lannister",
//       firstName: "Cersei",
//       dateEnrolled: 1,
//       dateCompleted: 1,
//       score: 10,
//     },
//     {
//       id: 3,
//       lastName: "Lannister",
//       firstName: "Jaime",
//       dateEnrolled: 2,
//       dateCompleted: 1,
//       score: 10,
//     },
//     {
//       id: 4,
//       lastName: "Stark",
//       firstName: "Arya",
//       dateEnrolled: null,
//       dateCompleted: 1,
//       score: 10,
//     },
//     {
//       id: 5,
//       lastName: "Targaryen",
//       firstName: "Daenerys",
//       dateEnrolled: 2,
//       dateCompleted: 1,
//       score: 10,
//     },
//   ];
//   return (
//     <div>
//       <div className="space-y-4 my-3">
//         <h1 className=" font-bold text-lg">Endanger Species</h1>
//         <p className="font-light ">Enrolled students</p>
//       </div>

//       <div style={{ height: 500, width: "100%" }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 5 },
//             },
//           }}
//           pageSizeOptions={[5, 10]}
//           checkboxSelection
//         />
//       </div>
//     </div>
//   );
// }
