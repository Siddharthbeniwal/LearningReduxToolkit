import React from 'react';
import TodoInput from './todoInput';
import '../components/todo.css'

const TodoWrapper = () => {
  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput/>
      </div>
    </div>
  )
}

export default TodoWrapper;