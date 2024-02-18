import React from 'react';
import '../components/todo.css';
import TodoList from '../components/todoList';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, setInputText, updateToDo } from '../features/todo/todoSlice';


const TodoInput = () => {

    const inputText = useSelector(state => state.inputText)
    const isEditing = useSelector(state => state.isEditing)
    const editIndex = useSelector(state => state.editIndex)
    const taskArr = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const addToDoHandler = () => {
        if (inputText) {
            if (taskArr.some(item => item.text.includes(inputText))) {
                alert('Task already exists');
            } else {
                dispatch(addToDo(inputText));
            }
        } else {
            alert('Task cannot be empty')
        }
    }

    const inputTextHandler = (value) => {
        dispatch(setInputText(value))
    }

    const handleUpdate = () => {
        if (inputText) {
            if (taskArr.some(item => item.text.includes(inputText))) {
                alert('Task already exists');
            } else {
                dispatch(updateToDo())
            }
        } else {
            alert('Task cannot be empty')
        }
    }

    return (
        <div>
            <h1 className='todo-heading'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='60px' width='40px'>
                    <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                </svg>
                Welcome to To-do List
            </h1>
            <div>
                <span className='todo-text'>
                    {isEditing ? `Please enter updated value of task no. ${editIndex}` : '\u00A0'}
                </span>
                <div className='input-container-box'>
                    <input
                        className='input-box-todo'
                        placeholder='Add a new task'
                        type='text'
                        value={inputText}
                        onChange={(e) => inputTextHandler(e.target.value)}
                    >
                    </input>
                    {isEditing ?
                        <button
                            className='done-btn'
                            onClick={handleUpdate}
                        >Update
                        </button> :
                        <button
                            className='add-btn'
                            onClick={addToDoHandler}
                        >Add
                        </button>}
                </div>
            </div>
            <TodoList />
        </div>
    )
}

export default TodoInput;