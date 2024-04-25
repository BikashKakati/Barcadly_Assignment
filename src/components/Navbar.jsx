import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full bg-primary py-4 px-8 flex justify-between items-center'>
        <h3 className='text-xl font-bold'>DragTodo</h3>
        <button className='btn-primary'>Add New Todo</button>
    </nav>
  )
}

export default Navbar