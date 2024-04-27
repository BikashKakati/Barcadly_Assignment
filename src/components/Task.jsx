import dayjs from 'dayjs';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDragTaskDetails, deleteTask, editTask } from '../redux/boardSlice';
import Model from './Model';
import { toast } from 'react-toastify';

const Task = ({ title, timeStamp, status, taskIdx }) => {

  const [editTaskMode, setEditTaskMode] = useState(false);
  const statusRef = useRef();
  const { cards } = useSelector((state) => state.board);
  const [editedTaskTitle, setEditedTaskTitle] = useState(title);
  const dispatch = useDispatch();
  const prevCardIdx = cards.findIndex((card)=> card.name === status);

  function handleEditTask(e) {
    e.preventDefault();
    dispatch(editTask({ 
      editedTaskTitle, prevStatus: status, newStatus: statusRef.current.value, taskIdx 
    }));
    setEditTaskMode(false);
  }
  function handleOnDrag(e){
    dispatch(addDragTaskDetails({taskIdx, prevCardIdx}))
  }

  function handleTaskDelete(){
    dispatch(deleteTask({status,taskIdx}));
    setEditTaskMode(false);
    toast("Task Deleted Successfully",{
      type:"success",
  })
  }


  return (
    <>
      <div className='w-full min-h-[5rem] bg-secondary py-4 px-2 mt-3' onClick={() => { setEditTaskMode(true) }} draggable onDragStart={handleOnDrag}>
        <p className='text-base font-medium mb-3'>{title}</p>
        <p className='text-xs text-slate-300'>
          {dayjs(timeStamp).format("YYYY-MMM-DD")}
          {" "}
          {dayjs(timeStamp).format("hh:mm A")}
        </p>
      </div>


      {editTaskMode &&
        <Model>
          <h4 className='text-slate-200 text-2xl text-center'>Edit Task</h4>
          <form className="mt-4 w-full" onSubmit={handleEditTask}>
            <label htmlFor='name'>Task</label>
            <input type='text' placeholder='task' id='name' className='input' value={editedTaskTitle} onChange={(e) => setEditedTaskTitle(e.target.value)} />
            <label id='status'>Select Status</label>
            <select id='status' className='input *:text-black' ref={statusRef} defaultValue={status}>
              {
                cards.map((card) => {
                  return (
                    <option key={card.id} value={card.name}>{card.name}</option>
                  )
                })
              }
            </select>
            <input type='submit' value="Add Task" className='btn-primary cursor-pointer' />
            <button type='button' className='btn-secondary' onClick={() => { setEditTaskMode(false) }}>Cancel</button>
            <button type='button' className='btn-primary' onClick={handleTaskDelete}>Delete</button>
          </form>
        </Model>
      }
    </>
  )
}

export default Task