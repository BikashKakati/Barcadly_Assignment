import React from 'react'
import Task from './Task'

const Card = () => {
  return (
    <div className='w-[22rem] min-h-[30rem] flex-shrink-0'>
        <div className="bg-primary w-full px-3 py-4">
            <span className='text-base vio-text'>Todo</span>
        </div>
        <div className="">
          <Task/>
          <Task/>
          <Task/>
        </div>
    </div>
  )
}

export default Card