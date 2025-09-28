import React from 'react'
import TaskItem from './TaskItem'
import './TaskList.css'

const TaskList = ({ title, tasks, showStatus = true, emptyMessage }) => {
  return (
    <div className="task-list-container">
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