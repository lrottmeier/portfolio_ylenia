import { FC } from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer: FC = () => {
  return (
    <footer className=" pl-5 md:pl-20">
      <div className="flex flex-col gap-5">
        <div className="flex justify-start text-left my-10">
          <p className="w-3/4 lg:w-1/4 text-lg md:text-xl lg:text-2xl">
            Join the ride! Follow me on social media for updates. Want to
            collaborate? Reach out on my socials.
          </p>
        </div>
        <div className="flex flex-col w-32 gap-5 text-lg md:text-xl lg:text-2xl">
          <Link
            href="mailto:yleniasacchet@gmail.com"
            className="flex items-center gap-2">
            Email
            <MdOutlineArrowOutward />
          </Link>
          <Link
            href="https://www.facebook.com/share/MgrC4hPmHxRqXvdm/?mibextid=LQQJ4d"
            className="flex items-center gap-2">
            Facebook
            <MdOutlineArrowOutward />
          </Link>
          <Link
            href="https://www.instagram.com/yleniasacchet?igsh=YWM2Ynpwc25qYWN2&utm_source=qr"
            className="flex items-center gap-2">
            Instagram
            <MdOutlineArrowOutward />
          </Link>
        </div>
        <div className="flex justify-center rounded-lg p-5 text-sm lg:text-md">
          <p>Copyright © Ylenia Sacchet 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
