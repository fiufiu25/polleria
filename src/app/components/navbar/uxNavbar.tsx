"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoMenu,
  IoSearch,
} from "react-icons/io5";
import logo from "../../assets/LOGO.svg";

export default function UxNavbar() {
  const link = [
    { name: "Inicio", path: "" },
    { name: "Nosotros", path: "nosotros" },
    { name: "Carta Online", path: "cartas" },
    { name: "Tiendas", path: "tiendas" },
  ];
  const [abrir, setAbrir] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const handleLinkClick = () => {
    
    setAbrir(false); // Cierra el navbar al hacer clic en un enlace
  };

  const handleClickOutside = (event:MouseEvent) => {
    if (navRef.current && !navRef.current?.contains(event.target as Node)) {
        setAbrir(false); // Cierra el navbar al hacer clic fuera de él
      }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside); // Escucha clics en el documento
    return () => {
      document.removeEventListener('click', handleClickOutside); // Limpia el evento al desmontar
    };
  }, []);
  return (
    <>
      <header
      ref={navRef}  
        style={{ boxShadow: "0px -2px 7px  grey" }}
        className="  fixed top-0  left-0 w-full  flex justify-between p-2  px-4 items-center bg-white z-50"
      >
        <div className=" flex items-center gap-1">
          <Image alt="logo" width={40} height={40} src={logo} />
          <p className=" font-lily-script-one font-semibold ">Dodo Chicken</p>
        </div>
        <nav
        
          style={{
            transform: abrir ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.3s ease",
          }}
          className="  absolute p-5  justify-center shadow-md flex-col gap-5  bg-white  h-[400px] w-full z-20 top-0 left-0  flex items-center lg:hidden "
        >
          {link?.map((item:any) => {
            return (
              <Link
              key={ item.name}
                onClick={handleLinkClick}
                className="px-5  text-lg font-semibold"
                href={` /${item.path}`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className=" border-2 shadow-sm  rounded-l-full rounded-r-full mx-5    border-gray-300 px-4 py-1 flex  items-center gap-2">
            <IoSearch size={15} className=" text-gray-600" />
            <input
              className=" outline-none max-w-[100px] placeholder:text-gray-600"
              type="text"
              placeholder="Buscar"
            />
          </div>
          <div className=" w-[2px] hidden  lg:block h-[30px]   mx-8   bg-black" />
          <div className=" flex  gap-5 items-center">
            <IoLogoFacebook size={30} color="black" />
            <IoLogoInstagram size={30} color="black" />
          </div>
        </nav>
        <nav className=" hidden  lg:flex">
        {link?.map((item:any) => {
            return (
              <Link
              key={item.name}
                className="px-5  text-lg font-semibold"
                href={` /${item.path}`}
                onClick={handleLinkClick }
              >
                {item.name}
              </Link>
            );
          })}
          <div className=" border-2 shadow-sm  rounded-l-full rounded-r-full mx-5    border-gray-300 px-4 py-1 flex  items-center gap-2">
            <IoSearch size={15} className=" text-gray-600" />
            <input
              className=" outline-none max-w-[100px] placeholder:text-gray-600"
              type="text"
              placeholder="Buscar"
            />
          </div>
          <div className=" w-[2px] hidden  lg:block h-[30px]   mx-8   bg-black" />
          <div className=" flex  gap-5 items-center">
            <IoLogoFacebook size={30} color="black" />
            <IoLogoInstagram size={30} color="black" />
          </div>
        </nav>
        <div
          onClick={() => setAbrir(!abrir)}
          className=" cursor-pointer  block z-20 lg:hidden"
        >
          <IoMenu size={30} color=" black" />
        </div>
      </header>
    </>
  );
}
