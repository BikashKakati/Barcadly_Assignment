import React from 'react'

const Navbar = ({setOpenModel}) => {
  return (
    <nav className='w-full bg-primary py-2 px-8 flex justify-between items-center'>
        <h3 className='text-xl font-bold'>DropTask</h3>
        <button className='btn-primary' onClick={()=>{setOpenModel(prev=>!prev)}}>Add New Todo</button>
    </nav>
  )
}

export default Navbar