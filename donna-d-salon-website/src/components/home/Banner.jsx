import React from 'react'
import banner from "/public/image/home/banner.jpg"

function Banner() {
  return (
    <div className="relative h-[20vh] bg-black overflow-hidden">
    <img
      src={banner}
      alt="Banner image"
      className="absolute z-0 top-0 right-0 left-0 w-full h-full object-cover opacity-40"
    />
    <div>
    <p>November - December</p>
    <h2>Fitbit giveaway</h2>
    <p>Purchase any Kerasilk Christmas package and receive a chance at winning a Fitbit Charge 3.</p>
    </div>

  </div>
  )
}

export default Banner
