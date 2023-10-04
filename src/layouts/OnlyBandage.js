import React from 'react'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function OnlyBandage() {
  return (
    
         <div className="mt-8 w-[90rem] mx-auto">
                <div className="text-black flex justify-between items-center text-center ml-16">
                    <h1 className="text-[1.5rem] font-bold text-[#252B42]">Bandage</h1>
                    <div className="flex gap-5 mr-80 mt-1">
                    <NavLink to={"/"} className="text-[#737373] font-bold" >Home</NavLink>
                    <NavLink to={"/products"} className="text-[#737373] font-bold" >Products</NavLink>
                    <NavLink to={"/pricing"} className="text-[#737373] font-bold" >Pricing</NavLink>
                    <NavLink to={"/contact"} className="text-[#737373] font-bold" >Contact</NavLink>
                    </div>
                    <div className='flex gap-16 items-center text-center justify-center relative'>
                        <h5 className='cursor-pointer text-[#23A6F0] font-semibold'>Login</h5>
                        <button className='py-[0.94rem] font-bold px-[2rem] pr-12 rounded-md bg-[#23A6F0] text-[#FFFFFF]'>
                            Become a Member
                        </button>
                        <img src="https://file.rendit.io/n/ojwfStaZGYGdnC7qem2f.svg" className='absolute right-2 w-4 h-4 top-5'/>
                    </div>
                </div>
            </div>
    
  )
}
