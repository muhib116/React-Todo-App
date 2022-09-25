import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import FilterTodo from './components/FilterTodo'
import TodoListItem from './components/TodoListItem'

export default function App()
{
  const [todoList, setTodoList] = useState([])
  return (
    <div className='grid gap-4 py-10' style={{maxWidth: '500px', margin: 'auto'}}>
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
      <FilterTodo />
      <div className='border-b overflow-y-auto' style={{maxHeight: '500px'}}>
        {todoList.map((item, index)=>(
          <TodoListItem todoItem={item} key={Math.random()*1000000} todoList={todoList} setTodoList={setTodoList}/>
        ))}
      </div>
    </div>
  )
}