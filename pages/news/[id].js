import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getNewsPostsData } from '../../utils/queryData'
import { newsPosts } from '../../libs/news'
import { getTranslationByLocale } from '../../utils/querylang'


export const NewsArticle = ({article}) => {

  const articleTranslations = getTranslationByLocale(article)
  // const { locale } = useRouter()
  // const post = locale === 'en' ? article.lang[0] : locale === 'tm' ? article.lang[1] : locale === 'ru' ? article.lang[2] : null
  
  return (
    <article className='relative w-full lg:w-3/4 mx-auto h-auto pt-14 flex flex-wrap justify-center items-start border-b border-gray-600'>
      <div className='relative w-full h-64 lg:h-96'>
        <Image src={article.banner} layout="fill" objectFit="contain" objectPosition="center" className="object-cover"/> 
      </div>
      <div className='relative w-full h-auto p-4'>
        <h2 className='text-xl lg:text-2xl font-bold text-center py-2'>{articleTranslations.title}</h2>
        {/* <div dangerouslySetInnerHTML={{__html:post.content}} className="text-md lg:text-lg lg:w-2/3 mx-auto mb-4">
        </div> */}
      </div>
    </article>
  )
}

// export const getStaticPaths = async({locales}) => {
//   const res = await fetch(`${process.env.BASE_URL}/news`)
//   const articles = await res.json()

//   const paths = []
//   for(let locale of locales){
//     articles.data.map((article) => paths.push({params : {id : article.id.toString() }, locale}))
//   }

//   return {
//     paths,
//     fallback: false
//   }
// }

// export const getStaticProps = async({params}) => {
//   const { id } = params
//   const res = await fetch(`${process.env.BASE_URL}/news/${id}?fields=id,banner.*,translations.*`)
//   const article = await res.json()

//   return {
//     props: {
//       article
//     }
//   }
// }

export const getStaticPaths = async ({ locales }) => {
  
  const paths = newsPosts.flatMap(article => {
    return locales.map(locale => ({
      params: { id: article.id },
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
    
    const article = newsPosts.find((item) => item.id === stringId);
    
    // Check if the article with the specified ID exists
    if (!article) {
      return {
        notFound: true, // Return a 404 page if the article is not found
      };
    }

    // const article = newsData[id];

    return {
      props: {
        article,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        article: null, // You can also use an empty object {} or handle the error differently
      },
    };
  }
};

export default NewsArticle


