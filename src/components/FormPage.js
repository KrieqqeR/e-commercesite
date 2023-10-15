import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function FormPage() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const name = watch("name") || "";
    const storeName = watch("storeName") || "";
    const email = watch("email") || "";
    const password = watch("password") || "";
    const passwordMatch = watch("passwordMarch") || "";
    const [showStoreRole, setShowStoreRole] = useState(false);
    const storeTaxId = watch("storeTaxId") || "";



    const onSubmit = data => console.log(data);




    return (

        <div className='pt-[8rem]'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg h-[100vh] mx-auto">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 mx-auto md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.email ? "border-red-500" : "border-gray-200"
                                } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            id="name"
                            type="text"
                            placeholder="Name"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name should be at least 3 characters",
                                },
                            })}
                        />
                        {name.length < 3 && (
                            <p className="text-red-500 text-xs italic">
                                {errors.name ? errors.name.message : ""}
                            </p>
                        )}
                    </div>

                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " htmlFor="email">
                            E-mail
                        </label>
                        <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.email ? "border-red-500" : "border-gray-200"
                            } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-password" type="email" placeholder="abc@gmail.com" {...register("email", { required: "Email should be written", pattern: { value: /^\S+@\S+$/i, message: "Enter an invalid email address" } })} />
                        {email.length < 3 && (
                            <p className="text-red-500 text-xs italic">
                                {errors.email ? errors.email.message : ""}
                            </p>
                        )}
                    </div>
                </div>



                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.password ? "border-red-500" : "border-gray-200"} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            id="password"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                validate: (value) => {
                                    const hasUppercase = /[A-Z]/.test(value);
                                    const hasLowercase = /[a-z]/.test(value);
                                    const hasSpecialChar = /[\W_]/.test(value);
                                    const hasMinLength = value.length >= 8;

                                    if (hasUppercase && hasLowercase && hasSpecialChar && hasMinLength) {
                                        return true;
                                    }

                                    return "Password must meet all requirements: at least 8 characters, one uppercase letter, one lowercase letter, and one special character.";
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs italic">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                </div>









                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="passwordMatch">
                            Confirm Password
                        </label>
                        <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.passwordMatch ? "border-red-500" : "border-gray-200"
                            } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="passwordMatch" type="password" placeholder="Confirm Password" {...register("passwordMatch", {
                                required: "Confirm Password is required",
                                validate: (value) => value === password || "Passwords must match",
                            })} />
                        {passwordMatch !== password && (
                            <p className="text-red-500 text-xs italic">
                                {errors.passwordMatch ? errors.passwordMatch.message : ""}
                            </p>
                        )}
                    </div>
                </div>








                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mx-auto">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="role">
                            Role
                        </label>
                        <div className="relative">
                            <select onChange={() => setShowStoreRole(!showStoreRole)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="role">
                                <option>Customer</option>
                                <option >Store</option>

                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                {showStoreRole && (
                    <div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="name"
                                >
                                    Store Name
                                </label>
                                <input
                                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.email ? "border-red-500" : "border-gray-200"
                                        } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                    id="storeName"
                                    type="text"
                                    placeholder="Store Name"
                                    {...register("storeName", {
                                        required: "Store name is required",
                                        minLength: {
                                            value: 3,
                                            message: "Store name should be at least 3 characters",
                                        },
                                    })}
                                />
                                {storeName.length < 3 && (
                                    <p className="text-red-500 text-xs italic">
                                        {errors.storeName ? errors.storeName.message : ""}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="name"
                                >
                                    Store Tax ID
                                </label>
                                <input
                                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.email ? "border-red-500" : "border-gray-200"
                                        } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                    id="storeTaxId"
                                    type="text"
                                    placeholder='TXXXXVXXXXXX'
                                    {...register("storeTaxId", {
                                        required: "Store Tax Id is required",
                                        minLength: {
                                            value: 12,
                                            message: "Store Tax Id be at least 12 characters",
                                        },
                                    })}
                                />
                                {storeTaxId.length < 12 && (
                                    <p className="text-red-500 text-xs italic">
                                        {errors.storeTaxId ? errors.storeTaxId.message : ""}
                                    </p>
                                )}
                            </div>
                        </div>

                    </div>
                )}







                <button className=" mt-12 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ">Sıgn up</button>
            </form>
        </div>
    );
}
