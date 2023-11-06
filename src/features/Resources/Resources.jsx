export default function Resources() {
  return (
    <div className="min-h-full w-full">
      <section className="flex flex-col sm:flex-row sm:gap-8 sm:justify-around w-full px-3 py-4">
        <div>
          {/* LARGE CARD TO SHOW TOP STORY */}
          <article className="w-full sm:w-[40vw]">
            <img
              src="./img-10.jpeg"
              alt="Resource story one"
              className="w-full mb-6 rounded-md shadow-lg shadow-black"
            />

            <div className="flex flex-col shadow-sm">
              <div>
                <p className="text-lg text-black tracking-wider">
                  {" "}
                  <span className="text-grey">By:</span> Edison Nderitu
                </p>
              </div>
              <h1 className="text-blue text-2xl font-semibold">
                The wastelands on the Kenyan beach
              </h1>
            </div>
          </article>
        </div>

        <div className="sm:h-screen sm:overflow-y-scroll scroll-m-1 scroll-smooth">
          {/* MINI CARDS TO SHOW OTHER RESOURCES */}
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
        </div>
      </section>

      {/* {/* <section>Section 2</section> */}

      <section>
        <div className="w-1/2 px-2 py-4">
          <video
            controls
            preload="none"
            poster="./img-2.jpeg"
            width="350"
            aria-orientation="landscape"
          >
            {/* <source src="one-does-not-simply.webm" type="video/webm"/> */}
            <source src="./vid-4.mp4" type="video/mp4" />
          </video>
          <div>
            <p className="text-sm text-black tracking-wide">
              <span className="text-grey">By: </span>
              Alex mwendwa
            </p>
            <a href="/doc.pdf" target="_blank">
              <h2 className="text-black font-bold text-lg tracking-wide">
                Saving the last of mangroove
              </h2>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResourceCard() {
  // const { pageNumber, numPages } = useState();
  return (
    <div className="flex gap-6 ">
      {ImageCard()}

      {DocumentCard()}
    </div>
  );
}
function DocumentCard() {
  return (
    <div className="w-full sm:w-[20vw] px-2 py-4">
      <img
        src="./img-6.jpeg"
        alt=""
        className="w-full rounded-md shadow-sm shadow-black mb-4"
      />

      <div>
        <p className="text-sm text-black tracking-wide">
          <span className="text-grey">By: </span>
          Alex mwendwa
        </p>
        <a href="/doc.pdf" target="_blank">
          <h2 className="text-black font-bold text-lg tracking-wide">
            Saving the last of mangroove
          </h2>
        </a>
      </div>
    </div>
  );
}

function ImageCard() {
  return (
    <div className="w-full sm:w-[20vw] px-2 py-4">
      <img
        src="./img-6.jpeg"
        alt=""
        className="w-full rounded-md shadow-sm shadow-black mb-4"
      />

      <div>
        <p className="text-sm text-black tracking-wide">
          <span className="text-grey">By: </span>
          Alex mwendwa
        </p>
        <h2 className="text-black font-bold text-lg tracking-wide">
          Saving the last of mangroove
        </h2>
      </div>
    </div>
  );
}
