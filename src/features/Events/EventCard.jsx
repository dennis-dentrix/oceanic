export default function EventCard() {
  return (
    <div className="w-[13rem] bg-white rounded-md flex flex-col gap-4">
      <img src="./bg-image.jpg" alt="" className="" />

      <div className="p-3 space-y-4">
        <div className="space-y-2">
          <h1 className="text-blue">UNESCO confrence 2023</h1>
          <p className="text-sm tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="text-xs">
              <p>
                from: <span>23/10/2023</span>
              </p>
              <p>
                to: <span>27/10/2023</span>
              </p>
            </div>

            <button className="text-sm bg-blue text-grey px-2 py-1 rounded-full">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
