import React from 'react'

export const About = () => {
  return (
    <section className="relative bg-white h-screen flex justify-start items-center overflow-hidden" id="about">
        <div className="relative block w-4/12 z-10 left-36 top-0 h-full">
        <Image src={Img2}  layout="fill" className="absolute"/>
        </div>
        <div className="absolute right-0 bottom-50 z-5 p-12 w-2/3 h-full flex justify-center items-center bg-gray-400">
        <div className="relative w-2/3 h-full flex flex-col justify-center items-start text-left">
            <h2 className="text-5xl font-bold my-2 uppercase">About us</h2>
            <p className="text-lg my-2 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda!Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda!Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Link href='/about'>
            <a className="w-32 text-center mt-2 h-auto py-2 px-3 whitespace-nowrap border bottom-0 rounded-md">Read more</a>
            </Link>
        </div>
        </div>
    </section>
  )
}
