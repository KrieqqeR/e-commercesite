import React from "react";
import { BsInstagram, BsTelephone, BsSearch } from "react-icons/bs";
import {
    AiOutlineMail,
    AiOutlineShoppingCart,
    AiOutlineHeart,
} from "react-icons/ai";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { CiFacebook } from "react-icons/ci"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
    return (
        <div>
            <div className="bg-[#252B42]">
                <div className="flex justify-between items-center h-16 text-white mx-16">
                    {/* NAVBAR SOL ÜST */}
                    <div className="flex ">
                        <div className="flex gap-4">
                            <BsTelephone className="mt-1" />
                            <span>0225 555-0118</span>
                        </div>
                        <div className="flex gap-4 ml-4">
                            <AiOutlineMail className="mt-1" />
                            <p>michelle.rivera@example.com</p>
                        </div>
                    </div>
                    {/* NAVBAR ORTA */}
                    <div className="flex">
                        <p>Follow Us and get a chance to win 80% off</p>
                    </div>
                    {/* Navbar Sağ Üst */}
                    <div className="flex gap-4">
                        <span>Follow Us : </span>
                        <BsInstagram className="mt-1" />
                        <FiYoutube className="mt-1" />
                        <CiFacebook className="mt-1 " />
                        <FiTwitter className="mt-1" />
                    </div>
                </div>
            </div>
            {/* Burası Bandage olan kısım */}
            <div className="mt-4">
                <div className="text-black flex justify-between mx-16">
                    <h1 className="text-[1.5rem] font-bold text-[#252B42]">Bandage</h1>
                    <div className="flex gap-5 mr-80 mt-1">
                        <NavLink to={"/"} className="text-[#737373] font-bold" >Home</NavLink>
                        <NavLink to={"/products"} className="text-[#737373] font-bold" >Products</NavLink>
                        <NavLink to={"/about"} className="text-[#737373] font-bold" >About</NavLink>
                        <NavLink to={"/contact"} className="text-[#737373] font-bold" >Contact</NavLink>
                        <NavLink to={"/productlistpage"} className="text-[#737373] font-bold" >Pages</NavLink>
                        <NavLink to={"/pricing"} className="text-[#737373] font-bold" >Pricing</NavLink>
                    </div>
                    <div className="flex gap-2 font-bold">
                        <BiUserCircle className="mt-1 cursor-pointer" />
                        <p className="cursor-pointer">Login / Register </p>
                        <BsSearch className="mt-1" />
                        <div className="flex cursor-pointer">
                            <AiOutlineShoppingCart className="mt-1 cursor-pointer" />
                            <span className="mt-1">1</span>
                        </div>
                        <div className="flex cursor-pointer">
                            <AiOutlineHeart className="mt-1" />
                            <span className="mt-1">1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}