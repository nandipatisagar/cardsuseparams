import React from 'react'
function card({name,description,Image}) {
  return (
   <>
     <div className="border-2 p-4 rounded-lg text-center transition-shadow duration-300 hover:shadow-lg" style={{ borderImage: 'linear-gradient(to right, #FFD700, #FF8C00) 1' }}>
      <img src={Image} alt={name} className="mx-auto mb-4 w-32 h-32 object-cover rounded-md" />
      <h2 className="text-xl font-bold text-purple-300">{name}</h2>
      <p className="text-sm text-purple-400">{description}</p>
    </div>
     </>
  )
}

export default card