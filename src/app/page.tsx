import Header from "@/components/header/header";
import Image from "next/image";
import Portrait_Natur from "../../public/assets/images/red_natur_portrait_cropped.png";

import BentoGrid from "@/components/bento-grid/bento-grid";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <div>
        <div className="h-full">
          <Image
            src={Portrait_Natur}
            className="h-screen object-cover z-0"
            alt="Typographie"
          />
        </div>
        <div className="flex absolute top-[90%] left-1/2 transform -translate-x-1/2 justify-center text-white text-xs sm:text-sm md:text-lg">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <p>dive deeper into my musical journey by scrolling down</p>
            <MdKeyboardDoubleArrowDown className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center py-10 md:py-20 lg:py-32 text-lg md:text-xl lg:text-2xl">
        <p className="w-3/4 lg:w-2/5">
          Hello there! I&apos;m Ylenia a 23-year old singer/musician from
          Switzerland who loves blending different sounds and languages into my
          music. Based in Switzerland right now, but getting ready to move to
          Copenhagen real soon!
        </p>
      </div>
      <div className="">
        <BentoGrid />
      </div>
      <div className="flex justify-center text-center py-10 md:my-20 lg:my-32 text-lg md:text-xl lg:text-2xl">
        <p className="w-3/4 lg:w-4/5">
          Currently I&apos;m completing my Bachelor of Arts in Music at WIAM,
          where I&apos;ve spent the last four years studying vocals in
          Winterthur. For my final Bachelor&apos;s concert called &ldquo;Viking
          Meets Grunge,&ldquo;I performed songs in ancient languages like Old
          Norse and Faroese. Beyond vocals, I&apos;m a guitarist and music
          producer, crafting my own tunes and experimenting with new sounds. Not
          long ago, I started a band with some very talented friends from
          school. We&apos;re producing our own grunge/alt-rock tunes and keeping
          an eye out for a perfect band name. My latest project? I went to
          Denmark to capture field recordings and underwater sounds that&apos;ll
          make my new songs feel like ancient Nordic mysteries. After
          graduation, I&apos;m packing up and moving to Copenhagen to see where
          my music path leads next. The goal? Getting my original music out
          there, touring with my band and constantly writing/producing authentic
          music
        </p>
      </div>
      <div className="border-t-[0.75px] border1border-white mx-5"></div>
    </main>
  );
}
