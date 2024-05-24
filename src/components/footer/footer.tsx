import { FC } from "react";
import Link from "next/link";
// import { MdOutlineArrowOutward } from "react-icons/md";

const Footer: FC = () => {
  return (
    <footer className=" pl-5 rounded-t-3xl">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col text-xl gap-5 w-auto">
          <Link
            href="mailto:yleniasacchet@gmail.com"
            className="flex items-center gap-2">
            Email
            {/* <MdOutlineArrowOutward /> */}
          </Link>
          <Link
            href="https://www.facebook.com/share/MgrC4hPmHxRqXvdm/?mibextid=LQQJ4d"
            className="flex items-center gap-2">
            Facebook
            {/* <MdOutlineArrowOutward /> */}
          </Link>
          <Link
            href="https://www.instagram.com/yleniasacchet?igsh=YWM2Ynpwc25qYWN2&utm_source=qr"
            className="flex items-center gap-2">
            Instagram
            {/* <MdOutlineArrowOutward /> */}
          </Link>
        </div>
        <div className="flex justify-center rounded-lg p-5">
          <p>Copyright © Ylenia Sacchet 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
