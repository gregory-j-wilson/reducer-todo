import React from 'react'
import { TOGGLE_TODO } from './reducers/reducer'


function List (props) {


    return (
        <div className='list'>
            {props.todoList.map(todoitem => {
                return <p className={`item ${todoitem.completed ? 'completed' : ''}`}    onClick={(e) => {

                    props.dispatch({type: TOGGLE_TODO, payload: todoitem })

                }}>{todoitem.item}</p>
            })}
            <p className='notice'>Click an item to strike-through when completed</p>
        </div>

    )
}

export default List