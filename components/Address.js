import React from 'react'
import { useRouter } from 'next/router'

export const Address = ({address, onClick}) => {
    const { locale } = useRouter()
    // const a = locale === 'en' ? address.translations[0] : locale === 'ru' ? address.translations[1] : locale === 'tm' ? address.translations[2] : ''

    
  return (
    <>
         <li className='mx-1 bg-gray-100 p-2 w-1/2 cursor-pointer hover:bg-gray-200 shadow-sm' onClick={() => onClick(address)}>
            <address className='flex flex-col items-stretch not-italic'>
                <h3 className='text-lg font-bold'>{address.city} city</h3>
                <p className=''>{address.details}</p>
                <p>Phone: {address.phone}</p>
            </address>
        </li>
    </>
  )
}
