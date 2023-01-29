import React, { useState } from 'react'
import Form from './components/Form'
import List from './components/List'

const App = () => {
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    const todo = {
      id: Date.now(),
      isCompleted: false,
      title
    }
    setTodos([...todos, todo])
  }

  function completeTodo(id) {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo
    }))
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => {
      if (todo.id !== id) {
        return todo
      }
    }))
  }

  return (
    <div className='h-screen bg-slate-900'>
      <div className='w-2/3 mx-auto pt-[15vh]'>
        <h1 className='text-4xl text-center text-white py-10 mb-4'>Todo List</h1>
        <Form addTodo={addTodo} />
        <List completeTodo={completeTodo} deleteTodo={deleteTodo} todos={todos} />
      </div>
    </div>
  )
}

export default App