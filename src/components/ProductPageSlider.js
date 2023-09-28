import React from 'react'
import data from '../data/Data'

export default function ProductPageSlider() {
    return (
        <div className='w-[70rem] mx-auto my-20'>
            {/* Sol Kısım */}
            <div>
                {data.productPage.map((product, index) => (
                    <div key={index}>
                        <img src={product.sarıKoltukBuyuk} />
                        <div className='flex gap-6 my-6'>
                            <img src={product.KahvarengiKoltukKucuk} />
                            <img src={product.sarıKoltukKucuk} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
