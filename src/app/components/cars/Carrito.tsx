"use client";
import React, { useState } from "react";
import Title from "../ux/title";
import Image from "next/image";
import logo from "../../assets/LOGO.svg";
import { IoClose, IoTrash } from "react-icons/io5";
import  carrito from "../../assets/carrito.png"
export default function Carrito({items,setItems,setOpen}) {
 

  const increaseQuantity = (index) => {
    const newItems = [...items];
    newItems[index].cantidad++;
    setItems(newItems);
  };

  const decreaseQuantity = (index) => {
    const newItems = [...items];
    if (newItems[index].cantidad > 1) {
      newItems[index].cantidad--;
    }
    else{
      newItems.splice(index, 1);
    }
    setItems(newItems);
  };
  const deleteFood=(name)=>{
     const datosActualizado= items.filter(item=>item.name!==name)
     setItems(datosActualizado)
  }

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };
  return (
    <>
      <div className=" flex relative  flex-col  lg:pl-10  xl-pl-24   w-[350px]  lg:min-w-[300px] justify-en bg-white items-center">
      <div onClick={()=>setOpen(false)} className="  block  rounded-full shadow cursor-pointer xl:hidden absolute right-2 top-2">
          <IoClose size={20} color="black"/>
        </div>
        <Title
          title={"Tu pedido"}
          className={" text-xl md:text-3xl text-[#CD3742]"}
        />
        {items?.length < 1 ? (
            <div className=" flex flex-col place-content-center ">
                
                   <Image alt="carrito" src={carrito} width={200} height={200}/>
                   <p className=" text-center font-semibold my-2">no hay pedido</p>
            </div>
        ) : (
          <div
            className=" overflow-y-auto h-[500px] lg:h-auto  lg:overflow-hidden rounded-md  shadow-lg py-2  mt-3 w-[350px]  lg:min-w-[300px]  "
            style={{ boxShadow: "0px 0px 5px #C4C4C4" }}
          >
            <div className="flex  items-center gap-1 justify-center">
              <Image src={logo} width={40} height={40} alt="logo" />{" "}
              <p className=" font-lily-script-one ">Dodo Chicken</p>
            </div>
            <div className="bg-white p-4 rounded ">
              <div className="flex justify-between">
                <p className="  font-semibold">Lista</p>
                <p className="  font-semibold">Total:</p>
              </div>
              <ul className=" p-0 m-0">
                {items?.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between  my-1 gap-5 items-center"
                  >
                    <div>
                      <p className=" w-[150px]  text-sm">{item.name}</p>
                    </div>
                    <div className="flex w-[60px]  items-center   gap-2">
                      <button
                        className="bg-black w-[20px] h-[20px] text-lg rounded-md font-bold flex justify-center  items-center  text-white"
                        onClick={() => decreaseQuantity(index)}
                      >
                        -
                      </button>
                      <span>{item.cantidad}</span>
                      <button
                        className="bg-black w-[20px] h-[20px] text-lg rounded-md font-bold flex justify-center  items-center  text-white"
                        onClick={() => increaseQuantity(index)}
                      >
                        +
                      </button>
                    </div>
                    <div className=" flex  gap-1 items-center w-[100px]  justify-end">
                      <p>${(Number(item.precio)  * item.cantidad).toFixed(2)}</p>
                      < IoTrash size={15} color="red"  className=" cursor-pointer" onClick={()=>deleteFood(item.name)}/>
                    </div>
                  </li>
                ))}
              </ul>
              <div className=" w-full  h-[0.3px] border-dashed   my-6  border-2 border-black/20" />

              <div className="mt-4 ">
                <p className=" text-end">
                  Sub Total: ${calculateTotal().toFixed(2)}
                </p>
                <p className=" text-end">
                  {" "}
                  IGV: ${(calculateTotal() * 0.18).toFixed(2)}
                </p>
                <p className=" text-end">
                  Total a Pagar: ${(calculateTotal() * 1.18).toFixed(2)}
                </p>
              </div>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold block mr-auto  ml-auto px-10 py-3 rounded-md mt-4">
                Comprar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
