import React, { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TaskContext = createContext()

export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider')
  }
  return context
}

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('todoTasks', [])
  const [selectedFilter, setSelectedFilter] = useLocalStorage('todoSelectedFilter', 'All')
  
  const [inputValue, setInputValue] = useState('')
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [taskToDelete, setTaskToDelete] = useState(null)

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

  const toggleTaskStatus = (taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId 
          ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' }
          : task
      )
    )
  }

  const showDeleteConfirmation = (taskId, taskText) => {
    setTaskToDelete({ id: taskId, text: taskText })
    setShowDeleteConfirm(true)
  }

  const confirmDeleteTask = () => {
    if (taskToDelete) {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskToDelete.id))
    }
    setShowDeleteConfirm(false)
    setTaskToDelete(null)
  }

  const cancelDeleteTask = () => {
    setShowDeleteConfirm(false)
    setTaskToDelete(null)
  }

  const moveTask = (draggedTaskId, targetStatus, targetIndex = null) => {
    setTasks(prevTasks => {
      const draggedTask = prevTasks.find(task => task.id === draggedTaskId)
      if (!draggedTask) return prevTasks

      const tasksWithoutDragged = prevTasks.filter(task => task.id !== draggedTaskId)
      const updatedTask = { ...draggedTask, status: targetStatus }
      
      if (targetIndex !== null) {
        const targetSectionTasks = tasksWithoutDragged.filter(task => task.status === targetStatus)
        const otherTasks = tasksWithoutDragged.filter(task => task.status !== targetStatus)
        
        targetSectionTasks.splice(targetIndex, 0, updatedTask)
        
        return [...otherTasks, ...targetSectionTasks]
      } else {
        return [...tasksWithoutDragged, updatedTask]
      }
    })
  }

  const getFilteredTasks = (status) => {
    return tasks.filter(task => task.status === status)
  }

  const allTasks = tasks
  const pendingTasks = getFilteredTasks('Pending')
  const completedTasks = getFilteredTasks('Completed')

  const contextValue = {
    tasks,
    inputValue,
    selectedFilter,
    showDeleteConfirm,
    taskToDelete,
    allTasks,
    pendingTasks,
    completedTasks,
    setInputValue,
    setSelectedFilter,
    addTask,
    toggleTaskStatus,
    showDeleteConfirmation,
    confirmDeleteTask,
    cancelDeleteTask,
    moveTask,
    getFilteredTasks
  }

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext