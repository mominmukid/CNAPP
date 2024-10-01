import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { useForm } from 'react-hook-form'


function InputFrom({
   handelAddWidget,
   setisdisplay,
}) {

   // this from use for the the input data from user
   const { register, handleSubmit } = useForm();
   return (
      <>
         <form onSubmit={handleSubmit(handelAddWidget)} className='w-full reletive p-2 flex flex-col gap-3  justify-center items-center rounded-md'>
            <p className='font-bold '>Add the Widget</p>
            <div className='w-full flex flex-col justify-center items-center'>
               <label htmlFor="text" className='font-semibold'> Enter the widget name:</label>
               <input
                  className='w-[90%] px-2 py-1 rounded-md border border-gray-800 outline-none'
                  placeholder="Enter the widget name"
                  {...register("name", {
                     required: true,
                  })}
               />
            </div>

            <div className='w-full flex flex-col justify-center items-center'>
               <label htmlFor="text" className='font-semibold'> Enter the widget text</label>
               <input
                  className='w-[90%] px-2 py-1 rounded-md border border-gray-800 outline-none '
                  placeholder="Enter the widget text "
                  {...register("text", {
                     required: true,
                  })}
               />

            </div>
            <div className='w-full flex justify-center items-center'>
               <label htmlFor="category" className='font-semibold mr-5'> Select category</label>
               <select {...register("category")} className='bg-gray-500' >
                  <option value="CSPM">CSPM</option>
                  <option value="CWPP">CWPP</option>
                  <option value="Regirstry Scan">Regirstry Scan</option>
               </select>
            </div>


            <button type='submit' className='px-2 py-1 rounded bg-blue-500 hover:bg-blue-600'>Add Widget</button>

            <p
               onClick={() => { setisdisplay(false) }}
               className=' absolute top-2 bg-white px-1 py-1 rounded-md cursor-pointer right-2' ><MdDeleteForever /> </p>
         </form>

      </>
   )
}

export default InputFrom