import React, { useRef } from 'react'
import Model from './Model';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask } from '../redux/boardSlice';
import { toast } from 'react-toastify';

const AddTaskModel = ({setOpenModel }) => {
  const {cards} = useSelector((state) => state.board);
  const taskRef = useRef();
  const statusRef = useRef();
  const dispatch = useDispatch();

  function handleAddTask(e) {
    e.preventDefault();
    const task = taskRef.current.value;
    const status = statusRef.current.value;
    if(!task){
      toast("Task name required",{
        type:"warning",
    })
      return;
    }
    dispatch(addNewTask({task,status}));
    setOpenModel(prev => !prev);
  }
  return (
    <Model>
      <h4 className='text-slate-200 text-2xl text-center'>Add Task</h4>
      <form className="mt-4 w-full" onSubmit={handleAddTask}>
        <label htmlFor='name'>Task</label>
        <input type='text' placeholder='task' id='name' className='input' ref={taskRef}/>
        <label id='status'>Select Status</label>
        <select id='status' className='input *:text-black' ref={statusRef}>
          {
            cards.map((card)=>{
              return (
                <option key={card.id} value={card.name}>{card.name}</option>
              )
            })
          }
        </select>
        <input type='submit' value="Add Task" className='btn-primary cursor-pointer' />
        <button type='button' className='btn-secondary' onClick={() => { setOpenModel(prev => !prev) }}>Cancel</button>
      </form>
    </Model>
  )
}

export default AddTaskModel