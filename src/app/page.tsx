import Header from "@/components/header/header";
import Image from "next/image";
import Portrait_Natur from "../../public/assets/images/red_natur_portrait.jpeg";
import BentoGrid from "@/components/bento-grid/bento-grid";

export default function Home() {
  return (
    <main>
      <div className="h-screen">
        <Image
          src={Portrait_Natur}
          className="h-3/4 object-cover"
          alt="Typographie"
        />
      </div>
      <div className="flex justify-center text-center -mt-32 p-4">
        <p>
          Hello there! I'm Ylenia a 23-year old singer/musician from Switzerland
          who loves blending different sounds and languages into my music. Based
          in Switzerland right now, but getting ready to move to Copenhagen real
          soon!
        </p>
      </div>
      <BentoGrid />
    </main>
  );
}
