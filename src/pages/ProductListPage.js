import React from 'react'
import Header from '../layouts/Header'
import ProductListPageShop from '../components/ProductListPageShop'
import ProductListPageShopTopCards from '../components/ProductListPageShopTopCards'
import ShowingAllResult from '../components/ShowingAllResult'
import ProductListPageCards from '../components/ProductListPageCards'
import Brands from "../components/Brands"
import Footer from "../layouts/Footer"

export default function ProductListPage() {
  return (
    <div>
        <Header/>
        <ProductListPageShop/>
        <ProductListPageShopTopCards/>
        <ShowingAllResult/>
        <ProductListPageCards/>
        <Brands/>
        <Footer/>
    </div>
  )
}
