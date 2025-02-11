import Image from "next/image";
import Studio from "../../../public/assets/images/studio.jpg";
import Portrait from "../../../public/assets/images/img_band1_cropped.png";
import Piano from "../../../public/assets/images/img_band3.jpeg";
import Band2 from "../../../public/assets/images/img_band4.jpeg";
import Recording from "../../../public/assets/images/piano.png";

const BentoGrid = () => {
  return (
    <section className="">
      <div className="py-4 px-2 mx-auto max-w-screen-2xl sm:py-4 lg:px-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <Image
                fill={true}
                src={Studio}
                alt=""
                className="absolute inset-0  object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 ">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              <Image
                fill={true}
                src={Portrait}
                alt=""
                className="absolute inset-0  object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </div>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <Image
                  fill={true}
                  src={Piano}
                  alt=""
                  className="absolute inset-0  object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </div>
              <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <Image
                  fill={true}
                  src={Band2}
                  alt=""
                  className="absolute inset-0  object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1  h-auto md:h-full flex flex-col">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <Image
                fill={true}
                src={Recording}
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
