import panMayo from "../../assets/Guardar_pan_para_mayo.svg";
import amigoExtra from "../../assets/Amigo_extra.svg"
import hayParaTodos from "../../assets/Hay_para_todos.svg"
import Image from "next/image";
export default function Combos({enviarCarrito}) {
  const combos = [
    {
      name: " 'Guardar pan para mayo'",
      descripcion: [
        "1/2 pollo a la brasa",
        "Arroz Chaufa de Pollo",
        "Gaseosa de 2L",
      ],
      precio: "50.00",
      img: panMayo,
    },
    {
      name: " 'Amigo extra'",
      descripcion: [
        "1 Pollo a la Brasa",
        "Arroz Chaufa de Pollo",
        "Gaseosa de 3L",
      ],
      precio: "80.00",
      img:amigoExtra ,
    },
    {
      name: " 'Hay para todos'",
      descripcion: [
        "2 Pollo a la Brasa",
        "Arroz Chaufa de Pollo",
        "Gaseosa de 3L",
        "Porción de Tequeños",
      ],
      precio: "130.00",
      img: hayParaTodos,
    },
  ];
  return (
    <>
      <div className=" my-4  flex justify-center items-center  flex-wrap  gap-5">
        {combos?.map((item, index) => (
          <div
            key={index}
            style={{ boxShadow: "0px 0px 2px grey" }}
            className="  w-[430px] lg:w-full relative shadow-gray-400 flex  flex-col md:flex-row bg-white   justify-between items-center    rounded-md"
          >
            <div className=" relative w-full h-[180px] md:w-[190px] lg:w-[400px] bg-blue-300">
            <Image
             objectFit="cover"
              src={item.img}
             
             layout="fill"
              
              alt="pollo a la braza"
            />
            </div>
           
            <div className=" flex-1 flex flex-col relative  p-2 justify-between items-center  ">
              <h3 className="   text-center text-base lg:text-lg      text-gray-900 font-semibold">
                Combo <span className=" font-bold text-black">{item.name}</span>
              </h3>
              <div className=" flex p-2 items-center  my-3 justify-between w-full">
                <div>
                  {item.descripcion.map((des) => (
                    <p className="  text-[10px]  lg:text-[18px]"> + {des}</p>
                  ))}
                </div>
                <div className=" w-1   h-[50px] lg-[80px] border-l-[1px]  border-gray-400" />
                <div className="  text-2xl text-[#CD3742] p-1 font-bold  ">
                  S/{item.precio}
                </div>
              </div>

              <button
               onClick={()=>enviarCarrito(item)}
                type="button"
                className=" bg-[#60DBA0] text-base lg:text-lg p-1 block ml-auto mr-auto text-white font-semibold  rounded-l-full rounded-r-full px-4"
              >
                Añadir a carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
