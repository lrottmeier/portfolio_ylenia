import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Typographie from "../../../public/assets/images/Typo_ylenia.png";

const Footer: FC = () => {
  return (
    <div className="fixed inset-x-0 top-0 flex justify-center bg-black bg-opacity-75 py-3">
      <Link href="">
        <div className="max-w-screen-sm w-full flex justify-center">
          <Image
            src={Typographie}
            className="w-1/2 md:w-3/4"
            alt="Typographie"
          />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
