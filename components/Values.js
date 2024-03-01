import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Values = ({value}) => {
    const { locale } = useRouter()
    const v = locale === 'en' ? value.translations[0] : locale === 'ru' ? value.translations[1] : locale === 'tm' ? value.translations[2] : ''

  return (
    <>
        <li className="relative flex md:flex-col justify-center items-start w-full md:w-1/2 md:px-2 py-1 mb-1">
            <div className='flex justify-center w-1/4 md:justify-start'>
                <Image src={`http://localhost:8055/assets/${value?.icon.id}`} width={40} height={40}/>
            </div>
            <div className='flex-1'>
              <h2 className="font-bold text-lg">{v?.v_title}</h2>
              <p className="text-md">{v?.v_text}</p>
            </div>
        </li>
    </>
  )
}
