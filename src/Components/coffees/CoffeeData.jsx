import React from 'react'

function CoffeeData({data}) {
    const [img,title,calories] = data
  return (
    <div>
         <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{calories}</p>
    </div>
  )
}

export default CoffeeData