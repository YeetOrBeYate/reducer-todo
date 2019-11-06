import React from 'react';
import Todo from "./Todo";

function Reducer(state, action){
    switch(action.type){
        case "ADD":
            return [...state, action.payload];
        case "TOGGLE":
            return state.map((todo)=>{
                if(todo.id === action.payload){
                  return  {...todo, done : !todo.done}
                }else{
                    return todo;
                }
            });
        case "CLEAR":
            return state.filter((todo)=>{
                if(!todo.done){
                    return todo;
                }
            })
    }
}

const initialState = [
    {
        todo:"Clean Bathroom",
        id:1,
        done:false
    }
]

const TodoHold = () =>{
    const [state, dispatch] = React.useReducer(Reducer, initialState);
    const [input, setInput] = React.useState("")


    const handleType = (e) =>{
        setInput(e.target.value)
    }

    const addTodo = (e)=>{
        e.preventDefault();
        let yeet ={
            todo: input,
            id: Date.now(),
            done:false
        }
        dispatch({type:"ADD", payload:yeet})
    }

    const clearTodo = (e)=>{
        e.preventDefault();
        dispatch({type:"CLEAR"})
    }

    const toggle = (id)=>{
        dispatch({type:"TOGGLE", payload:id})
        
    }
    return(
        <div>
            <form>
                <label>Type here scrub:</label>
                <input type="text" value={input} onChange = {handleType} name="todo"/>
                <button onClick = {addTodo}>You know what to do </button>
            </form>
            {state.map((t)=>(
                <Todo todo={t.todo} id={t.id} toggle = {toggle} status = {t.done}/>
            ))}
            <button onClick={clearTodo}>Clear Completed</button>
        </div>
    );
}

export default TodoHold;