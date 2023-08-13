import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"

const initialState =  JSON.parse(localStorage.getItem("TO_DO_REDUX"))?.tasks || []

 const sliceTasks = createSlice({
    name: "tasks",
    initialState,
    reducers: {

        createTask(state, action){
            const newTask = {
                id: uuidv4(),
                creationDate: new Date().toLocaleDateString(),
                content: action.payload, 
                isDone: false
            } 

            return [...state, newTask]

        },
        updateIsDone(state, action){
            const id = action.payload.id
            const taskToUpdate = state.find(task => task.id === id)
            const updatedTask = {...taskToUpdate, isDone: !taskToUpdate.isDone}
            return state.map((task) => task.id !== id ? task : updatedTask)

        },

        deleteTask(state, action){
            const id = action.payload.id
            return state.filter(task => task.id !== id)
        }

    }

}) 


export default sliceTasks.reducer
export const { createTask, updateIsDone, deleteTask } = sliceTasks.actions