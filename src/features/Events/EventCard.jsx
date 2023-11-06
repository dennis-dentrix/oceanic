export default function EventCard() {
  return (
    <div className="w-[10rem] sm:w-[15rem] bg-white shadow-md  rounded-md flex flex-col gap-4">
      <img src="./bg-image.jpg" alt="" className="" />

      <div className=" space-y-2">
        <div className="space-y-1 p-3">
          <h1 className="text-blue">UNESCO confrence 2023</h1>
          <p className="text-sm tracking-wide hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <div className="flex flex-col items-start gap-2 justify-between">
            <div className="text-xs">
              <p className="flex flex- items-end gap-1 text-xs sm:text-sm">
                <span>23/10/2023</span>
                to: <span>27/10/2023</span>
              </p>
            </div>

            <button className=" m-2 text-sm bg-blue text-grey px-2 py-1 rounded-full">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
