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
import { Link } from 'react-router-dom';
import md5 from "md5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../store/actions/userActions"
import { api } from "../api/api";

export default function Header() {
    const dispatch = useDispatch();
    const user = useSelector((select) => select.user.user)
   
    useEffect(() => {
        // Sayfa yüklendiğinde, localStorage'dan token'ı kontrol et
        const token = localStorage.getItem('token');
        if (token) {
            // Token varsa, kullanıcı bilgilerini almak için bir API çağrısı yapabilirsiniz
            api.get('/verify', {
                headers: {
                    Authorization: token,
                },
            })
                .then((response) => {
                    const userData = response.data;
                    // Kullanıcı bilgilerini Redux store'a kaydedin
                    console.log(userData , " USER DATA")
                    dispatch(setUser(userData));
                })
                .catch((error) => {
                    console.error('Kullanıcı bilgileri alınamadı', error);
                });
        }
    }, []);
    
    let gravatarUrl = "";
    
    if (user && user.email) {
        gravatarUrl = `https://www.gravatar.com/avatar/${md5(user.email)}`;
    }

    return (
        <div>
            <div className="bg-[#252B42] mobile:hidden">
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
            <div className="mt-4 ">
                <div className="text-black flex flex-wrap  justify-between mx-16 mobile:mx-4">
                    <h1 className="text-[1.5rem] font-bold text-[#252B42] mobile:mx-auto">Bandage</h1>
                    <div className="flex mobile:flex-col mobile:mr-0 mobile:mt-20 gap-5 mr-80 mt-1">
                        <NavLink to={"/"} className="text-[#737373] font-bold" >Home</NavLink>
                        <NavLink to={"/products"} className="text-[#737373] font-bold" >Products</NavLink>
                        <NavLink to={"/about"} className="text-[#737373] font-bold" >About</NavLink>
                        <NavLink to={"/contact"} className="text-[#737373] font-bold" >Contact</NavLink>
                        <NavLink to={"/productlistpage"} className="text-[#737373] font-bold" >Pages</NavLink>
                        {/* <NavLink to={"/pricing"} className="text-[#737373] font-bold" >Pricing</NavLink> */}
                        <NavLink to={"/team"} className="text-[#737373] font-bold" >Team</NavLink>
                    </div>

                    <div className="flex gap-2 font-bold mobile:mt-0 mobile:mx-auto">
                        <div className="flex gap-4">
                            {user ? (
                                <div className="flex gap-2 items-center">
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src={gravatarUrl}
                                        alt="User"
                                    />
                                    <p className="text-[#757575] mx-4">{user.name}</p>
                                </div>
                            ) : (
                                <div className="flex gap-2">
                                    <BiUserCircle className="mt-1 cursor-pointer mobile:hidden" />
                                    <Link to="/login" className="cursor-pointer mobile:hidden">Login</Link>
                                    <Link to="/signup" className="cursor-pointer mobile:hidden">/ Register</Link>
                                </div>
                            )}
                            <BsSearch className="mt-1" />
                            {/* ... diğer ikonlar */}
                        </div>
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