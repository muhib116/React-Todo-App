import React, { useState } from 'react'

export default function TodoList({text})
{
  const [dropdownBg, setDropdownBg] = useState('bg-gray-200')
  const filterArray = [
    {
      name: 'to do',
      color: 'bg-grey-100',
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
      name: 'compete',
      color: 'bg-green-100',
      selected: false
    },
    {
      name: 'delete',
      color: 'bg-red-100',
      selected: false
    }
  ]

  const handleDropdown = (e) => {
    const target = e.target
    filterArray.forEach(item=>{
      if(item.name === target.value){
        setDropdownBg(item.color)
      }
    })
  }

  return (
    <div className='flex gap-2 py-2 px-3 border border-b-0'>
      <p className='truncate'>{text}</p>
      <select onChange={handleDropdown} className={[dropdownBg, 'text-xs', 'outline-none', 'text-center', 'ml-auto'].join(' ')}>
        {filterArray.map((item, index)=>(
          <option value={item.name} key={index}>{item.name.toUpperCase()}</option>
        ))}
      </select>
    </div>
  )
}
