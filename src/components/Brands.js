import React from 'react'
import Brand1 from "../assets/fa-brands-1.png"
import Brand2 from "../assets/fa-brands-2.png"
import Brand3 from "../assets/fa-brands-3.png"
import Brand4 from "../assets/fa-brands-4.png"
import Brand5 from "../assets/fa-brands-5.png"
import Brand6 from "../assets/fa-brands-6.png"

export default function Brands() {
  return (
    <div className='flex justify-center gap-40 mt-40 mb-40'>
        <img src={Brand1}></img>
        <img src={Brand2}></img>
        <img src={Brand3}></img>
        <img src={Brand4}></img>
        <img src={Brand5}></img>
        <img src={Brand6}></img>
    </div>
  )
}
