import React from "react";

 const Todo = (props)=>{

    const toggle = props.toggle;

    return(
        <div>
            <p onClick={()=>toggle(props.id)}>{props.todo}</p>
        </div>
    );
}

export default Todo;