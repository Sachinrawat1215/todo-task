import React from 'react'
import { useDrag } from 'react-dnd'
import { useTaskContext } from '../context/TaskContext'
import { useTheme } from '../context/ThemeContext'
import CheckIcon from '../icons/CheckIcon'
import UndoIcon from '../icons/UndoIcon'
import DeleteIcon from '../icons/DeleteIcon'
import './TaskItem.css'

const TaskItem = ({ task, showStatus = true }) => {
  const { toggleTaskStatus, showDeleteConfirmation } = useTaskContext()
  const { isLight } = useTheme()

  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <div 
      ref={drag}
      className={`task-item ${task.status.toLowerCase()} ${isDragging ? 'dragging' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      role="listitem"
      aria-label={`Task: ${task.text}. Status: ${task.status}. Draggable.`}
      tabIndex={0}
    >
      <div className="task-content">
        <span className="task-text" id={`task-text-${task.id}`}>
          {task.text}
        </span>
        {showStatus && (
          <span 
            className={`task-status ${task.status.toLowerCase()}`}
            aria-label={`Status: ${task.status}`}
            role="status"
          >
            {task.status}
          </span>
        )}
      </div>
      <div className="task-actions" role="group" aria-label="Task actions">
        <button 
          onClick={() => toggleTaskStatus(task.id)}
          className="toggle-btn"
          title={task.status === 'Pending' ? 'Mark as completed' : 'Mark as pending'}
          aria-label={`${task.status === 'Pending' ? 'Mark as completed' : 'Mark as pending'}: ${task.text}`}
          aria-describedby={`task-text-${task.id}`}
          type="button"
        >
          <span aria-hidden="true">
            {task.status === 'Pending' ? <CheckIcon color="white" /> : <UndoIcon color="white" />}
          </span>
          <span className="sr-only">
            {task.status === 'Pending' ? 'Complete task' : 'Mark as pending'}
          </span>
        </button>
        <button 
          onClick={() => showDeleteConfirmation(task.id, task.text)}
          className="delete-btn"
          title="Delete task"
          aria-label={`Delete task: ${task.text}`}
          aria-describedby={`task-text-${task.id}`}
          type="button"
        >
          <span aria-hidden="true">
            <DeleteIcon color={isLight ? "black" : "white"} />
          </span>
          <span className="sr-only">
            Delete task
          </span>
        </button>
      </div>
    </div>
  )
}

export default TaskItem