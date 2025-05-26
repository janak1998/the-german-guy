"use client";
import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Hamburger from "./Hamburger";
import { ModeToggle } from "./Theme-btn";
import { useRouter } from "next/navigation";
import SocialLinks from "./SocialLinks";
import ContactBtn from "./ContactBtn";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-background/50 sticky top-0 p-1 backdrop-blur border-b z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl">
          {/* <Link href="/">The German Guy</Link> */}
          <Link href="/">
            <Image
              src="/assets/TGGLogo.png"
              alt="logo"
              className="rounded-lg h-12"
              height={150}
              width={150}
            />
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <div className="nav_links_wrapper flex gap-5 items-center">
            <ul className="md:flex md:items-center md:space-x-6 hidden md:block p-4">
              <li className="relative group">
                <Link
                  href="/services"
                  className="block py-1 md:py-0 hover:text-blue-500"
                >
                  Our Services
                </Link>
                <ul className="absolute left-[-10px] top-full hidden group-hover:block border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-10 dark:bg-slate-600 bg-white">
                  <li>
                    <Link
                      href="/services/"
                      className="block py-2 px-4 cursor-pointer hover:text-blue-500"
                    >
                      Consuling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/#cost-estimation"
                      className="block py-2 px-4 cursor-pointer hover:text-blue-500"
                    >
                      Cost Estimation
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="block py-2 md:py-0 hover:text-blue-500"
                >
                  Our Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/grade-conversion"
                  className="block py-2 md:py-0 hover:text-blue-500"
                >
                  Grade Conversion
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/#about"
                  className="block py-1 md:py-0 hover:text-blue-500"
                >
                  About
                </Link>
                <ul className="absolute left-[-35px] top-full hidden group-hover:block border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-10 dark:bg-slate-600 bg-white">
                  <li>
                    <Link
                      href="/impressum"
                      className="block py-2 px-4 cursor-pointer hover:text-blue-500"
                    >
                      Impressum
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/services/#"
                      className="block py-2 px-4 cursor-pointer hover:text-blue-500"
                    >
                      Teams
                    </Link>
                  </li> */}
                </ul>
              </li>
            </ul>
            <div className="hidden lg:flex">
              <ContactBtn className="hidden lg:flex" />
            </div>
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
                  <SheetFooter>
                    <div className="nav_links_wrapper flex flex-col gap-5 justify-center items-center">
                      <ul className="flex flex-col justify-center items-center gap-6">
                        <li>
                          <Link
                            href="/services"
                            className="block py-2 md:py-0"
                          >
                            <SheetClose>Services</SheetClose>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/partners"
                            className="block py-2 md:py-0"
                          >
                            <SheetClose>Our Partners</SheetClose>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/grade-conversion"
                            className="block py-2 md:py-0"
                          >
                            <SheetClose>Grade Conversion</SheetClose>
                          </Link>
                        </li>
                        <li>
                          <Link href="/#about" className="block py-2 md:py-0">
                            <SheetClose>About</SheetClose>
                          </Link>
                        </li>
                      </ul>
                      <SheetClose asChild className="mb-2">
                        <ContactBtn />
                      </SheetClose>
                      <div className="w-1/2 flex justify-center items-center">
                        <SocialLinks />
                      </div>
                    </div>
                  </SheetFooter>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
