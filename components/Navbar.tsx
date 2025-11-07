import React from 'react'

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">
        Studious
    </div>
      <div className="space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
        <a href="#" className="hover:underline">Login</a>
      </div>
    </div>
  )
}

export default Navbar