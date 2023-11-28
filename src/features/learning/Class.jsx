import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Class({ onClick }) {
  const navigate = useNavigate();
  function handleStart() {
    onClick();
    navigate("/exam");
  }
  return (
    <div>
      <h1 className="text-black text-lg font-semibold capitalize py-4">
        The most endagered species
      </h1>

      <div className="px-5 space-y-4 my-4">
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            culpa sunt eveniet, incidunt odit reiciendis illum exercitationem
            quod iure iste. Qui ducimus animi minus consectetur fugiat alias
            commodi sed quos.
          </p>
        </section>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            veniam omnis minima aperiam eius, earum, ducimus rem cumque atque
            aut, quas ratione deleniti! Fugit commodi, numquam asperiores beatae
            aperiam inventore.
          </p>
        </section>

        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            perspiciatis quae reiciendis tenetur minima omnis eum illum iste
            officiis ducimus nobis, quod dolore officia suscipit eveniet quo
            distinctio, soluta explicabo!
          </p>
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
