import React from 'react'
import { useSelector } from 'react-redux'

export const ShoppingCart = () => {

    const shoppingCardList = useSelector((select) => select.shopping.card)


    return (
        <div>
            <div>
                Sepetim {shoppingCardList?.length - 1}
            </div>
            {shoppingCardList?.map((eleman, index) => (
                <div>
                    {/* <img className='w-[5rem] h-[5rem]' src={eleman?.product?.images[0]?.url} /> */}
                    <div>
                        <h1>{eleman.checked && eleman.product.name}</h1>
                        <div>
                            <h1>{eleman.checked && `Adet : ${eleman.count}`}</h1>
                        </div>
                        <p>{eleman.checked && `Fiyat : ${eleman.product.price}`}</p>
                    </div>
                </div>
            ))}
            <div>
                <button>Sepete Git</button>
                <button>Alışverisi Tamamla</button>
            </div>

        </div>
    )
}
