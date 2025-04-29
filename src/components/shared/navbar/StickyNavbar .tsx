"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import logo from "../../../../public/logo.png";

const StickyNavbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-20 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-darkBlack shadow-lg translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0"
      }`}
    >
      <div className="h-20 flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-84 lg:shadow-md border-b-black">
        <Link href={"/"} className="hidden lg:flex">
          <Image src={logo} alt="logo-image" priority className="w-12 h-12" />
        </Link>
        <nav>
          <ul className="hidden lg:flex gap-10 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`hover:text-lightGreen transition-all ease-in-out duration-300 relative group font-semibold ${
                    pathname === link?.path && "text-lightGreen"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-1/2 w-0 h-0.5 bg-lightGreen group-hover:w-1/2 group-hover:left-0 transition-all ease-in-out duration-300 ${
                      pathname === link?.path && "w-1/2"
                    }`}
                  />
                  <span
                    className={`absolute -bottom-1 right-1/2 w-0 h-0.5 bg-lightGreen group-hover:w-1/2 group-hover:right-0 transition-all ease-in-out duration-300 ${
                      pathname === link?.path && "w-1/2"
                    }`}
                  />
                </Link>
              </li>
            ))}
            <Link href={"/contact"}>
              <Button className="bg-lightGreen hover:bg-lightBlue cursor-pointer">
                Hire me
              </Button>
            </Link>
          </ul>
        </nav>
        {/* mobile menu */}
        <div className="lg:hidden flex gap-4">
          <Sheet open={openMenu} onOpenChange={setOpenMenu}>
            <SheetTrigger onClick={handleClick}>
              <CiMenuFries className="text-[32px] text-lightGreen" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>{" "}
                {/* <-- add title for a11y */}
              </SheetHeader>

              {/* logo */}
              <div className="mb-36 -mt-8.5 mx-4 text-center text-3xl text-lightGreen">
                <Link href={"/"} onClick={handleClick}>
                  <Image
                    src={logo}
                    alt="logo-image"
                    priority
                    className="w-10 h-10"
                  />
                </Link>
              </div>

              {/* nav */}
              <nav className="flex flex-col justify-center items-center gap-8">
                {navLinks.map((link, index) => {
                  return (
                    <Link
                      key={index}
                      href={link.path}
                      onClick={handleClick}
                      className={`${
                        link.path === pathname &&
                        "text-lightGreen border-b-2 border-lightGreen"
                      } text-xl capitalize hover:text-lightGreen transition-all`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default StickyNavbar;
