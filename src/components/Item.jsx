import React from 'react'

function Item(props) {
    const { todo, completeTodo, deleteTodo } = props
    return (
        <li className='w-full p-2 bg-white/5 mb-2 flex justify-between rounded-md shadow-md  '>
            <div>
                <input checked={todo.isCompleted} type="checkbox" onChange={() => completeTodo(todo.id)} />
                <span className='text-white ml-2'>{todo.title}</span>
            </div>
            <button onClick={() => deleteTodo(todo.id)} className='rounded-sm px-2 py-1 bg-red-400 text-white transition-all hover:bg-red-300 active:scale-95 text-xs'>Delete</button>
        </li>
    )
}

export default Item