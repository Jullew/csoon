import Image from "next/image";
import React from "react";
import Logo from "../../../../public/logo.webp";
import LogoDark from "../../../../public/logodark.webp"

const Header = () => {
  return (
    <header>
      <nav className="dark:hidden block">
        <Image
          src={Logo}
          height={30}
          className="block lg:hidden"
          alt="Logo - napis Julian Lewandowski"
        />
        <Image
          src={Logo}
          height={50}
          className="hidden lg:block"
          alt="Logo - napis Julian Lewandowski"
        />
      </nav>
      <nav className="dark:block hidden">
        <Image
          src={LogoDark}
          height={30}
          className="block lg:hidden"
          alt="Logo - napis Julian Lewandowski"
        />
        <Image
          src={LogoDark}
          height={50}
          className="hidden lg:block"
          alt="Logo - napis Julian Lewandowski"
        />
      </nav>
    </header>
  );
};

export default Header;
