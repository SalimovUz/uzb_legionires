"use client";
import Link from "next/link";
import Image from "next/image";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import {
  logo,
  telegram,
  instagram,
  youtube,
} from "@/public/images/logos/index";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#FDD835] via-[#FFEB3B] to-[#FFF9C4] text-gray-800 shadow-xl fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-12 h-12">
            <Image
              src={logo}
              alt="Uzbekistan Legionaries Logo"
              layout="fill"
              objectFit="contain"
              className="rounded-full shadow-lg"
            />
          </div>
          <span
            className="text-[12px] md:text-[18px] xl:text-3xl font-extrabold tracking-wide text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Uzbekistan Legionaries
          </span>
        </Link>

        <div className="hidden lg:flex space-x-6">
          <Link
            href="/news"
            className="flex items-center font-medium text-gray-800 hover:text-[#FFB347] hover:bg-white transition-colors duration-300 px-4 py-2 rounded"
          >
            <NewspaperIcon className="mr-2" />
            Yangiliklar
          </Link>
          <a
            href="https://www.instagram.com/uzbekistan_legionaries?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-medium text-gray-800 hover:text-[#FFB347] hover:bg-white transition-colors duration-300 px-4 py-2 rounded"
          >
            <Image
              src={instagram}
              alt="Instagram"
              width={24}
              height={24}
              className="mr-2"
            />
            Instagram
          </a>
          <a
            href="https://t.me/uzbekistan_legionaries"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-medium text-gray-800 hover:text-[#FFB347] hover:bg-white transition-colors duration-300 px-4 py-2 rounded"
          >
            <Image
              src={telegram}
              alt="Telegram"
              width={24}
              height={24}
              className="mr-2"
            />
            Telegram
          </a>
          <a
            href="https://www.youtube.com/@uzbekistan_legionaries_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-medium text-gray-800 hover:text-[#FFB347] hover:bg-white transition-colors duration-300 px-4 py-2 rounded"
          >
            <Image
              src={youtube}
              alt="YouTube"
              width={24}
              height={24}
              className="mr-2"
            />
            YouTube
          </a>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-b from-[#FDD835] via-[#FFEB3B] to-[#FFF9C4] text-gray-800 py-2 rounded-t-2xl shadow-2xl z-40">
        <div className="flex justify-between sm:justify-around">
          <a
            href="https://www.instagram.com/uzbekistan_legionaries?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-medium text-gray-800 hover:text-[#FFB347] hover:bg-white transition-colors duration-300 p-2 rounded"
          >
            <Image
              src={instagram}
              alt="Instagram"
              width={24}
              height={24}
              className=""
            />
            Instagram
          </a>
          <a
            href="https://t.me/uzbekistan_legionaries"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-medium text-gray-800 hover:text-[#FFB347] hover:bg-white transition-colors duration-300 p-2 rounded"
          >
            <Image
              src={telegram}
              alt="Telegram"
              width={24}
              height={24}
              className=""
            />
            Telegram
          </a>
          <a
            href="https://www.youtube.com/@uzbekistan_legionaries_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-medium text-gray-800 hover:text-[#FFB347] hover:bg-white transition-colors duration-300 p-2 rounded"
          >
            <Image
              src={youtube}
              alt="YouTube"
              width={24}
              height={24}
              className=""
            />
            YouTube
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
