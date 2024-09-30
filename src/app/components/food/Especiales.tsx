import React from "react";
import pollo1 from "../../assets/Pollo_1.webp";
import Image from "next/image";
import chaufa from "../../assets/Arroz_chaufa_de_pollo.svg";
import lomo from "../../assets/Lomo_saltado.svg";
import tallarin from "../../assets/Tallarin_saltado.svg";
import polloPlancha from "../../assets/Pollo_a_la_plancha.svg";
import anticucho from "../../assets/Anticucho.svg";
import mollejita from "../../assets/Mollejita.svg";
import caldo from "../../assets/Caldo_de_gallina.svg";
import aguadito from "../../assets/Aguadito.svg";
import sopaCriolla from "../../assets/Sopa_a_la_criolla.svg";
interface EspecialesProps {
  enviarCarrito: (item: Especial) => void; // La función recibe un objeto de tipo Especial
}
interface Especial {
  name: string;
  precio: string;
  img: string; // Puedes cambiar 'string' si tienes un tipo específico para las imágenes
}
export default function Especiales({ enviarCarrito }:EspecialesProps) {

  const especiales:Especial[] = [
    {
      name: "Arroz Chaufa de pollo + Gaseosa personal",
      precio: "15.00",
      img: chaufa,
    },
    {
      name: "Lomo Saltado + Gaseosa personal",
      precio: "16.00",
      img: lomo,
    },
    {
      name: "Tallarin Saltado + Gaseosa personal",
      precio: "15.00",
      img: tallarin,
    },
    {
      name: "Pollo a la Plancha + Gaseosa Personal",
      precio: "16.00",
      img: polloPlancha,
    },
    {
      name: "Anticucho + Gaseosa personal",
      precio: "17.00",
      img: anticucho,
    },
    {
      name: "Mollejita + Gaseosa personal",
      precio: "16.00",
      img: mollejita,
    },
    {
      name: "Caldo de Gallina + Gaseosa personal",
      precio: "14.00",
      img: caldo,
    },
    {
      name: "Aguadito + Gaseosa personal",
      precio: "14.00",
      img: aguadito,
    },
    {
      name: "Sopa criolla + Gaseosa personal",
      precio: "14.00",
      img: sopaCriolla,
    },
  ];
  return (
    <>
      <div className=" my-4  flex justify-start items-center  flex-wrap  gap-5">
        {especiales?.map((item:any) => (
          <div
            style={{ boxShadow: "0px 0px 2px grey" }}
            className="  w-full shadow-gray-400 bg-white  md:w-[310px]   p-3 rounded-md"
          >
            <Image
              src={item.img}
              className=" w-full rounded-md overflow-hidden"
              objectFit="cover"
              alt="pollo a la braza"
            />
            <div className=" flex justify-between  gap-2 items-center p-2">
              <div>
                <p className=" max-w-[150px] font-semibold">{item.name}</p>
              </div>
              <div className=" text-[#CD3742] p-1 font-bold  border-l-2 pl-4 border-gray-300">
                S/{item.precio}
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
