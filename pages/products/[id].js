import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { products } from '../../libs/products'
import { getTranslationByLocale } from '../../utils/querylang'


export const ProductPage = ({product}) => {
  const translations = getTranslationByLocale(product)

  return (
    <article className='relative w-full lg:w-3/4 mx-auto h-auto pt-14 flex flex-wrap justify-center items-start border-b border-gray-600'>
      <div className='relative w-full h-64 lg:h-96'>
        <Image src={product.banner} layout="fill" objectFit="contain" objectPosition="center" className="object-cover"/> 
      </div>
      <div className='relative w-full h-auto p-4'>
        <h2 className='text-xl lg:text-2xl font-bold text-center py-2'>{translations.title}</h2>
        {/* <div dangerouslySetInnerHTML={{__html:post.content}} className="text-md lg:text-lg lg:w-2/3 mx-auto mb-4">
        </div> */}
      </div>
    </article>
  )
}

export const getStaticPaths = async ({ locales }) => {
  
  const paths = products.flatMap(product => {
    return locales.map(locale => ({
      params: { id: product.id },
      locale
    }));
  });


  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async ({ params }) => {
  try {
    const { id } = params;

    const stringId = id.toString()
    
    const product = products.find((item) => item.id === stringId);
    
    // Check if the article with the specified ID exists
    if (!product) {
      return {
        notFound: true, // Return a 404 page if the article is not found
      };
    }

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        product: null, // You can also use an empty object {} or handle the error differently
      },
    };
  }
};

export default ProductPage
