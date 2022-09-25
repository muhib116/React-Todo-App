import React, { useState } from 'react'

export default function AddTodo({todoList, setTodoList})
{
  const [TodoText, setTodoText] = useState('')
  const handleInput = (e)=>{
    const target = e.target
    setTodoText(target.value)
  }
  const addToTodoList = ()=>{
    setTodoList([TodoText, ...todoList])
    setTodoText('')
  }

  return (
    <div className='flex gap-2 border'>
      <input onInput={handleInput} type="text" value={TodoText} className='w-full block outline-none px-4' placeholder='Write...'/>
      <button onClick={addToTodoList} className='bg-blue-600 text-white px-4 py-1'>Add</button>
    </div>
  )
}
