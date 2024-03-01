import React from 'react'
import Head from 'next/head'

//components
import Nav from '../components/Nav.js'
import Footer from '../components/Footer.js'


const siteTitle = 'Megafil'

const MainLayout = ({children}) => {
    return (
        <>
        <Head>
            <meta
            name="description"
            content="Megafil"
            />
            <meta
                property="og:image"
                content={`https://og-image.now.sh/${encodeURI(
                siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" /> 
            <title>{siteTitle}</title> 
            </Head>
            <Nav />
                <main className="relative font-main">{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout
