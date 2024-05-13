import GsapMagnetic from "@/components/utils/GsapMagnetic";
import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-between items-end gap-10">
      <span>2024 © Julian Lewandowski</span>
      <div className="flex items-center gap-4 ">
        <Link href="https://github.com/Jullew">
          <GsapMagnetic>
            <FaGithubSquare
              size={40}
              className="cursor:pointer box-content px-[20px] pt-[40px]  hover:text-orange-500 "
            />
          </GsapMagnetic>
        </Link>
        <Link href="https://www.linkedin.com/in/julian-lewandowski-9bb7b3227/">
          <GsapMagnetic>
            <FaLinkedin
              size={40}
              className="cursor:pointer box-content px-[20px] pt-[40px] hover:text-orange-500"
            />
          </GsapMagnetic>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
