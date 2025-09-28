import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TaskProvider, useTaskContext } from './context/TaskContext'
import TaskForm from './components/TaskForm'
import FilterButtons from './components/FilterButtons'
import TaskList from './components/TaskList'
import DeleteConfirmationModal from './components/DeleteConfirmationModal'
import './App.css'

const AppContent = () => {
  const { allTasks, pendingTasks, completedTasks } = useTaskContext()

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">Todo App</h1>
          <p className="app-subtitle">Stay organized and productive</p>
        </header>
        
        <div className="controls-card">
          <TaskForm />
          <FilterButtons />
        </div>

        <div className="tasks-container">
          <TaskList 
            title="All Tasks"
            tasks={allTasks}
            showStatus={true}
            emptyMessage="No tasks yet. Add one above!"
          />
          
          <TaskList 
            title="Pending Tasks"
            tasks={pendingTasks}
            showStatus={false}
            emptyMessage="No pending tasks!"
          />
          
          <TaskList 
            title="Completed Tasks"
            tasks={completedTasks}
            showStatus={false}
            emptyMessage="No completed tasks yet!"
          />
        </div>

        <DeleteConfirmationModal />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TaskProvider>
        <AppContent />
      </TaskProvider>
    </DndProvider>
  )
}

export default App
