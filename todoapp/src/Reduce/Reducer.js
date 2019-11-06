import React from 'react';

export function Reducer(state, action){
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

export const InitialState = [
    {
        todo:"Clean Bathroom",
        id:1,
        done:false
    }
]