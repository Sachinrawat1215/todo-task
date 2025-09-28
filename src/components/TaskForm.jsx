import React from 'react'
import { useTaskContext } from '../context/TaskContext'
import './TaskForm.css'

const TaskForm = () => {
  const { inputValue, setInputValue, addTask } = useTaskContext()

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  return (
    <div className="task-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task..."
        className="task-input"
      />
      <button onClick={addTask} className="add-btn">
        Add Task
      </button>
    </div>
  )
}

export default TaskForm