"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Hamburger from "./Hamburger";
import { ModeToggle } from "./Theme-btn";
import scrollToSectionUtil from "@/utils/scrollToSectionUtil";

const Navbar = () => {
  return (
    <nav className="bg-background/50 sticky top-0  p-1 backdrop-blur border-b z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl">
          <Link href="/">The German Guy</Link>
        </div>

        <div className="flex justify-center items-center">
          <div className="nav_links_wrapper flex gap-5 items-center ">
            <ul className="md:flex md:items-center md:space-x-6 hidden md:block p-4">
              <li>
                <Link
                  href="/services"
                  className="block py-1 md:py-0 hover:text-blue-500"
                >
                  Services
                </Link>
              </li>
              <li
                className="block py-2 md:py-0 hover:text-blue-500 cursor-pointer"
                onClick={() => scrollToSectionUtil("pricing", 50)}
              >
                Pricing
              </li>
              <li>
                <Link
                  href="/partners"
                  className="block py-2 md:py-0 hover:text-blue-500"
                >
                  Our Partners
                </Link>
              </li>
              <li
                onClick={() => scrollToSectionUtil("about", 50)}
                className="block py-2 md:py-0 hover:text-blue-500 cursor-pointer"
              >
                About
              </li>
            </ul>
            <Link
              href="/#talk-to-team"
              className="hidden font-bold lg:block mr-4 bg-primary text-secondary
              px-3 py-2 rounded-lg
              "
            >
              CONTACT US
              <svg
                className="hidden lg:inline-flex ml-2 mb-1 stroke-white fill-white dark:stroke-black dark:fill-black"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="rgba(0,0,0,0)"
              >
                <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
              </svg>
            </Link>
          </div>
          <ModeToggle />
          <div className="hamburger_menu">
            <Sheet>
              <SheetTrigger>
                <Hamburger />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-bold my-4">
                    The German Guy
                  </SheetTitle>
                </SheetHeader>

                <SheetFooter>
                  <div className="nav_links_wrapper flex flex-col gap-5 justify-center items-center">
                    <ul className="flex flex-col justify-center items-center">
                      <li>
                        <Link href="/services" className=" block py-2 md:py-0">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/pricing" className=" block py-2 md:py-0">
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className=" block py-2 md:py-0">
                          Visa Types
                        </Link>
                      </li>
                      <li>
                        <Link href="/#about" className=" block py-2 md:py-0">
                          About
                        </Link>
                      </li>
                    </ul>
                    <Button className="w-[50%]"> CONTACT US </Button>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
