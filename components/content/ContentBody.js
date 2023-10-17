import React from 'react'
import TopSales from "./TopSales"
import Showroom from "./Showroom"
const ContentBody = () => {
  return (
    <div id='contentBody'>
      <div id='contentBody__heading'>
        <h1>Popular Products</h1>
        <h2>Selected Exclusively</h2>
      </div>
      <TopSales />
      <Showroom />
    </div>
  )
}

export default ContentBody