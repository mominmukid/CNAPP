import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addWidget, removeWidget, addCategory } from '../store/widgetSlice'
import initialData from '../../API/initialData.json'
import Widgit from '../components/Widget'
import Navbar from '../components/Navbar'
import InputFrom from '../components/InputFrom'
import { useId } from 'react';

function HomePage() {
  const id = useId();
  const [serchwidget, setserchwidget] = useState([])
  const [isdisplay, setisdisplay] = useState(false)
  const dispatch = useDispatch();
  const widgets = useSelector((state) => state.widget.categories)

  // this useEffect use to add the initail data to our state

  useEffect(() => {
    initialData.categories.forEach(element => {
      dispatch(addCategory(element))
    });
  }, [])

  //  This function use the Add the widget in state

  const handelAddWidget = (data) => {
    let element = { ...data, id }
    dispatch(addWidget(element))
    setisdisplay(false)
  }

  //  This function use the remove the widget in state

  const handleRemoveWidget = (id) => {
    dispatch(removeWidget(id))
  }




  return (
    <>
      {/* this is thhe nav bar */}
      <div className=' bg-gray-800 relative w-full min-h-screen'>
        <Navbar
          setisdisplay={setisdisplay}
          serchwidget={serchwidget}
          setserchwidget={setserchwidget}
          widgets={widgets}
        />
        {/* this is actual body */}
        <div className='w- full  flex justify-center items-center flex-wrap gap-5 p-2'>
          {serchwidget?.map((item) => (
            <Widgit key={item.id} details={item} handleRemoveWidget={handleRemoveWidget}
            />))}
        </div>
        {/* this is input form */}
        <div className={`${isdisplay ? 'display-block' : 'hidden'}  absolute top-20 md:top-0 rounded-md left-1/2 -translate-x-1/2 translate-y-1/2  w-[90%] md:w-[30%] z-51 bg-gray-200  h-[20rem]`}>
          <InputFrom
            isdisplay={isdisplay}
            setisdisplay={setisdisplay}
            handelAddWidget={handelAddWidget}
          />

        </div>
      </div>

    </>
  )
}

export default HomePage