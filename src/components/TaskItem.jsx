import React from 'react'
import { useTaskContext } from '../context/TaskContext'
import CheckIcon from '../icons/CheckIcon'
import UndoIcon from '../icons/UndoIcon'
import DeleteIcon from '../icons/DeleteIcon'
import './TaskItem.css'

const TaskItem = ({ task, showStatus = true }) => {
  const { toggleTaskStatus, showDeleteConfirmation } = useTaskContext()

  return (
    <div className={`task-item ${task.status.toLowerCase()}`}>
      <div className="task-content">
        <span className="task-text">{task.text}</span>
        {showStatus && (
          <span className={`task-status ${task.status.toLowerCase()}`}>
            {task.status}
          </span>
        )}
      </div>
      <div className="task-actions">
        <button 
          onClick={() => toggleTaskStatus(task.id)}
          className="toggle-btn"
          title={task.status === 'Pending' ? 'Mark as completed' : 'Mark as pending'}
        >
          {task.status === 'Pending' ? <CheckIcon color="white" /> : <UndoIcon color="white" />}
        </button>
        <button 
          onClick={() => showDeleteConfirmation(task.id, task.text)}
          className="delete-btn"
          title="Delete task"
        >
          <DeleteIcon color="black" />
        </button>
      </div>
    </div>
  )
}

export default TaskItem