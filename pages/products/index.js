import React from 'react'

import { useRouter } from 'next/router'

import { products, productsPage } from '../../libs/products'
import { Product } from '../../components/Product.js'
import { getTranslationByLocale } from '../../utils/querylang.js'


const Products = ({products, productsPage}) => {
    const productsPageTranslation = getTranslationByLocale(productsPage)
    const {locale}  = useRouter()
    return (
        <>
            <section className="relative block w-full h-auto pt-16">
                <section className='container w-full md:w-2/3 mx-auto p-8'>
                    <h1 className='text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-400 to-white lg:to-gray-200 font-extrabold my-2 uppercase drop-shadow-2xl text-center'>{productsPageTranslation.title}</h1>
                    <p className='block py-2 text-lg text-center font-medium'>{productsPageTranslation.description}</p>
                </section>
                <main className="flex flex-col justify-center items-center bg-gray-300 p-4 md:p-0 md:mt-4">
                    {
                        products?.map((product,id) => (
                                <Product product={product} id={id} key={product.id}/>
                        ))
                    }
                </main>
            </section>
        </>
    )
}

export default Products


export const getStaticProps = async() => {

    if(!products) {
        return {
            notFound: true
        }
    }

    if(!productsPage) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            products, productsPage
        }
    }
}