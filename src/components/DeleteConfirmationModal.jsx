import React from 'react'
import { useTaskContext } from '../context/TaskContext'
import './DeleteConfirmationModal.css'

const DeleteConfirmationModal = () => {
  const { 
    showDeleteConfirm, 
    taskToDelete, 
    confirmDeleteTask, 
    cancelDeleteTask 
  } = useTaskContext()

  if (!showDeleteConfirm) return null

  return (
    <div className="modal-overlay">
      <div className="confirmation-modal">
        <div className="modal-header">
          <h3>Confirm Delete</h3>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to delete this task?</p>
          <div className="task-preview">
            "{taskToDelete?.text}"
          </div>
        </div>
        <div className="modal-actions">
          <button 
            onClick={cancelDeleteTask}
            className="cancel-btn"
          >
            Cancel
          </button>
          <button 
            onClick={confirmDeleteTask}
            className="confirm-delete-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmationModal