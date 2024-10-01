import React, { useEffect, useState } from 'react'

function Navbar({
  setserchwidget,
  setisdisplay,
  widgets,
}) {

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');


  // this function use to serch  the data from the state and display the data in the body

  const searchWidget = (widget) => {
    if (search) {
      return widget.name.toLowerCase().includes(search.toLowerCase())
    }
    return true;
  }

  //  this function use to sort the data by categary

  const sortWidget = (widget) => {
    if (sort === 'all') {
      return true;
    }
    return widget.category.toLowerCase().includes(sort.toLowerCase());

  }
  //  this line  is use to call the searchWidget and sortWidget function in the body component

  const filteredWidget = widgets.filter((widget) => searchWidget(widget) && sortWidget(widget));

  // this line set the data actual in the body component

  console.log();
  useEffect(() => {
    setserchwidget(filteredWidget)

  }, [widgets, search, sort])




  return (
    <>
      {/* this is our logo */}
      <div className='w-full p-4 shadow-md shadow-gray-300/50 sticky top-0 z-50 flex flex-col md:flex-row  gap-4 justify-between items-center bg-gray-600 mb-5 '>
        <div className='Logo font-bold text-xl w-auto text-white'> CNAPP Dashboard</div>
        <div className='searchbox w-auto '>
          {/* this the  search box */}

          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search widget by name' className=' w-full  rounded-md px-2 py-1 outline-none' />
        </div>

        {/* this is the nav select  box */}

        <div>
          <label htmlFor="select" className='font-semibold text-white'>Sort by category </label>
          <select value={sort} onChange={(e) => setSort(e.target.value)} name="select" className='p-2 rounded-md bg-slate-700 text-white outline-none'>
            <option value="all">All</option>
            {widgets?.map((item, index) => (
              <option key={index} value={item.category}>{item.category}</option>
            ))}
          </select>
        </div>
        <div>
          {/* this is the add btn */}
          <button
            onClick={() => { setisdisplay(true) }}
            className='  w-auto rounded-md font-bold  bg-blue-500 hover:bg-blue-600 px-3 py-2 text-white'>Add weiget +</button></div>
      </div>
    </>
  )
}

export default Navbar