import React from 'react'

const Card = ({ children }) => {
  return (
    <div style={{border:"1px solid #eee", padding:"10px"}}>
      {children}
    </div>
  )
}

export default Card
