import React from 'react'

export default function Title({title,className}:any) {
  return (
   <>
   <div className=' my-3'>
   <h3 className={` ${className} font-bold   text-center  `} >
    { title}
   </h3>
   </div>
   
   </>
  )
}
