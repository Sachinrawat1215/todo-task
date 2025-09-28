import React from 'react'
import { useDrop } from 'react-dnd'
import { useTaskContext } from '../context/TaskContext'
import TaskItem from './TaskItem'
import './TaskList.css'

const TaskList = ({ title, tasks, showStatus = true, emptyMessage }) => {
  const { moveTask } = useTaskContext()

  // Determine target status based on title
  const getTargetStatus = (title) => {
    if (title.includes('Pending')) return 'Pending'
    if (title.includes('Completed')) return 'Completed'
    return 'Pending' // Default for "All Tasks"
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
    >
      <h2 className="task-list-title">
        {title} ({tasks.length})
      </h2>
      <div className="task-list">
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            showStatus={showStatus}
          />
        ))}
        {tasks.length === 0 && (
          <p className="empty-message">{emptyMessage}</p>
        )}
      </div>
    </div>
  )
}

export default TaskList