import React from 'react'

const DeleteIcon = ({ size = 18, color = "white" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none"
      style={{ display: 'block' }}
    >
      <polyline 
        points="3,6 5,6 21,6" 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      <path 
        d="M19,6 L19,20 C19,21 18,22 17,22 L7,22 C6,22 5,21 5,20 L5,6 M8,6 L8,4 C8,3 9,2 10,2 L14,2 C15,2 16,3 16,4 L16,6" 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      <line 
        x1="10" y1="11" x2="10" y2="17" 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round"
      />
      <line 
        x1="14" y1="11" x2="14" y2="17" 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round"
      />
    </svg>
  )
}

export default DeleteIcon