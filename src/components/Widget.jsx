
import { MdDeleteForever } from "react-icons/md";

function Widget({ details, handleRemoveWidget }) {
  return (
    <>
      <div className='relative w-[100%] md:w-[25%] mt-5 rounded-md bg-gray-400/50  h-full flex flex-col justify-start p-2 items-center min-h-[12rem]'>

        <div className='w-full p-2 mt-5'>
          <div className='title font-bold mt-7 '>{details.name}</div>
          <div className='text '> {details.text}</div>
        </div>
        <p
          onClick={() => { handleRemoveWidget(details.id) }}
          className='absolute top-3 cursor-pointer right-3 px-1 py-1 bg-white rounded-full'> <MdDeleteForever /></p>
        <p className='absolute top-3  left-3 px-2 py-1 bg-white rounded-full'>
          {details.category}
        </p>
      </div>
    </>
  )
}

export default Widget