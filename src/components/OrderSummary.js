import React from 'react'

const OrderSummary = () => {
    return (
        <div className="w-[30rem] h-[28rem] mt-[10rem] mx-auto border-8 border-violet-500">
            <button className="px-[6rem] py-4 ml-20 bg-violet-400 mt-7 text-white font-bold">Sepeti Onayla</button>
            <div className="border-1 w-[20rem] mt-4 mx-auto flex gap-4 flex-col">
                <h1 className="text-[2rem] font-bold text-black underline">Sipariş Özeti</h1>
                <div className="flex text-black font-bold justify-between">
                    <h2>Ürünün Toplamı</h2>
                    <p>Fiyat</p>
                </div>
                <div className="flex text-black font-bold justify-between">
                    <h2>Kargo Toplamı</h2>
                    <p>35₺</p>
                </div>
                <div className="flex text-black font-bold justify-between">
                    <h2>150 TL Üstü ve Kargo Bedava</h2>
                    <p>Fiyat</p>
                </div>
                <hr />
                <div className="flex text-black font-bold justify-between">
                    <h2>Toplam</h2>
                    <p>Fiyat</p>
                </div>
            </div>
            <button className="px-[6rem] py-4 ml-20 mt-5 bg-violet-400 text-white font-bold">Sepeti Onayla</button>
        </div>
    )
}

export default OrderSummary