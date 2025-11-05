import React, { useState } from 'react'

const TodoList = () => {

    const [tasks, setTasks] = useState([])

    const [taskInput, setTaskInput] = useState("")

    const addTask = (e) => {
        e.preventDefault()
        setTasks([...tasks, taskInput])
        setTaskInput("")
    }
  return (
    <div>
        <h1>todoList</h1>

        {tasks.map(task => (
            <p key={Math.random()}>{task}</p>
        ))}

        <form>
            <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)}/>
            <button onClick={addTask}>add task</button>
        </form>
    </div>
  )
}

export default TodoList