import { createSlice } from "@reduxjs/toolkit";

// declaring initialState for store
const initialState = {
    inputText: '',
    todos: [],
    isEditing: false,
    editIndex: ''
}

// slice is similar to reducer

export const todoSlice = createSlice({
    name: 'ToDo',
    initialState,
    reducers: {
        // reducers consists of properties and functions

        // these properties will always have access of state and action
        setInputText: (state, action) => {
            state.inputText = action.payload
        },

        addToDo: (state, action) => {
            const newTodo = {
                id: state.todos.length + 1,
                text: action.payload
            }
            state.todos.push(newTodo)
            state.inputText = ''
        },

        removeToDo: (state, action) => {
            if (action.payload === 'all') {
                state.todos = []
            } else {
                state.todos = state.todos.filter((item) => item.id !== action.payload)
            }
            state.isEditing = false;
            state.inputText = ''
        },

        editToDo: (state, action) => {
            state.isEditing = true;

            state.todos.map((item) => {
                if (item.id === action.payload) {
                    state.inputText = item.text
                    state.editIndex = item.id
                    return;
                }
            })
        },

        updateToDo: (state, action) => {
            state.todos.map((item) => {
                if (item.id === state.editIndex) {
                    item.text = state.inputText
                    return;
                }
            })
            state.isEditing = false;
            state.inputText = ''
        }

    }
})


// We must export individual reducers like this so that we can use it in our components
export const { setInputText, addToDo, removeToDo, editToDo, updateToDo } = todoSlice.actions;


// export reducer so that store gets knowledge of it
export default todoSlice.reducer
//as we using default export here, we can import it with any name in other files