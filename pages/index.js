import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getHomeData, getAppData, getAboutData, getProductsIntroData, getProductsPageData } from '../utils/queryData.js'


import { homeD, appD } from '../libs/home'
import { getTranslationByLocale } from '../utils/querylang.js'

{/** Components **/}
import { ProductCard } from '../components/ProductCard'

import megafil from '../public/megafil_app.png'

import apple from '../public/apple.svg'
import android from '../public/android.svg'
import windows from '../public/windows.svg'

export default function Home({home, about, products, productsIntro, productsPageData, aboutData, homeData, appData}) {
  const [isLoading, setIsLoading] = useState(false)

  {/** Locales **/}
  const homeTranslation = getTranslationByLocale(homeData);
  const aboutTranslation = getTranslationByLocale(aboutData);
  const appTranslation = getTranslationByLocale(appData);
  const productsPageTranslation = getTranslationByLocale(productsPageData);

  return (
    <div>
      <Head>
        <title>Megafil - Homepage</title>
        <meta name="description" content="Main page, Home page, Megafil home page" />
      </Head>

      <section className="relative block bg-gray-200" id="home">
        {/** HOME **/}
        <section className="bg-gray-400 relative h-screen flex justify-start items-center" id="intro">
          <div className="relative z-10 px-12 w-1/3 lg:w-2/3 h-full flex flex-col justify-center items-center bg-white">
            
            <div className="relative w-full lg:w-2/3 h-auto flex flex-col justify-start items-start text-left">
              <h1 className="text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-gray-400 to-white lg:to-gray-200 font-extrabold my-2 uppercase drop-shadow-2xl">{homeTranslation.title}</h1>
              <p className="text-lg my-1 w-52 md:w-full">
                {homeTranslation.description}
              </p>
            </div>
            <div className="relative w-full lg:w-2/3 h-auto flex flex-col justify-start items-start mt-4" id="btns">
              <Link href="contacts">
                <a className="text-lg px-4 py-2 bg-gray-300  rounded-md mr-3 shadow-md uppercase">{homeTranslation.contactButton}</a>
              </Link>
              <Link href="#app">
                <a className="animate-pulse text-lg px-4 py-2 bg-green-300 mt-4 whitespace-nowrap rounded-md shadow-md uppercase">{homeTranslation.downloadButton}</a>
              </Link>
            </div>

          </div>
          <div className="absolute right-0 shrink-0 block w-2/3 h-full md:w-1/2 lg:w-4/12 lg:z-10 md:right-44 lg:right-36 lg:top-0 lg:h-full backdrop-brightness-50">
            <Image src={homeD.bannerImage}  layout="fill" className="absolute object-cover"/>
          </div>
        </section>
        
        {/** ABOUT **/}
        
        <section className="relative bg-white h-screen flex justify-start items-center overflow-hidden" id="about">
          <div className="relative block w-1/3 z-10 left-0 lg:left-36 top-0 h-full">
            <Image src={aboutData.banner}  layout="fill" className="absolute object-cover"/>
          </div>
          <div className="relative md:p-12 w-2/3 h-full bg-white lg:bg-gray-400 flex justify-center items-center">
            <div className="relative w-full md:w-1/2 h-auto p-4 text-left">
              <h2 className="text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-500 to-gray-100 font-extrabold my-2 uppercase drop-shadow-2xl">{aboutTranslation.title}</h2>
              {/* <div className="text-lg md:text-lg mt-4 mb-8 w-full h-1/2 text-ellipsis" dangerouslySetInnerHTML={{__html: ab.description}}> */}
              <div className="text-lg md:text-lg mt-4 mb-8 w-full h-72 text-ellipsis overflow-hidden">
                {aboutTranslation.description}
              </div>
              <Link href='/about'>
                <a className="relative w-32 h-auto text-center h-auto py-2 px-3 bg-gray-300 uppercase whitespace-nowrap shadow-md rounded-md">{aboutTranslation.button}</a>
              </Link>
            </div>
          </div>
        </section>

        {/** PRODUCTS **/}

        <section className="relative block bg-gray-200 w-full h-auto py-3 my-4" id="products">
          <header className="relative block w-full h-auto py-4 px-4">
            <h1 className="text-center text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-gray-500 to-gray-100 font-extrabold my-2 uppercase drop-shadow-2xl">{productsPageTranslation.title}</h1>
          </header>
          <div className="w-full h-full flex flex-col lg:flex-row justify-evenly items-center lg:max-w-screen-xl mx-auto bg-gray-200">
            {
              productsIntro.map((product) => (
                <ProductCard product={product} key={product.id}/>
              ))
            }
          </div>
          <div className='relative w-full flex justify-center items-center'>
              <Link href="/products">
                  <a className="w-60  block text-md py-2 px-3 mt-5 bg-white rounded-md shadow-md uppercase hover:text-green-500 whitespace-nowrap text-center">{productsPageTranslation.button}</a>
              </Link>
          </div>
        </section>

        {/** APP **/}

        <section id="app" className="relative block w-full h-auto bg-blue-400">
          <article className="w-full h-auto relative flex flex-col justify-center items-center bg-gray-200 py-8">
            <div className="w-full h-auto relative flex justify-center items-center mb-12">
              <h1 className="text-center text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-gray-500 to-gray-300 font-extrabold my-2 uppercase drop-shadow-2xl">
                {appD.title}
              </h1>
            </div>
            <section className="w-full h-auto flex flex-col lg:flex-row lg:items-start justify-center items-center max-w-screen-lg">
              <div className="relative w-1/2 md:w-1/4 h-auto md:mr-8">
                <Image src={appD.bannerImage} layout="responsive" sizes="100%" className="h-full" width={400} height={800}/> 
              </div>
              <div className="block relative w-full md:w-2/4 h-auto">
                <div className='relative w-full flex-wrap p-2 flex flex-col justify-center items-center text-center'>
                  <h1 className="text-3xl font-bold">{appTranslation.title}</h1>
                  <p className="text-lg md:w-2/3 py-4">
                  {appTranslation.description}
                  </p>
                </div>
                <ul className="w-full flex justify-between items-start">
                  <li className="cursor-pointer w-full h-auto bg-gray-300 mr-1 rounded-md shadow-md transition duration-500 ease-in-out  hover:shadow-sm">
                    <Link href="#" target='_blank' rel="noopener noreferrer" passHref>
                      <a className="relative block w-full h-auto" >
                        <div className="relative flex flex-col justify-center items-center p-2">
                          <Image src={appD.appleIcon} width={50} height={50}/>
                          <h3 className="mt-2">Apple Store</h3>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="cursor-pointer w-full h-auto bg-gray-300 mr-1 rounded-md shadow-md transition duration-500 ease-in-out  hover:shadow-sm">
                    <Link href="#" >
                      <a className="relative block w-full h-auto" download>
                        <div className="relative flex flex-col justify-center items-center p-2">
                          <Image src={appD.androidIcon} width={50} height={50}/>
                          <h3 className="mt-2">Play Market</h3>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="cursor-pointer w-full h-auto bg-gray-300 rounded-md shadow-md transition duration-500 ease-in-out  hover:shadow-sm">
                    <Link href="#">
                      <a className="relative block w-full h-auto">
                        <div className="relative flex flex-col justify-center items-center p-2">
                          <Image src={appD.windowsIcon} width={50} height={50}/>
                          <h3 className="mt-2 whitespace-nowrap">Windows Store</h3>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </article>
        </section>
      </section>
    </div>
  )
}


export const getStaticProps = async() => {
  const homeData = getHomeData()
  const appData = getAppData()
  const aboutData = getAboutData()
  const productsIntro = getProductsIntroData()
  const productsPageData = getProductsPageData()

  if(!homeData) {
    return {
      notFound: true
    }
  }
  if(!appData) {
    return {
      notFound: true
    }
  }
  if(!aboutData) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      homeData,
      appData,
      aboutData,
      productsIntro, 
      productsPageData
    }
  }
}

