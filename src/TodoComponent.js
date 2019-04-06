import React from 'react'

function TodoComponent(props){
    const pStyle ={}
    if(props.item.completed){
        pStyle.color = '#bbb';
        pStyle.textDecoration = 'line-through';
        pStyle.fontStyle = 'italic'
    }
    return (
        <div className='todo-item'>
            <input 
                type='checkbox' 
                checked={props.item.completed}
                onClick={() => props.handleChange(props.item.id)}
        />
            <p style={pStyle}>{props.item.text}</p>
        </div>
    )
}

export default TodoComponent