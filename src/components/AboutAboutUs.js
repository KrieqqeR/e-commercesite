import React from 'react'
import YellowGirl from "../assets/AboutPageYellowGirl.png"

export default function AboutAboutUs() {
    return (
        <div className="mt-28 w-[90rem] mx-auto flex h-[40rem] justify-between">
            {/* Sol Kısım */}
            <div className='ml-16 h-[25rem] items-center align-middle my-auto'>
                <h6 className='text-[#252B42] font-bold'>ABOUT COMPANY</h6>
                <h1 className='text-[3.625rem] text-[#252B42] font-bold mt-[2.1rem]'>ABOUT US</h1>
                <p className='text-[#737373] font-semibold mt-[2.1rem]'>We know how large objects will act,</p>
                <p className='text-[#737373] font-semibold'>but things on a small scale</p>
                <button className='mt-[2.1rem] bg-[#23A6F0] text-[#FFFFFF] px-[2.5rem] py-[1rem] rounded' >
                    Get Quote Now
                </button>
            </div>

            {/* Sag kısım */}
            <div className='relative'>
                <img src={YellowGirl} className='bg-[url("https://file.rendit.io/n/CTfjGsgRyOchssMgvEEx.svg")] bg-cover' />
                <img
                    src="https://file.rendit.io/n/9DnfVdjveeVgUsAzwpW2.svg"
                    id="EllipseRoot"
                    className="w-20 absolute top-5"
                />
            </div>
        </div>
    )
}
