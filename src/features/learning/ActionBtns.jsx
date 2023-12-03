export function ActionBtns({ dispatch }) {
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
