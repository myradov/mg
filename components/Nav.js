import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import logo from '../public/svg.svg'
import close from '../public/close.svg'
import hamburger from '../public/hamburger.svg'

import menu from '../menu.json'

const Nav = () => {
    const router = useRouter()
    const { locale } = router
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    const [menuBg, setMenuBg] = useState('bg-transparent')

    // const handleScroll = (e) => {
    //     window.pageYOffset > 600 ? setMenuBg('bg-white shadow-md'): setMenuBg('bg-transparent')
    // }

    const handleScroll = () => {
        const isScrolled = window.scrollY > 600;
        setMenuBg(isScrolled ? 'bg-white shadow-md' : 'bg-transparent');
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => removeEventListener('scroll', handleScroll)
    },[])

    return (
        <>
            <nav className="fixed z-20 w-full h-16  text-black font-main">
                <div id="menu" className={`relative w-full h-full px-8 flex justify-between items-center ${menuBg} md:${menuBg} lg:${menuBg}`}>
                    <div id="logo" className="relative block w-24 h-10 md:w-28 md:h-10">
                        <Link href="/">
                            <a className="block w-full h-full"> 
                                <Image src={logo} alt="Megafil Logo" layout="fill" sizes="100%" className='object-contain'/>
                            </a>
                        </Link>
                    </div>
                    <ul id="menulist" className="hidden md:flex justify-between items-center w-1/3 h-full">
                        {menu && menu.map(item => (
                            <li className="block" key={item.title}>
                            <Link href={`/${item.title}`}>
                                <a className={router.pathname === `/${item.title}` ? 'block py-3 px-4 hover:text-green-400 whitespace-nowrap text-green-700' : "block py-3 px-4 hover:text-green-400 whitespace-nowrap text-black" }>
                                    {locale === 'en' ? item.translations[0].title : locale === 'ru' ? item.translations[1].title : locale === 'tm' ? item.translations[2].title : ''}
                                </a>
                            </Link>
                            </li>
                        ))}
                    </ul>
                    <div id="locales" className="hidden md:block uppercase text-xs z-20">
                        <ul className="flex justify-between items-center divide-x-2 > * divide-solid divide-black">
                            {
                                router.locales.map((locale) => (
                                    <li className="" key={locale}>
                                        <Link href={router.asPath} locale={locale} scroll={false}>
                                            <a className={`'block py-1 px-2 hover:text-white' ${router.locale === locale ? 'text-green-700' : ''} `}>
                                                {locale}
                                            </a>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div id="hamburger" onClick={showSidebar} className="relative z-10 md:hidden">
                        <Link href="#">
                            <a>
                                {sidebar ? <Image src={close} alt="close button"/> : <Image src={hamburger} alt="hamburger menu"/>}
                            </a>
                        </Link>
                    </div>
                </div>
                <div id="sidenav" className={ sidebar ? "fixed w-full h-auto z-9  transition ease-in-out delay-400 px-4 backdrop-opacity-10" : "-translate-x-full"}>
                    <ul id="menulist" className="relative flex flex-col justify-center items-center bg-gray-100 rounded-md shadow-lg md:hidden uppercase" onClick={showSidebar}>
                        {
                            menu ? menu.map(item => (
                                <li key={item.title} className='relative w-full h-auto p-2 border-b border-gray-200 text-center'>
                                    <Link href={`${item.title}`}>
                                        <a className='text-md'>{item.title}</a>
                                    </Link>
                                </li>
                            )): null
                        }
                    </ul>
                    <div id="locales" className="hidden md:block">
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>en</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>ru</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>tm</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>   
        </>
    )   
}

export default Nav
