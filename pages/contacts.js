import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Img from '../public/contactus.jpg'
import Fb from '../public/fb.svg'
import In from '../public/in.svg'

import { getContactsData } from '../utils/queryData'
import { getTranslationByLocale } from '../utils/querylang'

const Contacts = ({contactsData}) => {
    const contactsTranslations = getTranslationByLocale(contactsData)
    
    return (
        <>
        <Head>
            <title>Contacts</title>
            <meta name="description" content="Megafil contacts and addresses" />
        </Head>
            <section className="relative block w-full h-auto bg-gray-200">
                <main className="relative w-full h-auto md:h-screen flex flex-col md:flex-row justify-center items-end bg-gray-200">
                    <article className="relative flex flex-1 flex-col justify-center items-center w-full md:w-1/2 h-auto md:h-full text-center px-4 md:px-10 pt-4 bg-opacity-75 order-last md:order-first">
                        <div className="relative w-full h-auto flex flex-col justify-start items-center mb-6">
                            <h1 className="text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-500 to-gray-300 font-extrabold my-8 uppercase drop-shadow-2xl">{contactsTranslations?.title}</h1>
                            <p className="w-full relative block text-md italic">{contactsTranslations?.description}</p>
                        </div>
                        {/* <div className="relative w-full h-auto flex flex-col justify-center items-start mb-4 text-left" dangerouslySetInnerHTML={{__html: cn?.details}}>
                        </div> */}
                        <div className="relative w-full h-auto flex flex-col justify-center items-start mb-4 text-left">
                            <div className='flex flex-col items-start'>
                                <h1>{contactsTranslations?.details?.title}</h1>
                                {/* <h3>{contactsTranslations?.details?.address}</h3> */}
                                <h3>{contactsTranslations?.details?.phone}</h3>
                                <h3>{contactsTranslations?.details?.email}</h3>
                            </div>
                        </div>
                        <div className="relative w-full h-auto  flex flex-col justify-center items-start py-4">
                            <h1  className="font-bold text-md py-1">{contactsTranslations?.socials}</h1>
                            <div className="relative flex justify-between items-center">
                                <Link href="#">
                                    <a className="relative block mr-2">
                                        <Image src={Fb} width={30} height={30}/>
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="relative block">
                                        <Image src={In} width={30} height={30}/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </article>
                    <div className="relative w-full md:w-1/2 h-80 md:h-full overflow-hidden">
                        <Image src={contactsData.banner} layout="fill" sizes="100%" className="object-cover"/> 
                    </div>
                </main>
            </section>
        </>
    )
}

export default Contacts

// export const getStaticProps = async() => {
//     const res = await fetch(`${process.env.BASE_URL}/contact?fields=banner.*,translations.*`)
//     const contact = await res.json()

//     return {
//         props: {
//             contact
//         }
//     }
// }

export const getStaticProps = async() => {
    const contactsData = getContactsData()
    
    return {
        props:{
            contactsData
        }
    }
}
