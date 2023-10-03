import React from 'react'
import MainPicture from "../assets/ContactPageMainPage.png"

export default function ContactPageGetinTouch() {
    return (
        <div className='w-[90rem] mx-auto flex my-[7rem] pl-16'>
            {/* Sol Kısım */}
            <div className="flex flex-col gap-12 w-[50%] h-[32,375rem] items-start" >
                <div
                    id="HHeadline"
                    className="font-bold  text-[#252b42] mb-4"
                >
                    CONTACT US
                </div>
                <div
                    id="HHeadline1"
                    className="text-6xl font-bold  text-[#252b42] mb-4"
                >
                    Get in touch <br />
                    today!
                </div>
                <div
                    id="HSubheadline"
                    className="text-xl text-[#737373] mb-4"
                >
                    We know how large objects will act, <br />
                    but things on a small scale
                </div>
                <div className="text-2xl font-bold  text-[#252b42]">
                    Phone ; +451 215 215{" "}
                </div>
                <div className="text-2xl font-bold  text-[#252b42] mb-6">
                    Fax : +451 215 215
                </div>
                <div className="flex flex-row justify-between ml-2 gap-8 items-start">
                    <img
                        src="https://file.rendit.io/n/EbnCZf4oLtCn7Ikbhhug.svg"

                        className="w-8 cursor-pointer"
                    />
                    <img
                        src="https://file.rendit.io/n/lt7il0J3loL8BJjSQ0Hb.svg"

                        className="w-8 cursor-pointer"
                    />
                    <img
                        src="https://file.rendit.io/n/AUBHZEyuAYCGHUx00q3H.svg"
                        className="w-8 cursor-pointer"
                    />
                    <img
                        src="https://file.rendit.io/n/8UxPqdhy07snYOPOSGa3.svg"
                        className="w-8 cursor-pointer"
                    />
                </div>
            </div>
            {/* Sağ Kısım */}
            <div className='w-[50%] relative '>
                <div className='bg-[url("https://file.rendit.io/n/aRftEucryT9hli2iNNHB.svg")] bg-contain bg-no-repeat'>
                    <img src={MainPicture} />
                    <img src="https://file.rendit.io/n/aRftEucryT9hli2iNNHB.svg" className='top-5 absolute' />
                </div>
            </div>
        </div>
    )
}
