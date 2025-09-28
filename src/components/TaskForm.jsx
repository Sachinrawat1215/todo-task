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
    <form 
      className="task-form" 
      onSubmit={(e) => { e.preventDefault(); addTask(); }}
      role="form"
      aria-label="Add new task"
    >
      <label htmlFor="task-input" className="sr-only">
        Enter a new task
      </label>
      <input
        id="task-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task..."
        className="task-input"
        aria-label="Task description"
        aria-describedby="task-input-help"
        required
        maxLength={500}
      />
      <div id="task-input-help" className="sr-only">
        Enter a task description and press Enter or click Add Task to create a new task
      </div>
      <button 
        type="submit"
        onClick={addTask} 
        className="add-btn"
        aria-label="Add new task"
        disabled={!inputValue.trim()}
      >
        Add Task
      </button>
    </form>
  )
}

export default TaskForm