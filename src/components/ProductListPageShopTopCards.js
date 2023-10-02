import React from 'react'
import data from '../data/Data'

export default function ProductListPageShopTopCards() {
  return (
    <div className='w-[70rem] mx-auto flex mt-8 gap-4'>
        {data.ProductListPageShop.map((eleman,index)=>(
            <div key={index} className='w-[12rem] h-[13rem] relative'>
                <img src={eleman.resim} alt='resim' />
                <h1 className='absolute top-20 left-20 text-[#FFFFFF] font-bold'>{eleman.title}</h1>
                <h1 className='absolute top-28 left-20 text-[#FFFFFF] font-semibold'>{eleman.unit}</h1>
            </div>
        ))}
    </div>
  )
}
