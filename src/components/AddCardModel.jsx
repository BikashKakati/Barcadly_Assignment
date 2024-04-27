import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCard } from '../redux/boardSlice';
import Model from './Model';
import { toast } from 'react-toastify';

const AddCardModel = ({ setOpenModel }) => {
    const { cards } = useSelector((state) => state.board);
    const dispatch = useDispatch();
    const cardRef = useRef();


    function handleAddNewTask(e) {
        e.preventDefault();
        const cardName = cardRef.current.value;
        const isExist = cards.some((card) => card.name.toLowerCase() === cardName.toLowerCase());
        if(isExist || !cardName){
            toast("Cardname already exit or invalid",{
                type:"warning",
            })
            return;
        }
        
        const newCard = {
            id:Date.now(),
            name:cardName,
            tasks:[],
        }
        dispatch(addNewCard(newCard));
        setOpenModel(prev => !prev);
        toast("Card Added Successfully",{
            type:"success",
        })
    }
    
    
    return (
        <Model>
            <h4 className='text-slate-200 text-2xl text-center'>Add Custom Card</h4>
            <form className="mt-4 w-full" onSubmit={handleAddNewTask}>
                <input type='text' placeholder='card name' className='input capitalize' ref={cardRef}/>
                <input type='submit' value="Add New Card" className='btn-primary cursor-pointer' />
                <button type='button' className='btn-secondary' onClick={() => { setOpenModel(prev => !prev) }}>Cancel</button>
            </form>

        </Model>
    )
}

export default AddCardModel