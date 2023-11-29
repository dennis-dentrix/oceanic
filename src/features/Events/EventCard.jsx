export default function EventCard({ title, description }) {
  return (
    <div className="w-[18rem] sm:w-[15rem] bg-white shadow-md  rounded-md flex flex-col gap-4">
      <img src="./bg-image.jpg" alt="" className="" />

      <div className=" space-y-2">
        <div className="space-y-1 p-3">
          <h1 className="text-blue">{title}</h1>
          <p className="text-sm tracking-wide hidden md:block">{description}</p>
        </div>
        <div>
          <div className="flex flex-col items-start gap-2 justify-between px-2 py-1 ">
            <div className="text-xs">
              <p className="flex flex- items-end gap-1 text-sm ">
                <span>23/10/2023</span>
                to: <span>27/10/2023</span>
              </p>
              <button className=" m-2 text-base bg-blue text-grey rounded-full px-2 py-1 ">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
