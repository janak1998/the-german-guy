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

const Navbar = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const currentUrl = router.asPath;
  const home = process.env.NEXT_PUBLIC_API_URL;
  console.log(router.home, home);
  const currentUrlLocal = window.location.href;
  console.log(currentUrlLocal);

  return (
    <nav className="bg-background/50 sticky top-0  p-1 backdrop-blur border-b z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl">
          <Link href="/">The German Guy</Link>
        </div>

        <div className="flex justify-center items-center">
          <div className="nav_links_wrapper flex gap-5 items-center ">
            <ul className="md:flex md:items-center md:space-x-6 hidden md:block p-4">
              {/* <li
                className="block py-2 md:py-0 hover:text-blue-500 cursor-pointer"
                onClick={() => scrollToSectionUtil("pricing", 50)}
              >
                Pricing
              </li> */}
              {isHomePage === "/" ? (
                <li>
                  <Link
                    href="/"
                    className="block py-1 md:py-0 hover:text-blue-500"
                  >
                    Home
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href="/"
                    className="block py-1 md:py-0 hover:text-blue-500"
                  >
                    Go Home
                  </Link>
                </li>
              )}

              <li>
                <Link
                  href="/pricing"
                  className="block py-1 md:py-0 hover:text-blue-500"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="block py-2 md:py-0 hover:text-blue-500"
                >
                  Our Partners
                </Link>
              </li>
              {/* <li
                onClick={() => scrollToSectionUtil("about", 50)}
                className="block py-2 md:py-0 hover:text-blue-500 cursor-pointer"
              >
                About
              </li> */}
              <li>
                <Link
                  href="/#about"
                  className="block py-1 md:py-0 hover:text-blue-500"
                >
                  About
                </Link>
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
                            className=" block py-2 md:py-0"
                          >
                            <SheetClose>Services</SheetClose>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pricing" className=" block py-2 md:py-0">
                            <SheetClose>Pricing</SheetClose>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/partners"
                            className=" block py-2 md:py-0"
                          >
                            <SheetClose>Our Partners</SheetClose>
                          </Link>
                        </li>
                        <li>
                          <Link href="/#about" className=" block py-2 md:py-0">
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
