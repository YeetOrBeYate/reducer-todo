import React from "react";

 const Todo = (props)=>{

    const toggle = props.toggle;
    const status = props.status;
    return(
        <div>
            <p onClick={()=>toggle(props.id)} style={status ? {textDecoration: "line-through"}: {textDecoration: "none"}}>{props.todo}</p>
        </div>
    );
}

export default Todo;