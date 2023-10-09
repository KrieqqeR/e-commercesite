import React from 'react'
import data from "../data/Data"

export default function ProductListPageCards() {
    return (
        <div className='w-[70rem] mobile:w-[20rem] flex flex-wrap mobile:flex-col mx-auto gap-8'>
            {data.ProductListPageCards.map((eleman, index) => (
                <div key={index} className='cursor-pointer' >
                    <img src={eleman.resim} alt='Product' className='mt-10 mobile:ml-16' />
                    <h2 className='text-[#252B42]  mt-4 text-center text-[1.1rem] font-bold'>{eleman.yazı}</h2>
                    <h4 className='mt-4 text-center text-[#737373] text-[0.875] font-bold'>{eleman.yazı2}</h4>
                    <p className='mt-4 text-center text-[#BDBDBD] text-[1rem] font-bold'>{eleman.fiyat} <span className="text-[#23856D] ml-2">{eleman.fiyat2}</span></p>
                    <div className='flex mobile:ml-36 w-4 h-4 ml-20 mt-4 gap-1'>
                        <img src={eleman.black} />
                        <img src={eleman.blue} />
                        <img src={eleman.green} />
                        <img src={eleman.orange} />
                    </div>
                </div>
            ))}

            {/* Page değiştirme yerleri. */}
            <div className='flex mobile:ml-10 flex-wrap mx-auto mt-10'>
                <div className='flex mobile:flex-col  flex-wrap w-[20rem] h-[4.5rem] justify-between border'>
                    <button className='text-[#BDBDBD] bg-[#F3F3F3] p-[1.56rem] font-semibold'>
                        First
                    </button>
                    <button className='text-[#23A6F0] bg-[#FFFFFF] hover:bg-[#23A6F0] hover:text-[#FFFFFF] px-[1.25rem] py-[1.56rem] font-semibold'>
                        1
                    </button>
                    <button className='text-[#23A6F0] bg-[#FFFFFF] hover:bg-[#23A6F0] hover:text-[#FFFFFF]  px-[1.25rem] py-[1.56rem] font-semibold'>
                        2
                    </button>
                    <button className='text-[#23A6F0] bg-[#FFFFFF] hover:bg-[#23A6F0] hover:text-[#FFFFFF]  px-[1.25rem] py-[1.56rem] font-semibold'>
                        3
                    </button>
                    <button  className='text-[#BDBDBD] bg-[#F3F3F3] p-[1.56rem] font-semibold'>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
