import React, { useState } from 'react'
import Card from '../components/Card'
import AddCardModel from '../components/AddCardModel';
import { useSelector } from 'react-redux';

const Home = () => {
  const [openModel, setOpenModel] = useState(false);
  const {cards} = useSelector(state => state.board);
  return (
    <div className='py-6 px-3 flex flex-nowrap items-start justify-start gap-5'>
      {
        cards.map((card,index)=>{
          return (
            <Card key={card.id} {...card} idx={index}/>
          )
        })
      }
      <div className='w-[20rem] min-h-[30rem] flex-shrink-0 bg-primary flex items-center justify-center cursor-pointer' onClick={()=>{setOpenModel(prev=>!prev)}}>
        <span className='text-3xl font-extrabold vio-text'>+ Add New Card</span>
      </div>
      {openModel && <AddCardModel setOpenModel={setOpenModel}/>}
    </div>
  )
}

export default Home