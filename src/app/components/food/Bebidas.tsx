import React from 'react'
import cocacola from "../../assets/cocacola_500ml_sinazucar.svg";
import Image from 'next/image';
export default function Bebidas() {
  return (
  <>
    <div className=" my-4  flex justify-center items-center  flex-wrap  gap-5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <div
                  style={{ boxShadow: "0px 0px 2px grey" }}
                  className="  w-[200px]  flex-col gap-2 shadow-gray-400 bg-white   p-1 rounded-md"
                >
                    <div className=' flex gap-1'>
                    <Image
                    src={cocacola}
                    className=" w-[100px] h-[150px] rounded-md"
                    
                   
                    alt="pollo a la braza"
                  />
                  <div className=" flex justify-between items-center p-2">
                    <div>
                      <p className=" font-semibold  text-sm">Gaseosa 3L
                      Inca Kola</p>
                      <div className="  text-lg text-[#CD3742] p-1 font-bold ">
                      S/ 12.00
                    </div>
                    </div>
                    
                  </div>
                 
                    </div>
                    <button
                    type="button"
                    className=" my-2 bg-[#60DBA0] p-1 block ml-auto mr-auto text-white font-semibold  rounded-l-full rounded-r-full px-4"
                  >
                    Añadir a carrito
                  </button>
                </div>
              ))}
            </div>
  </>
  )
}
