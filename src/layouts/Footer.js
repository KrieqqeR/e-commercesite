import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#FAFAFA]'>
            {/* Üst Bandage Kısmı */}
            <div className='flex w-[70rem] justify-between mx-auto mb-5 h-40'>
                <h1 className='text-[#252B42] text-[1.5rem] font-bold my-auto'>Bandage</h1>
                <div className='flex gap-4'>
                    <img src="https://file.rendit.io/n/Z2m7AGKDWjSidq8VzAzO.svg" alt='resim' className="w-6" />
                    <img src="https://file.rendit.io/n/UhsiAEYhlBkW9yJizvtf.svg" alt='resim' className="w-6" />
                    <img src="https://file.rendit.io/n/2OhXFAL07VFkCHfEVZXr.svg" alt='resim' className="w-6" />
                </div>
            </div>
            {/* Alt Kısım */}
            <div className='mb-20'>
                <div className='w-[70rem] mx-auto h-40 flex justify-between'>
                    <div className='w-[9.25rem]'>
                        <h1 className='text-[#252B42] text-[1rem] font-bold'>Company Info</h1>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold my-3'>About Us</h6>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold my-3'>Carrier</h6>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold my-3.5'>We are hiring</h6>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold '>Blog</h6>
                    </div>
                    <div className='w-[9.25rem]'>
                        <h1 className='text-[#252B42] text-[1rem] font-bold' >Legal</h1>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold my-3'>About Us</h6>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold my-3'>Carrier</h6>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold my-3.5'>We are hiring</h6>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold '>Blog</h6>
                    </div>
                    <div className='w-[9.25rem]'>
                        <h1 className='text-[#252B42] text-[1rem] font-bold'>Features</h1>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold my-3'>Business Marketing</h6>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold my-3'>User Analytic</h6>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold my-3.5'>Live Chat</h6>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold '>Unlimited Support</h6>
                    </div>
                    <div className='w-[9.25rem]'>
                        <h1 className='text-[#252B42] text-[1rem] font-bold'>Resources</h1>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold my-3'>IOS & Android</h6>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold my-3'>Watch a Demo</h6>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold my-3.5'>Customers</h6>
                        <h6 className='text-[#737373] text-[0.875rem] font-semibold '>API</h6>
                    </div>
                    {/* Formun oldugu yer */}
                    <div>
                        <h1 className='text-[#252B42] text-[1rem] font-bold '>Get In Touch</h1>
                        <div>
                            <input
                                type="text"
                                placeholder="Your E-mail"
                                className="rounded-md py-4 px-5  border border-custom-button bg-[#FFFFFF]"
                            />
                            <button
                                variant="primary"
                                className="mt-2 text-white bg-sky-400 py-4 px-4 rounded  "
                            >
                                Subscribe
                            </button>
                            <div className="text-xs tracking-[0.2] text-[#737373]">
                                Lore imp sum dolor Amit</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#FAFAFA] w-[70rem] mx-auto'>
                <p className='text-[#737373] text-[1rem] font-semibold leading-6 tracking-[.025rem] py-[1.5rem]'>
                    Made With Love By Finland All Right Reserved
                </p>
            </div>

        </div>
    )
}
