import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded p-10">
      <div className="container px-4 py-10 mx-auto flex flex-col gap-8">
        <nav className="cursor-pointer flex justify-center items-center gap-4">
          <Link
            href="/services"
            className="link link-hover hover:text-blue-500"
          >
            Services
          </Link>
          <Link
            href="/#pricing"
            className="link link-hover hover:text-blue-500"
          >
            Pricing
          </Link>
          <Link href="/#about" className="link link-hover hover:text-blue-500">
            About
          </Link>
        </nav>
        <div className="socials_wrapper mx-auto">
          <SocialLinks />
        </div>
        <div className="text-center">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by The
            German Guy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
