import React from 'react';
import Todo from "./Todo";

function Reducer(state, action){
    switch(action.type){
        case "ADD":
            return [...state, action.payload]
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
        dispatch({type:"ADD", payload:{todo: input, id: Date.now(), done:false }})
    }

    const toggle = (id)=>{
        state.map((todo)=>{
            if(todo.id === id){
                todo.done = !todo.done;
            }
        })
        console.log(state);
    }
    return(
        <div>
            <form>
                <label>Type here scrub:</label>
                <input type="text" value={input} onChange = {handleType} name="todo"/>
                <button onClick = {addTodo}>You know what to do </button>
            </form>
            {state.map((t)=>(
                <Todo todo={t.todo} id={t.id} toggle = {toggle}/>
            ))}
        </div>
    );
}

export default TodoHold;