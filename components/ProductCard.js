import React from 'react'
import Image from 'next/image'
import { getTranslationByLocale } from '../utils/querylang'

export const ProductCard = ({product}) => {
  const productTranslation = getTranslationByLocale(product)
  return (
    <article className="w-full max-w-sm h-64 lg:h-80 lg:w-1/3 min-h-0 m-1 relative flex justify-center items-center bg-gray-200">
      <Image src={product.banner} layout="fill" objectFit="cover" className="h-full"/> 
      <div className="w-full h-full relative text-black pt-10 bg-gray-700 bg-opacity-25 hover:bg-white hover:bg-opacity-10">
        <div className='absolute bottom-0 w-full h-auto flex flex-col justify-center items-center bg-white p-2 shadow-sm bg-opacity-50'>
          <h1 className="block text-xl md:text-3xl pt-1 font-bold">{productTranslation.title}</h1> 
          <p className="block text-sm text-center md:text-lg pt-1">{productTranslation.description}</p>
        </div>
      </div>
    </article>
  )
}
