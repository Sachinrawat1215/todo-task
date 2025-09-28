import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TaskProvider, useTaskContext } from './context/TaskContext'
import { ThemeProvider } from './context/ThemeContext'
import TaskForm from './components/TaskForm'
import FilterButtons from './components/FilterButtons'
import TaskList from './components/TaskList'
import DeleteConfirmationModal from './components/DeleteConfirmationModal'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

const AppContent = () => {
  const { allTasks, pendingTasks, completedTasks } = useTaskContext()

  return (
    <div className="app" role="application" aria-label="Todo Application">
      <div className="container">
        <header className="app-header" role="banner">
          <div className="header-content">
            <div className="header-text">
              <h1 className="app-title" id="app-title">Todo App</h1>
              <p className="app-subtitle" aria-describedby="app-title">Stay organized and productive</p>
            </div>
            <ThemeToggle />
          </div>
        </header>
        
        <main role="main" aria-labelledby="app-title">
          <section className="controls-card" aria-label="Task management controls">
            <h2 className="sr-only">Add and Filter Tasks</h2>
            <TaskForm />
            <FilterButtons />
          </section>

          <section className="tasks-container" aria-label="Task lists" role="region">
            <h2 className="sr-only">Task Lists</h2>
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
          </section>
        </main>

        <DeleteConfirmationModal />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <DndProvider backend={HTML5Backend}>
        <TaskProvider>
          <AppContent />
        </TaskProvider>
      </DndProvider>
    </ThemeProvider>
  )
}

export default App
