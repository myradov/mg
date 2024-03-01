import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import AboutImg from '../public/aboutus.jpg'
import partners from '../public/vercel.svg'
import hengst from '../public/hengst.svg'
import mann from '../public/mann.svg'
import hummel from '../public/mann-hummel.svg'
import fram from '../public/fram.svg'
import app from '../public/app.jpeg'
import { useRouter } from 'next/router'
import { Values } from '../components/Values'

//import about data
import { getAboutData } from '../utils/queryData.js'
import { getTranslationByLocale } from '../utils/querylang.js'

const About = ({about, values, aboutData}) => {
    const aboutTranslations = getTranslationByLocale(aboutData)
    
    return (
        <>
        <Head>
            <title>Megafil - About Page</title>
            <meta name="description" content="Megafil filters - About page"/>
        </Head>
            <section className="relative block w-full h-auto bg-white max-w-screen-2xl mx-auto" id="aboutPage">
                <main className="relative w-full h-auto flex flex-col justify-center items-center">
                    {/** ABOUT MAIN REQUEST **/}
                    <article className="relative w-full flex flex-col md:flex-row justify-center items-center bg-gray-200">
                        <div className="relative w-full min-h-[300px] md:w-1/3 h-3/5 md:h-screen overflow-hidden">
                            <Image src={aboutData.banner} layout="fill" sizes="100%" className='object-cover'/>
                        </div>
                        <div className="relative flex flex-1 flex-col justify-center items-center h-auto md:h-full text-center px-4 pt-4  bg-opacity-75">
                            <div className="relative flex flex-col md:flex-row justify-start items-center text-left mb-10 divide-x-4 divide-solid divide-black">
                                <h2 className="text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-500 to-gray-300 font-extrabold my-8 uppercase drop-shadow-2xl px-6">{aboutTranslations?.title}</h2>
                                <p className="text-md w-full md:w-2/3 pl-6">
                                    {aboutTranslations?.description}
                                </p>
                            </div>
                        </div>
                    </article>
                    {/** ABOUT DETAILS **/}
                    <div className='relative w-full h-auto flex flex-col justify-center items-center'>
                        {
                            aboutTranslations?.content.map(item => (
                                <article className="relative w-full h-auto max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-center py-8 border-b" id="partners" key={item.id}>
                                    <div className="relative w-full flex flex-col md:items-start justify-center items-center md:w-1/3 p-6 md:p-2 divide-x-4 divide-solid divide-black" >
                                        <h1 className="font-bold text-3xl py-2 md:py-4 pr-4 whitespace-nowrap">{item.title}</h1>
                                        <p className="pl-4 md:pl-14 text-md md:w-2/3">{item.description}</p>
                                    </div>
                                    <ul className="relative w-full md:w-2/3 h-full flex md:flex-1 justify-start md:justify-start items-center flex-wrap px-6 md:p-0" >
                                        {
                                           item.details.title === 'values' ? item.details.values.map((item, idx) => (
                                            <li className="relative w-2/5 md:w-1/5 border-2 m-1  border-gray-400 rounded-lg p-2" key={idx}>
                                                <p className="text-sm text-center">{item}</p>
                                                {/* <h2 className="relative text-xl">2000</h2> */}
                                            </li>
                                           )) : item.details.title === 'weare' ? item.details.values.map((item, idx) => (
                                            <li className="relative w-2/5 md:w-1/5 border-2 m-1  border-gray-400 rounded-lg p-2" key={idx}>
                                                <p className="text-sm">{item.title}</p>
                                                <h2 className="relative text-xl">{item.data}</h2>
                                            </li>
                                            )) : item.details.title === 'partners' ? item.details.values.map((item, idx) => (
                                            <li className="relative w-1/5 border-2  m-1 border-gray-400 rounded-lg p-2" key={idx}>
                                                <Image src={item} width="70" height="70" layout="responsive"/>
                                            </li>
                                            )) : null
                                        }
                                    </ul>
                                </article>
                            ))
                        }
                    </div>
                </main>
            </section>
        </>
    )
}

export default About


export const getStaticProps = async() => {
    const aboutData = getAboutData()
    return {
        props: {
            aboutData
        }
    }
}

// export const getStaticProps = async() => {
//     const res = await fetch(`${process.env.BASE_URL}/about?fields=banner.*,translations.*`)
//     const about = await res.json()
    
//     if(!about){
//         return { 
//         notFound: true
//         }
//     }

//     const resValues = await fetch(`${process.env.BASE_URL}/values?fields=id,icon.*,translations.*`)
//     const values = await resValues.json()

//     if(!values){
//         return {
//             notFound :true
//         }
//     }

//     return {
//         props: {
//             about,
//             values
//         },
//         revalidate: 60,
//     }
// }
