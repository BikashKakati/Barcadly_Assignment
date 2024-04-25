import React from 'react'
import Navbar from './components/Navbar'
import Home from './Home'

const App = () => {
  return (
    <div className='min-h-dvh'>
      <Navbar />
      <main className='overflow-x-auto h-full'>
        {/* navbar */}
        {/* home */}
        <Home />
      </main>
    </div>
  )
}

export default App