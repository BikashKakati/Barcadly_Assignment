import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateCards } from '../redux/boardSlice';
import CardDropHelper from './CardDropHelper';
import Task from './Task';

const Card = ({ name, tasks, id, idx }) => {

  const [cardEditMode, setCardEditMode] = useState(false);
  const { cards } = useSelector((state) => state.board);
  const [editedCardName, setEditedCardName] = useState(name);
  const dispatch = useDispatch();

  function handleCardDelete() {
    const updatedCards = cards.filter((card) => card.id !== id);
    dispatch(updateCards(updatedCards))
    toast("Card Deleted Successfully", {
      type: "success",
    })
  }

  function handleCardEdit() {
    if (!cardEditMode) {
      setCardEditMode(true);
    } else {
      const isCardExist = cards.some((card) => card.name === editedCardName && card.name !== name);
      if (isCardExist || !editedCardName) {
        toast("Cardname already exist or invalid", {
          type: "warning",
        })
        return;
      }
      const updatedCards = cards.map((card) => {
        if (card.id === id) {
          return {
            ...card, name: editedCardName
          }
        } else {
          return card
        }
      })
      dispatch(updateCards(updatedCards));
      setCardEditMode(false);
    }
  }



  return (
    <div
      className='w-[22rem] min-h-[30rem] flex-shrink-0'
      onDragOver={(e) => { e.preventDefault() }} >
      <div className="bg-primary w-full px-3 py-4 flex justify-between items-center">
        {
          cardEditMode ?
            <input type='text' value={editedCardName} onChange={(e) => { setEditedCardName(e.target.value) }} className='outline-none border-slate-600 border-2 bg-transparent inline-block w-24' />
            :
            <span className='text-base vio-text'>{name}</span>
        }
        <div className="">
          <button className='btn-primary' onClick={handleCardEdit}>
            {cardEditMode ? "Save" : "Edit"}
          </button>
          <button className='btn-secondary' onClick={handleCardDelete}>Delete</button>
        </div>
      </div>
      <div className="w-full">
        {
          tasks?.map((task, index) => {
            return (
              <Task key={task.timeStamp} {...task} status={name} cardIdx={idx} taskIdx={index} />
            )
          })
        }
        <CardDropHelper cardIdx={idx} taskIdx={tasks.length} />
      </div>
    </div>
  )
}

export default Card