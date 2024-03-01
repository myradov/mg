import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Product = ({product, id}) => {

    const {locale} = useRouter()
    const p = locale === 'en' ? product.translations[0] : locale === 'ru' ? product.translations[1] : locale === 'tm' ? product.translations[2] : null
  
    return (
        <article className="w-full h-auto relative flex flex-col lg:flex-row justify-between items-start md:items-center shadow-md mb-4 md:mb-0 max-w-2xl lg:max-w-none" key={product.id}>
            {
                (id & 1) ? (
                    <>
                    <div className="relative w-full lg:w-1/2">
                        <Image src={`http://localhost:8055/assets/${product.banner}`} width={500} height={600} sizes="100%" className='object-cover'/>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6">
                        <h1 className="text-2xl md:text-3xl font-bold my-2">{p.title}</h1>
                        <div className="text-md md:text-lg md:px-14" dangerouslySetInnerHTML={{__html: p.details}}></div>
                    </div>
                    </>
                ) : (
                    <>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center order-last lg:order-first p-6">
                        <h1 className="text-2xl md:text-3xl font-bold my-2">{p.title}</h1>
                        <div className="text-md md:text-lg md:px-14" dangerouslySetInnerHTML={{__html: p.details}}></div>
                    </div>
                    <div className="relative w-full lg:w-1/2">
                        <Image src={`http://localhost:8055/assets/${product.banner}`} width={500} height={600} layout="responsive" sizes="100%" className='object-cover'/>
                    </div>
                    </>
                )
            }
        </article>
    )
}
