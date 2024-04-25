import React from 'react'
import Card from './components/Card'
import AddTaskModel from './components/AddTaskModel'

const Home = () => {
  return (
    <div className='py-6 px-3 flex flex-nowrap items-start justify-start gap-5'>
      <Card />
      <Card />
      <Card />
      <div className='w-[20rem] min-h-[30rem] flex-shrink-0 bg-primary flex items-center justify-center cursor-pointer'>
        <span className='text-3xl font-extrabold vio-text'>+ Add New Card</span>
      </div>
      <AddTaskModel/>
    </div>
  )
}

export default Home