import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/svg.svg'
import gmail from '../public/gmail_gray.svg'
import insta from '../public/instagram_gray.svg'
import menu from '../menu.json'
import { useRouter } from 'next/router'

const Footer = () => {
    const { locale } = useRouter()
    return (
        <>
            <footer className="block w-full h-auto relative text-green-600">
                <section className="w-full h-auto py-4 flex flex-col justify-between items-center bg-gray-800">
                    <div id="flogo" className="w-1/4  flex justify-center">
                        <Link href="#">
                            <a className="relative h-auto">
                                <Image src={logo} width={100} height={30}/>
                            </a>
                        </Link>
                    </div>
                    <div id="fmenu" className="w-2/4 mb-2">
                        <ul className="flex justify-center items-center text-center text-sm">
                            {
                                menu && menu.map((item) => (
                                    <li className="m-1 text-gray-500 hover:text-green-600" key={item.title}>
                                        <Link href={`/${item.title}`}>
                                            <a className="p-2 whitespace-nowrap">
                                                {locale === 'en' ? item.translations[0].title : locale === 'ru' ? item.translations[1].title : locale === 'tm' ? item.translations[2].title : 'nothing'}
                                            </a>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div id="fsocial" className="w-1/4 h-auto flex-col justify-center items-center">
                        <ul className="w-full flex justify-center items-center mb-1">
                            <li className="mr-4 relative block transform hover:scale-105">
                                <Link href="#">
                                    <a className="relative">
                                        <Image src={insta} width={30} height={30}/>
                                    </a>
                                </Link>
                            </li>
                            <li className="relative block transform hover:scale-105">
                                <Link href="#">
                                    <a>
                                        <Image src={gmail} width={30} height={30}/>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="relative block w-full h-auto py-4 bg-gray-900 text-green-700">
                    <span className="flex justify-center text-xs">All rights reserved</span>
                </section>
            </footer>
        </>
    )
}

export default Footer
