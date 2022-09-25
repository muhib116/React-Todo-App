import React from 'react'

export default function FilterTodo()
{
    const filterArray = ['to do', 'all', 'compete', 'test', 'in progress']
    return (
        <div className='flex gap-2'>
            <select className='border px-4 py-1 outline-none text-xs'>
                {filterArray.map((item, index)=>(
                    <option value={item} key={index}>
                        {item.toUpperCase()}
                    </option>
                ))}
            </select>
            <input type="search" placeholder='Search Item...' className='border px-4 py-1 outline-none w-full block' />
        </div>
    )
}
