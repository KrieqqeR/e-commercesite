import React from 'react'
import OrderSummary from './OrderSummary'

export const PayingConfirmPage = () => {






    return (
        <div className='flex'>
            <div className='mt-24 ml-8 w-[75rem]'>
                <div className=''>
                    <h1 className='text-purple-500 font-bold text-[1.5rem]'>Adres Bilgileri</h1>
                    <p className='mt-4'>ANKARA ETİMEGSTUT VS ODFSGJFDG</p>
                </div>
                <div className='flex mt-12'>
                    <p className='px-2 text-white font-bold text-[1.1rem] bg-purple-400 rounded-full mr-2'>!</p>
                    <p className='font-bold '>Kurumsal Faturalı alışveriş yapmak için "Faturamı Aynı Adrese Gönder" tikini kaldırın ve Fatura adresi olarak kayıtlı kurumsal Fatura adresinizi seçin.</p>
                </div>
                <div className='mt-8'>
                    <div className='flex justify-between'>
                        <h1 className='text-black font-bold text-[1.2rem]'>Teslimat Adresi</h1>
                        <label className='font-bold text-black'>
                            <input type='checkbox' className='mr-2' />
                            Fatura adresime gönder
                        </label>
                    </div>
                    <div className='flex flex-wrap gap-4 justify-between mt-10'>
                        <div className='w-[30rem] h-[10rem] border-2 cursor-pointer'>
                            <p className='text-[2rem] text-orange-500 font-bold text-center mt-8'>+</p>
                            <p className='font-bold text-black text-center '>Yeni Adres Ekle</p>
                        </div>
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div className='w-[30rem] h-[10rem] border-2 pl-4 pt-2 cursor-pointer' key={i}>
                                <div className='flex justify-between mr-8'>
                                    <h1 className='font-bold text-black'>Ahmet Mehmet</h1>
                                    <p className='text-black font-semibold'>TEL NO 183741824</p>
                                </div>
                                <div>
                                    <p className='mt-2 font-bold text-black'>YEŞİLOVA MAH . 40 61 SOKANO 4.1</p>
                                    <p className='mt-2 font-bold text-black'>bornova izmiri</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <OrderSummary />
        </div>
    )
}
