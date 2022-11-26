
import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
    name: "tasks", // --Имя среза. Используется для пространства имен сгенерированных типов действий.
    initialState:[], //-- Начальное состояние, которое следует использовать при первом вызове редюсера.
    //--Это будет использоваться всякий раз, когда редюсер вызывается с неопределенным значением состояния, 
    //и в первую очередь полезен для таких случаев, как чтение начального состояния из localStorage.
    reducers:{
        addTask:(state, action)=>{
            const newTask ={
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask);
        },
        deleteTask: (state, action)=>{
            return  state.filter((item)=> item.id !== action.payload.id);
        }
       
    }
});
export const {addTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;