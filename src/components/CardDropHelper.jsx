import React from 'react';
import { useDispatch } from 'react-redux';
import { dragTask } from '../redux/boardSlice';

const CardDropHelper = ({ cardIdx, taskIdx }) => {
    const dispatch = useDispatch();
    function handleOnDrop() {
        dispatch(dragTask({ currentCardIdx: cardIdx, droppedPosition: taskIdx }));
    }
    return (
        <div className='w-full h-[15rem] bg-main' onDrop={handleOnDrop}></div>
    )
}

export default CardDropHelper