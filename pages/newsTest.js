import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import postImg from '../public/app.jpeg'
import postImg2 from '../public/news1.jpg'
import postImg3 from '../public/news2.jpg'

const NewsTest = () => {
    return (
        <>
             <section className="relative block w-full h-auto py-16" id="news">
                 <header className="w-full h-60 relative flex flex-col justify-center items-center">
                     <h1 className="text-4xl font-bold my-2">Welcome to the News page</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, praesentium?</p>
                 </header>
                <main className="relative w-full h-auto flex justify-center items-center">   
                    <ul className="relative w-full h-auto flex items-center justify-evenly flex-wrap max-w-screen-xl mx-auto">
                        <li className="block w-1/3 h-auto bg-white m-3 max-w-sm">
                            <Link href="#">
                                <a className="flex flex-col justify-center items-start">
                                    <div className="block relative w-full h-auto rounded-md">
                                        <Image src={postImg} width={600} height={390} layout="responsive" className="rounded-md"/>
                                    </div>
                                    <div className="relative flex flex-col justify-center items-start px-2">
                                        <h2 className="text-lg font-bold mb-1">Title of the post</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.</p>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="block w-1/3 h-auto bg-white m-3 max-w-sm">
                            <Link href="#">
                                <a className="flex flex-col justify-center items-start">
                                    <div className="block relative w-full h-auto rounded-md">
                                        <Image src={postImg2} width={600} height={390} layout="responsive" className="rounded-md"/>
                                    </div>
                                    <div className="relative flex flex-col justify-center items-start px-2">
                                        <h2 className="text-lg font-bold mb-1">Title of the post</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.</p>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="block w-1/3 h-auto bg-white m-3 max-w-sm">
                            <Link href="#">
                                <a className="flex flex-col justify-center items-start">
                                    <div className="block relative w-full h-auto rounded-md">
                                        <Image src={postImg3} width={600} height={390} layout="responsive" className="rounded-md"/>
                                    </div>
                                    <div className="relative flex flex-col justify-center items-start px-2">
                                        <h2 className="text-lg font-bold mb-1">Title of the post</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.</p>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="block w-1/3 h-auto bg-white m-3 max-w-sm">
                            <Link href="#">
                                <a className="flex flex-col justify-center items-start">
                                    <div className="block relative w-full h-auto rounded-md">
                                        <Image src={postImg} width={600} height={390} layout="responsive" className="rounded-md"/>
                                    </div>
                                    <div className="relative flex flex-col justify-center items-start px-2">
                                        <h2 className="text-lg font-bold mb-1">Title of the post</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.</p>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="block w-1/3 h-auto bg-white m-3 max-w-sm">
                            <Link href="#">
                                <a className="flex flex-col justify-center items-start">
                                    <div className="block relative w-full h-auto rounded-md">
                                        <Image src={postImg} width={600} height={390} layout="responsive" className="rounded-md"/>
                                    </div>
                                    <div className="relative flex flex-col justify-center items-start px-2">
                                        <h2 className="text-lg font-bold mb-1">Title of the post</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.</p>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </main>
            </section>
        </>
    )
}

export default NewsTest