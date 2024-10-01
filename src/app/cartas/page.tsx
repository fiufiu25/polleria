"use client";
const { v4: uuidv4 } = require("uuid");
import React, { useState } from "react";
import Title from "../components/ux/title";
import promo2 from "../assets/promo_2.svg";
import Especiales from "../components/food/Especiales";
import Combos from "../components/food/Combos";
import Carrito from "../components/cars/Carrito";
import Image from "next/image";
import Bebidas from "../components/food/Bebidas";
import Clasico from "../components/food/Clasico";
import { IoBag, IoCar, IoClose } from "react-icons/io5";
interface Carrtio {
  name: string;
  precio: number;
  cantidad:number;
  descripcion?:string[]
  img: string; // Puedes cambiar 'string' si tienes un tipo específico para las imágenes
}
export default function page() {
  const cartas = [
    { name: "Clásicos" },
    { name: "Especiales" },
    { name: "Combos" },
    { name: "Bebidas" },
  ];
  const [open, setOpen] = useState(false);
  const [categoria, setCategoria] = useState("Clásicos");
  const [carrito, setCarrito] = useState <Carrtio[]>([]);

  const enviarCarrito = (item:any) => {
    const verificar = carrito.find((e) => e?.name === item.name);
    if (verificar) {
      setCarrito(
        carrito.map((e:Carrtio) =>
          e.name === item.name ? { ...e, cantidad: e.cantidad + 1 } : e
        )
      );
    } else {
      setCarrito([...carrito, { ...item, cantidad: 1 }]);
    }
  };

  return (
    <div className=" mt-[100px]">
      <Title
        className={" text-xl md:text-4xl text-[#CD3742]"}
        title={"Carta Online"}
      />
      <div className="   px-2 grid grid-cols-6  md:px-10  xl:px-[50px] 2xl:px-[100px] gap-6">
        <div className="    col-span-6    xl:col-span-4">
          <div className=" w-full md:max-w-[1000px]">
            <div className=" flex justify-center md:justify-start 2xl:justify-center flex-wrap  gap-2 my-6  items-center ">
              {cartas?.map((item) => (
                <div
                  key={item.name}
                  onClick={() => setCategoria(item.name)}
                  className={`px-5 md:px-10 lg:px-10  xl:px-16   2xl:px-20  cursor-pointer  py-3 ${
                    categoria == item.name
                      ? "bg-[#E03C48] text-[white]"
                      : "bg-[#E7E7E7] text-[#A0A0A0]"
                  } rounded-l-full rounded-r-full`}
                >
                  <p className=" text-[10px]  font-bold md:text-base lg:text-lg ">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            {categoria == "Clásicos" ? (
              <Clasico enviarCarrito={enviarCarrito} />
            ) : categoria == "Especiales" ? (
              <Especiales enviarCarrito={enviarCarrito} />
            ) : categoria == "Combos" ? (
              <Combos enviarCarrito={enviarCarrito} />
            ) : (
              <Bebidas />
            )}
          </div>
        </div>
        <div className=" hidden xl:block  xl:col-span-2 ">
          <Carrito  setOpen ={setOpen} items={carrito} setItems={setCarrito} />
          <div className=" my-10 flex place-content-center">
            <Image
              alt="promocion"
              className=" rounded-md shadow"
              src={promo2}
              width={300}
              height={300}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div
        onClick={() => setOpen(true)}
        className=" xl:hidden fixed right-3 bottom-11 w-[40px] h-[40px]  flex  justify-center  items-center rounded-full bg-white shadow-md z-20"
      >
        {carrito && carrito.length < 1 ? null : (
          <div className="  absolute rounded-full  -right-1 -top-1  bg-red-700 w-5 h-5 flex justify-center items-center">
            <small className="  text-white  font-bold ">{carrito.length}</small>
          </div>
        )}

        <IoBag size={20} />
      </div>
      {open && (
        <div className="   fixed  flex justify-center items-center bg-white/90 w-full h-full top-0  p-3 ">
          <Carrito setOpen={setOpen} items={carrito} setItems={setCarrito} />
        </div>
      )}
    </div>
  );
}
