import React from 'react'

const Model = ({children}) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center backdrop-blur-md">
      <div className="max-w-[25rem] bg-secondary py-4 px-5">
      {children}
    </div>
    </div>
  )
}

export default Model