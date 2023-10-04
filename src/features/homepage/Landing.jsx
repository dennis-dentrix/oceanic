export function Landing() {
  return (
    <div className="relative">
      <img src="./bg-image.jpg" alt="" className="bg-contain h-full w-full" />
      <div className="w-1/2 flex flex-col items-center justify-center place-item-center absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className=" text-xl fony-bold text-white">
          Lets care for our oceans
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non
          nemo ducimus sequi harum soluta aspernatur cum veniam blanditiis quis
          cumque commodi provident, tempora maiores earum repudiandae voluptates
          quasi possimus?
        </p>
      </div>
    </div>
  );
}
