import React from 'react';
import Todo from "./Todo";
import {Reducer} from "../Reduce/Reducer"
import {InitialState} from "../Reduce/Reducer"


const TodoHold = () =>{
    const [state, dispatch] = React.useReducer(Reducer, InitialState);
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
        setInput("")
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