import React from 'react'

const CheckIcon = ({ size = 18, color = "white" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none"
      style={{ display: 'block' }}
    >
      <polyline 
        points="20,6 9,17 4,12" 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export default CheckIcon