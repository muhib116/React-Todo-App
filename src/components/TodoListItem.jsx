import React, { useEffect, useState } from 'react'

export default function TodoList({todoItem, todoList, setTodoList})
{
  const [isComplete, setIsComplete] = useState(false)
  const [dropdownBg, setDropdownBg] = useState('bg-gray-100')
  const filterArray = [
    {
      name: 'to do',
      color: 'bg-gray-100',
      selected: true
    }, 
    {
      name: 'in progress',
      color: 'bg-orange-100',
      selected: false
    },
    {
      name: 'test',
      color: 'bg-blue-100',
      selected: false
    },
    {
      name: 'complete',
      color: 'bg-green-100',
      selected: false
    },
    {
      name: 'delete',
      color: 'bg-red-100',
      selected: false
    }
  ]

  useEffect(() => {
    setDropdownBg(filterArray.find((item)=>item.name === todoItem.status)?.color)
  }, [todoItem])
  

  const handleDropdown = (e) => 
  {
    const target = e.target
    filterArray.forEach(item=>{
      if(item.name === target.value){
        setDropdownBg(item.color)
      }
    })
    
    // work with is complete
    setIsComplete(target.value === 'complete')

    // work with delete
    if(target.value === 'delete'){
      const filteredArray = todoList.filter(item=>item.text !== todoItem.text)
      setTodoList(filteredArray)
    }

    // work with bg color
    todoList.forEach((item)=>{
      if(item.text === todoItem.text){
        todoItem.bg = filterArray.find(x=>x.name===target.value).color
      }
    })

    todoItem.status = target.value
  }

  return (
    <div className={['flex gap-2 py-2 px-3 border border-b-0', dropdownBg, isComplete&&'line-through'].join(' ')}>
      <p className='truncate'>{todoItem.text}</p>
      <select onChange={handleDropdown} className='text-xs outline-none text-center ml-auto bg-transparent text-right'>
        {filterArray.map((item, index)=>(
          <option value={item.name} key={index}>{item.name.toUpperCase()}</option>
        ))}
      </select>
    </div>
  )
}
