import React from 'react'
import WeLoveWhatWeDo1 from "../assets/weLoveWhatWeDo1.png"
import WeLoveWhatWeDo2 from "../assets/weLoveWhatWeDo2.png"

export default function WeLoveWhatWeDo() {
    return (
        <div className='w-3/5 ml-[24rem] flex mb-40'>
            {/* Sol Div */}
            <div className='flex gap-4'>
                <img src={WeLoveWhatWeDo1} alt='resim' />
                <img src={WeLoveWhatWeDo2} alt='resim2' />
            </div>
            {/* Sağ Div */}
            <div className='w-1/3 mx-[8rem] my-[8rem]'>
                <h2 className='text-[#23A6F0] text-[1rem] font-bold tracking-[.0625em] mb-4'>Featured Products</h2>
                <h1 className='text-[#252B42] text-[2.4rem] font-bold mb-4'>We love what we do</h1>
                <p className='text-[#737373] text-[0.875rem] font-bold mb-10'>
                    Problems trying to resolve the conflict between
                    the two major realms of Classical physics:
                    Newtonian mechanics.
                </p>
                <p className='text-[#737373] text-[0.875rem] font-bold'>
                    Problems trying to resolve the conflict between
                    the two major realms of Classical physics:
                    Newtonian mechanics
                </p>
            </div>
        </div>
    )
}
