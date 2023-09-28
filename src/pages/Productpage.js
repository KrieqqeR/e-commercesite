import React from 'react'
import Header from '../layouts/Header'
import ProductHomeShop from '../components/ProductHomeShop'
import ProductPageSlider from '../components/ProductPageSlider'
import ProductPageDescription from '../components/ProductPageDescription'
import ProductPageQuickFox from '../components/ProductPageQuickFox'

export default function Productpage() {
  return (
    <div>
      <Header />
      <ProductHomeShop />
      <ProductPageSlider />
      <ProductPageDescription />
      <ProductPageQuickFox />
    </div>
  )
}
