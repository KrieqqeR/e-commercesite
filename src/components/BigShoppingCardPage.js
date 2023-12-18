import React from "react";
import trash from "../assets/trash-solid.svg";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addToList,
  checkedProduct,
  decraseList,
  filteredProduct,
} from "../store/actions/shoppingCardActions";

export const BigShoppingCardPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const shoppingCard = useSelector((select) => select.shopping.card);
  console.log(shoppingCard);
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <div className=" h-screen mx-auto flex flex-col">
        <div className="pt-10 font-bold text-center mx-auto text-black text-[2rem]">
          BURAK E-Commerce
        </div>

        {shoppingCard.map(
          (herbiri, index) =>
            index >= 1 && (
              <div key={index} className="flex w-[70rem] mt-24 ml-24">
                <div className="w-[50vw] h-[7rem] mt-8">
                  <p className="text-black font-bold">
                    {herbiri.product.name} &{" "}
                    <span className="bg-green-700 text-white font-bold px-1 py-1 rounded-lg">
                      {herbiri.product.rating}
                    </span>
                  </p>
                  <div className="flex ">
                    <input
                      checked={herbiri.checked}
                      className="mx-4"
                      type="checkbox"
                      onClick={() => dispatch(checkedProduct(herbiri))}
                    />
                    <img
                      alt="Resim"
                      src={herbiri.product.images[0].url}
                      className="w-[5rem] h-[5rem]"
                      {...register}
                    />
                    <p className="my-auto flex text-black font-bold text-center ml-4">
                      {herbiri.product.description}
                    </p>
                  </div>
                  <div className="flex justify-evenly mt-2">
                    <button
                      onClick={() => dispatch(decraseList(herbiri.product))}
                      className="text-white font-bold bg-blue-500 ml-44 px-4 py-2 rounded-md"
                    >
                      -
                    </button>
                    <p className="my-auto">{herbiri.count}</p>
                    <button
                      onClick={() => dispatch(addToList(herbiri.product))}
                      className="text-white font-bold bg-blue-500 px-4 py-2 rounded-md"
                    >
                      +
                    </button>
                    <img
                      onClick={() => dispatch(filteredProduct(herbiri.product))}
                      alt="dustbin"
                      src={trash}
                    />
                  </div>
                </div>
                <div className="flex ml-20 w-[50vw] mt-8 h-[7rem] justify-around">
                  <h1 className="my-auto font-bold text-black">
                    ARAS CARGO : 35₺
                  </h1>
                  <p className="my-auto text-black font-bold">
                    {herbiri.product.price}₺
                  </p>
                </div>
              </div>
            )
        )}
      </div>
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
    </div>
  );
};