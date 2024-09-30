import React from "react";

import pollo1 from "../../assets/Pollo_1.webp";
import broaster from "../../assets/Broaster.svg";
import pollo2 from "../../assets/Pollo_2.svg";
import chicharron from "../../assets/Chicharrón de Pollo.svg";
import salchiPollo from "../../assets/Salchipollo.svg";
import salchipapa from "../../assets/Salchipapa.svg";

import Image from "next/image";

interface Clasico {
  name: string;
  precio: string;
  img: string; // Puedes cambiar 'string' si tienes un tipo específico para las imágenes
}
interface EspecialesProps {
  enviarCarrito: (item: Clasico) => void; // La función recibe un objeto de tipo Especial
}
export default function Clasico({enviarCarrito}:EspecialesProps) {
  const clasico:Clasico[] = [
    {
      name: "1/8 de Pollo + Gaseosa personal",
      precio: "9.00",
      img: pollo1,
    },
    {
      name: "1/4 de Pollo + Gaseosa de 1L",
      precio: "22.00",
      img: pollo1,
    },
    {
      name: "1/2 de Pollo + Gaseosa de 2L",
      precio: "40.00",
      img: pollo1,
    },
    {
      name: "1/4 de Pollo + Gaseosa personal",
      precio: "22.00",
      img: pollo1,
    },
    {
      name: "Mostrito + Gaseosa personal",
      precio: "13.00",
      img: salchiPollo,
    },
    {
      name: "Salchipapa + Gaseosa personal",
      precio: "10.00",
      img: salchipapa,
    },
    {
      name: "Salchipollo + Gaseosa personal",
      precio: "12.00",
      img: salchiPollo,
    },
    {
      name: "Broaster + Gaseosa personal",
      precio: "15.00",
      img: broaster,
    },
    {
      name: "Chicharrón de pollo + Gaseosa personal",
      precio: "16.00",
      img: chicharron,
    },
  ];
  return (
    <>
      <div className=" my-4  flex justify-start items-center  flex-wrap  gap-5">
        {clasico?.map((item) => (
          <div
           key={item.name}
            style={{ boxShadow: "0px 0px 2px grey" }}
            className="  w-full shadow-gray-400 bg-white  md:w-[310px]  p-3 rounded-md"
          >
            <Image
              src={item.img}
              className=" w-full  rounded-md"
              objectFit="cover"
              alt={item.name}
            />
            <div className=" flex justify-between items-center gap-2 p-2">
              <div>
                <p className=" font-semibold max-w-[150px]">{item.name}</p>
              </div>
              <div className=" text-[#CD3742] p-1 font-bold  border-l-2 pl-4 border-gray-300">
                S/ {item.precio}
              </div>
            </div>
            <button
              onClick={() => enviarCarrito(item)}
              type="button"
              className=" my-2 bg-[#60DBA0] p-1 block ml-auto mr-auto text-white font-semibold  rounded-l-full rounded-r-full px-4"
            >
              Añadir a carrito
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
