import React from 'react'
import OnlyBandage from "../layouts/OnlyBandage"
import PricingPageSimplePricing from "../components/PricingPageSimplePricing"
import PricingPageCard from "../components/PricingPageCard"

export default function Pricing() {
  return (
    <div>
        <OnlyBandage />
        <PricingPageSimplePricing/>
        <PricingPageCard/>
    </div>
  )
}
