import React, {useState} from 'react'
import { ADD_NEW_TODO, FILTER_TODOS } from './reducers/reducer'

export default function Form (props) {

    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {

        const newTodoObject = {
            item: input,
            completed: false,
            id: new Date()
        }

        e.preventDefault()
        props.dispatch({type: ADD_NEW_TODO, payload: newTodoObject})
        setInput('')
    }

    

    const clearCompleted = (e) => {

        e.preventDefault()
        props.dispatch({type: FILTER_TODOS})
        
      }


        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='newTodo'
                        value={input}
                        onChange={handleChange}
                        placeholder='What do you need to do?'

                    ></input>
                    <div className='buttons'><button type='submit'>Submit</button>
                    <button onClick={clearCompleted}>Clear Completed</button></div>
                </form>
            </div>
        )

}