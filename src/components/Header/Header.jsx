import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const router = useRouter();

  const handleLogo = () => {
    router.push({
      pathname: "/",
    });
  };

  return (
    <header className="sticky">
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-2 grow">
        <div
          onClick={handleLogo}
          className="relative w-24 h-12 mt-2 flex items-center grow sm:grow-0">
          <Image
            src={"https://links.papareact.com/f90"}
            alt="Logo"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 grow rounded-l-md shrink focus:outline-none px-4"
          />
          <MagnifyingGlassIcon className="w-12 h-6 " />
        </div>
      </div>

      {/* Bottom nav */}
      <div></div>
    </header>
  );
};

export default Header;
