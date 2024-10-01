import React from 'react'
import { IoBook, IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5'
import logo from "../../assets/LOGO.svg"
import Image from 'next/image'
export default function UxFooter() {
  return (
   <div className='  p-10 md:px-2 py-5 text-white flex  gap-3  justify-center flex-wrap lg:flex-nowrap lg:justify-between  items-start'>
    <div className=' flex flex-wrap justify-between items-start lg:flex-nowrap  gap-10'>
    <div>
        <div className=' flex    items-center   gap-1 mb-2'>
            <Image  src={logo} alt="logo"  width={30} height={30}/>
            <p className='font-lily-script-one font-bold'>Dodo Chiken</p>
        </div>
        <p className=' text-[10px]  font-lily-script-one'>“El gallo más gallo en las brasas ...”</p>
        </div>
        <div>
            <p className=' font-bold'>Inicio</p>
            <p>Promociones</p>
        </div>
        <div>
            <p className=' font-bold'>Nosotros</p>
            
        </div>
        <div>
            <p className=' font-bold'>Cartas Online</p>
            <p>Clásicos</p>
            <p>Especiales</p>
            <p>Compos</p>
            <p>Bebidas</p>
        </div>
        <div>
            <p className=' font-bold'>Tiendas</p>
            <p>Ica</p>
            <p>Lima</p>
            <p>Cusco</p>
          
        </div>
    </div>
    <div className=' flex-1  md:flex-initial flex  gap-6  justify-between items-start'>
    <div>
        <p>LIBRO DE</p>
        <p className=' font-bold mb-2'>RECLAMOS</p>
        <IoBook size={40}/>
        <p className=' font-bold'>Ubicanos</p>
        <p>Calle Huánuco 203</p>
     </div>
     <div>
        <p className=' font-bold  mb-2'>Siguenos  en:</p>
        <div className=' flex  items-center gap-2 mb-2'>
            <IoLogoFacebook size={25}/>
            <IoLogoInstagram size={25}/>
        </div>
        <p className=' font-bold text-red-600'>Contactanos a:</p>
        <p className=' flex items-center gap-1 text-orange-500'><IoLogoWhatsapp size={18} color='white'/> 9342414</p>
     </div>
    </div>
   
        
   </div>
  )
}
