import React from 'react'

const UndoIcon = ({ size = 18, color = "white" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none"
      style={{ display: 'block' }}
    >
      <path 
        d="M1 4v6h6" 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      <path 
        d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export default UndoIcon