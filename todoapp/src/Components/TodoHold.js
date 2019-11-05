import React from 'react';
import Todo from "./Todo";

function Reducer(state, action){
    switch(action.type){
        case "ADD":
            return [state, action.payload]
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
    const [input, setInput] = React.useState("default")

  const handleType = (e) =>{
        setInput(e.target.value)
    }
    return(
        <div>
            <form>
                <label>Type here scrub:</label>
                <input type="text" value={input} onChange = {handleType} name="todo"/>
            </form>
            {state.map((t)=>(
                <Todo todo={t.todo}/>
            ))}
        </div>
    );
}

export default TodoHold;