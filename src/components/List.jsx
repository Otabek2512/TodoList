import React from 'react'
import Item from './Item'

const List = (props) => {
    const { todos, completeTodo, deleteTodo } = props
    return (
        <ul className='mt-7 pt-6 border-t border-slate-700'>
            {
                todos.map((todo, index) => {
                    return <Item completeTodo={completeTodo} deleteTodo={deleteTodo} key={todo.id} todo={todo} />
                })
            }
        </ul>
    )
}

export default List