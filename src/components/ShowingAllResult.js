import React from 'react'

export default function ShowingAllResult() {
    return (
        <div className='w-[70rem] mx-auto flex justify-between items-center mt-10'>
            <h1 className='text-[#737373] font-semibold'>Showing all 12 result</h1>
            <div className='flex items-center gap-2'>
                <h1 className='text-[#737373] font-semibold'>Views:</h1>
                <img
                    src="https://file.rendit.io/n/vFXyEvdD2BbeovWbmqaU.svg"
                    id="Icon"
                    className="w-6 h-6 cursor-pointer"
                />
                <img
                    src="https://file.rendit.io/n/qkwL8mD9GnzPSuJc0JQf.svg"
                    id="Icon"
                    className="w-7 h-7  cursor-pointer"
                />
            </div>
            <div className='flex items-center gap-2 pr-24 '>
                <div
                    id="OptionRoot"
                    className="border-solid border-[#dddddd] overflow-hidden bg-[#f9f9f9] flex flex-row gap-1 w-full h-12 items-center px-4 border rounded text-center cursor-pointer"
                >
                    <div
                
                        id="Dropdown"
                        className=" tracking-[0.2] leading-[28px] text-[#737373] font-semibold text-center cursor-pointer"
                        
                    >
                        Popularity
                    </div>
                    <img
                        src="https://file.rendit.io/n/QlM8sZOD700CY5MYBJZA.svg"
                        className="w-3 shrink-0 text-center cursor-pointer"
                    />
                </div>
                <button className='py-[0.625rem] px-[1.25rem] w-[5.875rem] bg-[#23A6F0] text-[#FFFFFF] rounded-[0.3125rem] '>
                    Filter
                </button>
            </div>
        </div>
    )
}
