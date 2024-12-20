import React from 'react'

const Button = ({ children, variant = 'primary', onClick }) => {
  return (
    // <button className="bg-purple-500 min-w-20 min-h-10 rounded px-4">
    // variant === 'primary' ? 'yes' : 'no'
    <button 
      className = { 
        variant === 'primary' 
        ? 'bg-purple-500 min-w-20 min-h-10 rounded px-4' 
        : 'bg-green-500 min-w-20 min-h-10 rounded px-4' 
      }
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default Button
