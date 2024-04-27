import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './page/Home'
import AddTaskModel from './components/AddTaskModel';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useSelector } from 'react-redux';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [openModel, setOpenModel] = useState(false);
  const {cards} = useSelector((state)=> state.board);
  const {setStorageData} = useLocalStorage();

  useEffect(()=>{
    setStorageData(cards);
  },[cards])

  return (
    <div className='min-h-dvh'>
      <Navbar setOpenModel= {setOpenModel}/>
      <ToastContainer
        position="top-right"
        hideProgressBar={true}
        autoClose={2000}
        closeOnClick
        rtl={false}
        theme="dark"
        transition={Bounce}
      />
      <main className='overflow-x-auto h-full no-scrollbar'>
        {/* navbar */}
        {/* home */}
        <Home />
      </main>
      {openModel && <AddTaskModel openModel={openModel} setOpenModel={setOpenModel}/>}
    </div>
  )
}

export default App