import React from 'react'
import Link from 'next/link'

import { Product } from '../components/Product'

const Products = () => {
    return (
        <>
            <section className="relative block w-full h-auto pt-16">
                <main className="flex flex-col justify-center items-center bg-gray-300 p-4 md:p-0">
                    {/* {
                        products && products.data.map((product,i) => (
                                <Product product={product} id={i} key={product.id}/>
                            ))
                    } */}
                    Products here
                </main>
            </section>
        </>
    )
}

export default Products

// export const getStaticProps = async() => {
//     const res = await fetch(`${process.env.BASE_URL}/products?fields=id,date_created,banner,translations.*&filter[status][_eq]=published&sort=-date_created`)
//     const products = await res.json()

//     if(!products) {
//         return {
//             notFound : true
//         }
//     }

//     return {
//         props: {
//             products
//         },
//         revalidate: 30,
//     }
// }