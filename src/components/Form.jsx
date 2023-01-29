import React, { useState } from 'react'

const Form = (props) => {
    const { addTodo } = props
    const [value, setValue] = useState('')

    function onSubmit(event) {
        event.preventDefault()
        if (value !== '' && !!value.trim()) {
            addTodo(value)
        }
        setValue('')
    }

    return (
        <form onSubmit={onSubmit} className='w-full flex p-2 bg-white/10 rounded-md' >
            <input value={value} onChange={(event) => setValue(event.target.value)} type="text" className='w-full bg-transparent outline-none text-white' placeholder='Todo title' />
            <button className='p-2 py-1 bg-blue-400 text-white rounded-sm hover:bg-blue-300 transition-all active:scale-95 '>Add</button>
        </form >
    )
}

export default Form