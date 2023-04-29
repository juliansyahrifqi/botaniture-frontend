"use client";

import React, { useState } from "react";
import ButtonSidebar from "../Button/ButtonSidebar";
import Image from "next/image";
import Logo from "/public/Logo.png";
import { BsBookmark, BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menus = [
  { name: "Wishlist", icon: BsBookmark, href: "/wishlist" },
  { name: "Cart", icon: BsCart2, href: "/cart" },
  { name: "Account", icon: AiOutlineUser, href: "/account" },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const pathname = usePathname();

  return (
    <>
      <nav className="flex justify-between items-center py-4 shadow-md px-12">
        <ButtonSidebar handleSidebarOpen={handleSidebarOpen} />

        <Link href="/">
          <Image src={Logo} alt="Botaniture Logo" width={250} height={250} />
        </Link>

        <div className="flex gap-5">
          {menus.map((menu, i) => {
            const Icon = menu.icon;
            return (
              <Link href={menu.href} key={i}>
                <Icon className="mx-auto text-xl mb-1 text-secondary" />
                <span className="text-sm font-semibold text-black font-roboto">
                  {menu.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      
      <nav className={`z-50 fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm pt-12 pb-4 px-10 bg-sidebar border-r overflow-y-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-all ease-in-out duration-500`}>
        <div className="flex items-center mb-8">
          <a className="mr-auto text-3xl font-bold leading-none" href="/">
            <Image src={Logo} width={200} alt="Botaniture Logo" />
          </a>
          <button className="navbar-close" onClick={handleSidebarOpen}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 30L30 1M1 1L30 30"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li className="mb-2">
              <Link
                className={`${
                  pathname === "/"
                    ? "bg-primary-20 text-primary rounded-lg"
                    : " transition-colors duration-500 cursor-pointer"
                } block p-4 text-lg font-medium text-primary hover:bg-primary-20 hover:text-primary hover:rounded-lg font-roboto`}
                href="/"
              >
                Beranda
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className={`${
                  pathname === "/belanja"
                    ? "bg-primary-20 text-blue-600 rounded-lg"
                    : " transition-colors duration-500 cursor-pointer"
                } block p-4 text-lg font-medium text-primary hover:bg-primary-20 hover:text-primary hover:rounded-lg font-roboto`}
                href="/belanja"
              >
                Belanja
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className={`${
                  pathname === "/blog"
                    ? "bg-primary-20 text-blue-600 rounded-lg"
                    : " transition-colors duration-500 cursor-pointer"
                } block p-4 text-lg font-medium text-primary hover:bg-primary-20 hover:text-primary hover:rounded-lg font-roboto`}
                href="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6 flex justify-center align-center"></div>
          <p className="my-4 text-sm text-center text-gray-400 font-normal font-roboto">
            <span>Copyright © Botaniture 2023</span>
          </p>
        </div>
      </nav>

    </>
  );
}
