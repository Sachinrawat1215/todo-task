import React from 'react'
import { useTaskContext } from '../context/TaskContext'
import './FilterButtons.css'

const FilterButtons = () => {
  const { selectedFilter, setSelectedFilter } = useTaskContext()
  
  const filters = ['All', 'Pending', 'Completed']

  return (
    <div 
      className="filter-buttons" 
      role="group" 
      aria-label="Filter tasks by status"
    >
      <span className="sr-only">Filter tasks:</span>
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => setSelectedFilter(filter)}
          className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
          aria-pressed={selectedFilter === filter}
          aria-label={`Show ${filter.toLowerCase()} tasks`}
          type="button"
          role="tab"
          aria-selected={selectedFilter === filter}
          tabIndex={selectedFilter === filter ? 0 : -1}
        >
          {filter}
          {selectedFilter === filter && (
            <span className="sr-only"> (currently selected)</span>
          )}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons