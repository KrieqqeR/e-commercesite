import React from 'react'
import data from '../data/Data'
import { useSelector } from 'react-redux';

export default function ProductListPageShopTopCards() {
  const productList = useSelector((state) => state.global?.categories[0]);
  if (!productList) {
    return null;
  }
  const sortedProductList = productList.sort((a, b) => b.rating - a.rating).slice(0, 5)
  console.log("sortedProductList", sortedProductList)
  return (
    <div className='w-[70rem] mobile:flex-wrap mobile:w-[20rem] mx-auto flex mt-8 gap-4'>
      {sortedProductList.map((eleman, index) => (
        <div key={index} className='w-[12rem] mobile:min-w-max mobile:my-4 mobile:mx-auto h-[13rem] relative'>
          <img className='h-[20rem]' src={eleman.img} alt='resim' />
          <h1 className='absolute bottom left-20 text-black font-bold'>{eleman.title}</h1>
        </div>
      ))}
    </div>
  )
}
/*
TODO :: 
  BURASI KALDI , ASAGIKILERDEN BAHSEDIYORUM TASK 9 ICIN , CONSOLE .LOG DA ARRAYLER GOZUKUYOR. CATEGORI Basarılır cekıldı: adı altında asagıdakılerı yap 


- tıklandığında “/shopping/:cinsiyet/:kategori”ye gitmelidir
- ilk 5 kategori “derecelendirme” değerine ilişkin resimlerle birlikte ekranda listelenmelidir
- tüm kategoriler başlıktaki açılır menüde listelenmelidir


*/
