"use client";
import Image from "next/image";
import React from "react";
import pollo1 from "./assets/Image de fondo.svg";
import logo from "./assets/LOGO.svg";
import Title from "./components/ux/title";
import promo1 from "./assets/promo_1.svg";
import promo2 from "./assets/promo_2.svg";
import tienda from "./assets/Nuestras_tiendas.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoPencil } from "react-icons/io5";
import Link from "next/link";

export default function page() {
  return (
    <>
      <main className="mt-[60px]">
        <div className=" relative  w-full  h-[350px] md:h-[550px] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-black/70">
          <Image layout="fill" objectFit="cover" alt="pollo" src={pollo1} />
          <div className=" absolute w-full top-0 left-0 flex flex-col justify-center items-center h-full">
            <div className=" flex gap-2 items-center z-20">
              <Image width={80} height={80} alt="logo" src={logo} />
              <p className=" text-white text-4xl font-lily-script-one font-semibold">
                Dodo Chicken
              </p>
            </div>
            <div className=" z-20 my-2">
              <p className="font-lily-script-one text-xl text-gray-200 ">
                “El gallo más gallo en las brasas 🔥 ...”
              </p>
              <div className=" flex  place-content-center mt-4">
              <Link href={"/cartas"} className=" bg-slate-100/20   text-lg border-[0.6px] border-white text-white p-1 rounded-l-full rounded-r-full  inline-block  px-10 text-center  ml-auto mr-auto my-2">
                Ver carta
              </Link>
              </div>
             
            </div>
          </div>
        </div>
        <div>
          <Title  title={"¡Promociones!"} className={" text-xl md:text-6xl text-[orange] my-10 "} />
          <div className=" mx-2  lg:mx-10">
            <Swiper
              className="mySwiper  w-full  h-[200px] sm:h-[250px] md:h-[300px] lg:h-[390px]  "
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                300: {
                  slidesPerView: 1, // Muestra 2 slides a partir de 640px
                  spaceBetween: 0,
                },
                1300:{
                  slidesPerView: 1.3, // Muestra 2 slides a partir de 640px
                  spaceBetween: 5,
                },
                1600: {
                  slidesPerView: 1.5, // Muestra 2 slides a partir de 640px
                  spaceBetween: 10,
                },
              }}
              modules={[Navigation, Autoplay]}
            >
              <SwiperSlide className="   h-full relative     overflow-hidden   ">
                <Image
                  alt="promo"
                  objectFit="cover"
                  className=" w-full h-full  rounded-lg shadow-md shadow-gray-600/80 overflow-hidden"
                  layout="fill"
                  src={promo1}
                  
                />
              </SwiperSlide>
              <SwiperSlide className=" relative h-full     overflow-hidden  ">
                <Image
                  alt="promo"
                  className=" w-full h-full rounded-lg shadow-md shadow-gray-600/80 overflow-hidden"
                  src={promo1}
                  layout="fill"
                  objectFit="cover"
                />
              </SwiperSlide>
              <SwiperSlide className=" relative h-full     overflow-hidden  ">
                <Image
                  alt="promo"
                  className=" w-full h-full rounded-lg shadow-md shadow-gray-600/80 overflow-hidden"
                  src={promo1}
                  layout="fill"
                  objectFit="cover"
                />
              </SwiperSlide>
              <SwiperSlide className=" relative h-full     overflow-hidden  ">
                <Image
                  alt="promo"
                  className=" w-full h-full rounded-lg shadow-md shadow-gray-600/80 overflow-hidden"
                  src={promo1}
                  layout="fill"
                  objectFit="cover"
                />
              </SwiperSlide>
              <div className="swiper-button-prev "></div>
              <div className="swiper-button-next "></div>
            </Swiper>
            {/*  */}
          </div>
        </div>
        <div>
          <Title
          className={" text-xl md:text-6xl text-[orange] my-10 "}
            
            title={"Nuestras Tiendas:"}
            
          />
          <div className=" flex justify-center items-center gap-2">
            <div className=" w-[400px]  p-2 bg-white shadow-md m-2 rounded-md shadow-gray-300 ">
              <Image
                alt="tienda"
                src={tienda}
                className=" rounded-md"
                width={400}
                height={300}
              />
              <h6 className=" text-red-500 text-[14px] md:text-sm text-lg font-bold text-center">
                Sede Ica - Ica
              </h6>
              <p className=" text-center  text-sm">
                Calle Cajamarca 121, al costado de la Comisaría.
              </p>
              <p className=" text-center font-semibold  underline ">Ver más </p>
            </div>
            <div className=" w-[400px]  p-2 bg-white shadow-md m-2 rounded-md shadow-gray-300 ">
              <Image
                alt="tienda"
                src={tienda}
                className=" rounded-md"
                width={400}
                height={300}
              />
              <h6 className=" text-red-500 text-lg font-bold text-center">
                Sede Ica - Ica
              </h6>
              <p className=" text-center text-[14px] md:text-sm">
                Calle Cajamarca 121, al costado de la Comisaría.
              </p>
              <p className=" underline text-center font-semibold  text-sm ">Ver más </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
