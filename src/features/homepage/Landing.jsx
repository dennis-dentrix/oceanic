export function Landing() {
  return (
    // <div className="relative w-full h-full ">
    //   <img src="./bg-image.jpg" alt="" className="bg-contain w-full" />
    //   <div className="w-1/2 flex flex-col items-center justify-center place-item-center absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    //     <h1 className=" text-xl fony-bold text-white">
    //       Lets care for our oceans
    //     </h1>
    //     <p className="text-black">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non
    //       nemo ducimus sequi harum soluta aspernatur cum veniam blanditiis quis
    //       cumque commodi provident, tempora maiores earum repudiandae voluptates
    //       quasi possimus?
    //     </p>
    //   </div>
    // </div>
    <div className="w-full relative mx-0">
      <img
        src="./img-9.jpeg"
        alt=""
        className="bg-contain sm:bg-cover mx-0 w-full h-[80vh] contrast-50"
      />

      <div className="absolute bottom-6 sm:bottom-32 pl-4 w-full">
        <div>
          <h1 className="text-white font-extrabold text-xl py-1 flex flex-col flex-wrap">
            Marine wars
          </h1>
          <p className="text-grey font-extrabold text-xl pl-1 border-black border-l-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-lg text-black font-bold">source: BBC</p>

          <div>
            <button className="px-3 py-2 text-white bg-blue rounded-md">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
