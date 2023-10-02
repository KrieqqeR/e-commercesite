import React from 'react'
import Header from '../layouts/Header'
import ProductListPageShop from '../components/ProductListPageShop'
import ProductListPageShopTopCards from '../components/ProductListPageShopTopCards'
import ShowingAllResult from '../components/ShowingAllResult'

export default function ProductListPage() {
  return (
    <div>
        <Header/>
        <ProductListPageShop/>
        <ProductListPageShopTopCards/>
        <ShowingAllResult/>
    </div>
  )
}
