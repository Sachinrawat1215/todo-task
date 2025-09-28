import React from 'react'
import { useTaskContext } from '../context/TaskContext'
import './FilterButtons.css'

const FilterButtons = () => {
  const { selectedFilter, setSelectedFilter } = useTaskContext()
  
  const filters = ['All', 'Pending', 'Completed']

  return (
    <div className="filter-buttons">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => setSelectedFilter(filter)}
          className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons