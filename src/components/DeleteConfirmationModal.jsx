import React, { useEffect, useRef } from 'react'
import { useTaskContext } from '../context/TaskContext'
import './DeleteConfirmationModal.css'

const DeleteConfirmationModal = () => {
  const { 
    showDeleteConfirm, 
    taskToDelete, 
    confirmDeleteTask, 
    cancelDeleteTask 
  } = useTaskContext()

  const modalRef = useRef(null)
  const cancelButtonRef = useRef(null)

  useEffect(() => {
    if (showDeleteConfirm && cancelButtonRef.current) {
      cancelButtonRef.current.focus()
    }
  }, [showDeleteConfirm])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        cancelDeleteTask()
      }
    }

    if (showDeleteConfirm) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [showDeleteConfirm, cancelDeleteTask])

  if (!showDeleteConfirm) return null

  return (
    <div 
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          cancelDeleteTask()
        }
      }}
    >
      <div className="confirmation-modal" ref={modalRef}>
        <div className="modal-header">
          <h3 id="modal-title">Confirm Delete</h3>
        </div>
        <div className="modal-body">
          <p id="modal-description">Are you sure you want to delete this task?</p>
          <div className="task-preview" aria-label={`Task to delete: ${taskToDelete?.text}`}>
            "{taskToDelete?.text}"
          </div>
        </div>
        <div className="modal-actions" role="group" aria-label="Confirmation actions">
          <button 
            ref={cancelButtonRef}
            onClick={cancelDeleteTask}
            className="cancel-btn"
            type="button"
            aria-label="Cancel deletion and close dialog"
          >
            Cancel
          </button>
          <button 
            onClick={confirmDeleteTask}
            className="confirm-delete-btn"
            type="button"
            aria-label={`Confirm deletion of task: ${taskToDelete?.text}`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmationModal