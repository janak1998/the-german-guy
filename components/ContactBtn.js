import React from "react";
import Link from "next/link";
const ContactBtn = () => {
  return (
    <Link
      href="/#talk-to-team"
      className="font-bold lg:block mr-4 bg-primary text-secondary
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
  );
};

export default ContactBtn;
