/* eslint-disable react/prop-types */
import Spinner from "../../ui/Spin";
import { ActionBtns } from "./ActionBtns";
import { Choices } from "./Choices";

export function ExamBox({
  onClick,
  question,
  dispatch,
  answer,
  status,
  points,
}) {
  console.log(question);
  return (
    <div>
      {status === "loading" && <Spinner />}
      <div className="flex flex-col justify-between bg-grey px-2 rounded-md h-[75vh]">
        <div className="w-full">
          <h3 className="font-bold text-xl">Weather test</h3>

          <div className="flex flex-col gap-4 w-full ">
            <div>
              <h4>{question.question}</h4>
              {question.options.map((option, index) => (
                <Choices
                  question={question}
                  option={option}
                  index={index}
                  key={option}
                  dispatch={dispatch}
                  answer={answer}
                />
              ))}
            </div>
            {ActionBtns(dispatch)}
          </div>
        </div>

        <div className="flex items-center justify-between px-4">
          <button
            onClick={onClick}
            className="px-2 py-1 bg-red-400 text-black tracking-wide rounded-full my-3"
          >
            Cancel
          </button>
          <p>{points}/100</p>
        </div>
      </div>
    </div>
  );
}
