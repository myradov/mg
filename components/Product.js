import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Product = ({product, id}) => {
    const {locale} = useRouter()

    const getTranslationByLocale = () => {
        switch (locale) {
          case 'en':
            return product.lang[0];
          case 'tm':
            return product.lang[1];
          case 'ru':
            return product.lang[2];
          default:
            return null;
        }
    };

    const translation = getTranslationByLocale()

    return (
        <article className="w-full h-auto relative flex flex-col lg:flex-row justify-between items-start md:items-center mb-4 md:mb-0 max-w-2xl lg:max-w-none bg-gray-200" key={product.id}>
            {
                (id & 1) ? (
                    <>
                    <div className="relative w-full lg:w-1/2">
                        <Image src={product.banner} width={500} height={600} sizes="100%" className='object-cover'/>
                    </div>
                    {/* <Link href={`/news/${article.id}`} locale={locale}></Link> */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6">
                        <Link href={`/products/${product.id}`} locale={locale} className="text-2xl md:text-3xl font-bold my-2 cursor-pointer">
                            <h1 className="text-2xl md:text-3xl font-bold my-2 cursor-pointer hover:text-green-700">{translation.title}</h1>
                            {/* {translation.title} */}
                        </Link>
                        <div className="text-md md:text-lg md:px-14" dangerouslySetInnerHTML={{__html: translation.content}}></div>
                    </div>
                    </>
                ) : (
                    <>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center order-last lg:order-first p-6">
                        <Link href={`/products/${product.id}`} locale={locale} className="text-2xl md:text-3xl font-bold my-2 cursor-pointer">
                            <h1 className="text-2xl md:text-3xl font-bold my-2 cursor-pointer hover:text-green-700">{translation.title}</h1>
                            {/* {translation.title} */}
                        </Link>
                        <div className="text-md md:text-lg md:px-14" dangerouslySetInnerHTML={{__html: translation.content}}></div>
                    </div>
                    <div className="relative w-full lg:w-1/2">
                        <Image src={product.banner} width={500} height={600} layout="responsive" sizes="100%" className='object-cover'/>
                    </div>
                    </>
                )
            }
        </article>
    )
}
