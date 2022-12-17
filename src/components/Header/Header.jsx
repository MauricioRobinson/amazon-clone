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
            priority={true}
            className="cursor-pointer"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ml-6">
          <input
            type="text"
            className="p-2 h-full w-6 grow rounded-l-md shrink focus:outline-none px-4"
          />
          <MagnifyingGlassIcon className="w-12 h-6 " />
        </div>

        <div className="text-white flex items-center text-xs gap-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello, Mauro Rob</p>
            <p className="font-extrabold md:text-sm">Accout & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="bg-yellow-500 h-4 w-4 rounded-full absolute top-0 right-0 flex items-center justify-center text-black font-extrabold md:right-10">
              4
            </span>
            <ShoppingCartIcon className="h-8" />
            <p className="font-extrabold hidden mt-2 md:text-sm  md:inline">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center gap-x-4 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <Bars3Icon className="w-5 h-5 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today&apos;s Deals</p>
        <p className="hidden link lg:inline-flex">Electronics</p>
        <p className="hidden link lg:inline-flex">Food & Gricery</p>
        <p className="hidden link lg:inline-flex">Electronics</p>
        <p className="hidden link lg:inline-flex">Prime</p>
        <p className="hidden link lg:inline-flex">Buy Again</p>
        <p className="hidden link lg:inline-flex">Shopper Toolkit</p>
        <p className="hidden link lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
