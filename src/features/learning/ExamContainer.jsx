/* eslint-disable react/prop-types */

export function ExamContainer({ dispatch, onClick, numQuestions }) {
  return (
    <div className="flex flex-col justify-between bg-grey px-2 rounded-md h-[75vh]">
      <div className="flex flex-col items-center justify-center space-y-6 py-3">
        <h3 className="font-bold text-xl">Weather test</h3>
        <p>{numQuestions} Questions are ready to show </p>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => dispatch({ type: "startTest" })}
          className="bg-green px-2 py-1 rounded-full text-black font-bold"
        >
          Start Exam
        </button>
        <button
          onClick={onClick}
          className="px-2 py-1 bg-red-400 text-black tracking-wide rounded-full my-3"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
