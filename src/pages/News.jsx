export default function News() {
  return (
    <div className="px-20 py-7  w-full sm:grid grid-cols-3 sm:place-content-center bg-red-500">
      <div className="col-span-ful w-full sm:w-[1170px]  flex flex-col gap-8 bg-white py-6 px-4">
        <img src="./img-1.jpeg" alt="" className="sm:w-[40vw] " />

        <div className="flex flex-col justify-between  my-auto">
          <h1 className="text-3xl">Taiwan hit by 340km/h tsunami.</h1>
          <p>
            Hundreds missing. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.
          </p>
          <h3>
            Source: <span>BBC</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
