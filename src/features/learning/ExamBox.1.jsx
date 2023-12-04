/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../ui/Spin";
import { Choices } from "./Choices";
import { getQuestion } from "../../services/examApi";
import { Divider } from "@mui/material";

export function ExamBox({ onClick }) {
  const { data: exams, isLoading } = useQuery({
    queryKey: ["exams"],
    queryFn: getQuestion,
  });

  if (isLoading) return <Spinner />;
  return (
    <div>
      <div className="flex flex-col justify-between bg-grey px-2 rounded-md ">
        <div className="w-full">
          <h3 className="font-bold text-xl">Weather test</h3>

          {exams.map((exam) => {
            console.log(exam.options);
            return (
              <div className="flex flex-col gap-4 w-full " key={exam.id}>
                <div>
                  <h4>{exam.question}</h4>

                  <div className="my-4">
                    {exam.options.map((option) => (
                      <Choices option={option} key={option} />
                    ))}
                  </div>
                </div>
                <Divider />
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between px-4">
          <button
            onClick={onClick}
            className="px-2 py-1 bg-red-400 text-black tracking-wide rounded-full my-3"
          >
            Cancel
          </button>
          <p>0/100</p>
        </div>
      </div>
    </div>
  );

  function ActionBtns() {
    return (
      <div className="px-6 flex items-center justify-between gap-4">
        <button className="bg-blue px-2 py-1 rounded-md text-white">
          Previous
        </button>

        <button
          className="bg-blue px-2 py-1 rounded-md text-white"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  }
}
