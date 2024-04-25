import React from 'react'

const AddTaskModel = ({}) => {
  return (
    <div className='max-w-[25rem] bg-main fixed top-2 right-5 py-4 px-5'>
      <h4 className='text-slate-200 text-2xl text-center'>Add Task</h4>
      <form className="mt-4 w-full">
        <label htmlFor='name'>Task</label>
        <input type='text' placeholder='task' id='name' className='input' />
        <label id='status'>Select Status</label>
        <select id='status' className='input *:text-black'>
          <option value="todo">Todo</option>
          <option>Doing</option>
          <option>Done</option>
        </select>
        <input type='submit' value="Add Task" className='btn-primary cursor-pointer'/>
        <button className='btn-secondary'>Cancel</button>
      </form>
    </div>
  )
}

export default AddTaskModel