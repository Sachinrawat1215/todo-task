import React from 'react'
import { useDrop } from 'react-dnd'
import { useTaskContext } from '../context/TaskContext'
import TaskItem from './TaskItem'
import './TaskList.css'

const TaskList = ({ title, tasks, showStatus = true, emptyMessage }) => {
  const { moveTask } = useTaskContext()

  const getTargetStatus = (title) => {
    if (title.includes('Pending')) return 'Pending'
    if (title.includes('Completed')) return 'Completed'
    return 'Pending'
  }

  const targetStatus = getTargetStatus(title)

  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      if (item.status !== targetStatus) {
        moveTask(item.id, targetStatus)
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  return (
    <div 
      ref={drop}
      className={`task-list-container ${isOver ? 'drop-zone-active' : ''}`}
      role="region"
      aria-labelledby={`task-list-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
      aria-describedby={`task-list-desc-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <h3 
        className="task-list-title"
        id={`task-list-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        {title} ({tasks.length})
      </h3>
      <div 
        id={`task-list-desc-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="sr-only"
      >
        {isOver ? `Drop zone active for ${title.toLowerCase()}` : `List of ${tasks.length} ${title.toLowerCase()}`}
      </div>
      <ul 
        className="task-list"
        role="list"
        aria-label={`${title} containing ${tasks.length} tasks`}
      >
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            showStatus={showStatus}
          />
        ))}
        {tasks.length === 0 && (
          <li role="listitem">
            <p className="empty-message" aria-live="polite">
              {emptyMessage}
            </p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default TaskList