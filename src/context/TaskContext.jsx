import React, { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

// Create the context
const TaskContext = createContext()

// Custom hook to use the TaskContext
export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider')
  }
  return context
}

// TaskProvider component
export const TaskProvider = ({ children }) => {
  // Use custom hook for localStorage management
  const [tasks, setTasks] = useLocalStorage('todoTasks', [])
  const [selectedFilter, setSelectedFilter] = useLocalStorage('todoSelectedFilter', 'All')
  
  // Local state for UI interactions
  const [inputValue, setInputValue] = useState('')
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [taskToDelete, setTaskToDelete] = useState(null)

  // Add a new task based on the selected filter
  const addTask = () => {
    if (inputValue.trim() === '') return

    const newTask = {
      id: Date.now(),
      text: inputValue,
      status: selectedFilter === 'All' ? 'Pending' : selectedFilter
    }

    setTasks(prevTasks => [...prevTasks, newTask])
    setInputValue('')
  }

  // Toggle task status between Pending and Completed
  const toggleTaskStatus = (taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId 
          ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' }
          : task
      )
    )
  }

  // Show delete confirmation popup
  const showDeleteConfirmation = (taskId, taskText) => {
    setTaskToDelete({ id: taskId, text: taskText })
    setShowDeleteConfirm(true)
  }

  // Confirm delete task
  const confirmDeleteTask = () => {
    if (taskToDelete) {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskToDelete.id))
    }
    setShowDeleteConfirm(false)
    setTaskToDelete(null)
  }

  // Cancel delete task
  const cancelDeleteTask = () => {
    setShowDeleteConfirm(false)
    setTaskToDelete(null)
  }

  // Filter tasks based on status
  const getFilteredTasks = (status) => {
    return tasks.filter(task => task.status === status)
  }

  // Computed values
  const allTasks = tasks
  const pendingTasks = getFilteredTasks('Pending')
  const completedTasks = getFilteredTasks('Completed')

  // Context value
  const contextValue = {
    // State
    tasks,
    inputValue,
    selectedFilter,
    showDeleteConfirm,
    taskToDelete,
    
    // Computed values
    allTasks,
    pendingTasks,
    completedTasks,
    
    // Actions
    setInputValue,
    setSelectedFilter,
    addTask,
    toggleTaskStatus,
    showDeleteConfirmation,
    confirmDeleteTask,
    cancelDeleteTask,
    getFilteredTasks
  }

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext