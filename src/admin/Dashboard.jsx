import Navigation from "./Navigation";
import Header from "./Header";
import Content from "./Content";

export default function Dashboard() {
  return (
    <div className="flex h-screen w-[90vw]">
      <div className="bg-white w-52">
        <Navigation />
      </div>
      <div className="w-full">
        <div className="bg-white">
          <Header />
        </div>
        <div className="bg-grey h-full rounded-md">
          <Content />
        </div>
      </div>
    </div>
  );
}
