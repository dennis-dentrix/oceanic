import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Class({ onClick, title, section1 }) {
  const navigate = useNavigate();
  function handleStart() {
    onClick();
    navigate("/exam");
  }
  return (
    <div>
      <h1 className="text-black text-lg font-semibold capitalize py-4">
        {title}
      </h1>

      <div className="px-5 space-y-4 my-4">
        <section>
          <p>{section1}</p>
        </section>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={onClick}
          className="px-2 py-1 bg-red-300 text-black tracking-wide rounded-full my-3"
        >
          Finish
        </button>

        <button
          onClick={handleStart}
          className="px-2 py-1 bg-green text-black tracking-wide rounded-full my-3"
        >
          Start test
        </button>
      </div>
    </div>
  );
}
