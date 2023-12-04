/* eslint-disable react/prop-types */
export function Choices({ option }) {
  return (
    <div className="flex flex-col items-start gap-4 my-2 ">
      <button
        key={option}
        className={`px-3 py-1 rounded-full w-full bg-black text-grey text-lg"
        }`}
        onClick='{() => dispatch({ type: "newAnswer", payload: index })}'
      >
        {option}
      </button>
    </div>
  );
}
