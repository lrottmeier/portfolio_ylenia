import Header from "@/components/header/header";
import Image from "next/image";
import Portrait_Natur from "../../public/assets/images/red_natur_portrait.jpeg";
import BentoGrid from "@/components/bento-grid/bento-grid";

export default function Home() {
  return (
    <main>
      <div className="h-full ">
        <Image
          src={Portrait_Natur}
          className="h-3/4 object-cover"
          alt="Typographie"
        />
      </div>
      <div className="flex justify-center text-center my-10">
        <p className="w-2/3">
          Hello there! I&apos;m Ylenia a 23-year old singer/musician from
          Switzerland who loves blending different sounds and languages into my
          music. Based in Switzerland right now, but getting ready to move to
          Copenhagen real soon!
        </p>
      </div>
      <div className="">
        <BentoGrid />
      </div>
      <div className="flex justify-center text-center py-10">
        <p className="w-2/3">
          Currently I&apos;m completing my Bachelor of Arts in Music at WIAM,
          where I've spent the last four years studying vocals in Winterthur.
          For my final Bachelor's concert called "Viking Meets Grunge," I
          performed songs in ancient languages like Old Norse and Faroese.
          Beyond vocals, I'm a guitarist and music producer, crafting my own
          tunes and experimenting with new sounds. Not long ago, I started up a
          band with some very talented friends from school. We're producing our
          own grunge/alt-rock tunes and keeping an eye out for a perfect band
          name. My latest project? I went to Denmark to capture field recordings
          and underwater sounds that'll make my new songs feel like ancient
          Nordic mysteries. After graduation, I'm packing up and moving to
          Copenhagen to see where my music path leads next. The goal? Getting my
          original music out there, touring with my band and constantly
          writing/producing authentic music.
        </p>
      </div>
      <div className="flex justify-center text-center my-10">
        <p className="w-2/3">
          Wanna join the ride? Follow me on social media for all the latest
          updates! Feel like collaborating or working together on something
          dope? Hit me up on my socials
        </p>
      </div>
    </main>
  );
}
