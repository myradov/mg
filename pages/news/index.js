import React from 'react'

import { NewsCard } from '../../components/NewsCard'
import { useRouter } from 'next/router'

import { getNewsData, getNewsPostsData } from '../../utils/queryData'
import { newsPosts } from '../../libs/news'
import { getTranslationByLocale } from '../../utils/querylang'

const News = ({news, posts}) => {

    const newsTranslation = getTranslationByLocale(news)
    const {locale}  = useRouter()
    const nd = locale === 'en' ? news.lang[0] : locale === 'tm' ? news.lang[1] : locale === 'ru' ? news.lang[2] : null
    // const np = locale === 'en' ? newsPage.data.translations[0] : locale === 'ru' ? newsPage.data.translations[1] : locale === 'tm' ? newsPage.data.translations[2] : null
    return (
        <>
             <section className="relative block flex flex-col justify-evenly items-center w-full h-auto md:py-16 py-16 px-4 min-h-screen" id="news">
                 <header className="w-full h-auto relative flex flex-col justify-center items-center">
                     <h1 className="text-4xl lg:text-5xl py-8 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-500 to-gray-200 font-extrabold my-2 uppercase drop-shadow-2xl">{newsTranslation?.title}</h1>
                     <p className='text-lg italic mt-4'>{newsTranslation?.description}</p>
                 </header>
                <main className="relative w-full h-auto flex justify-center items-center">   
                    <ul className="relative w-full h-auto flex items-center justify-evenly flex-wrap max-w-screen-xl mx-auto">
                        {
                            posts.map((article) => (
                                <NewsCard article={article} key={article.id}/>
                            ))
                        }
                    </ul>
                </main>
            </section>
        </>
    )
}

export default News

// export const getStaticProps = async() => {

//   // news articles request
//   const res = await fetch(`${process.env.BASE_URL}/news?fields=id,banner.*,translations.*`)
//   const news = await res.json()

//   if(!news) {
//     return {
//         notFound: true
//     }
//   }

//   // news page text request
//   const resNewsPage = await fetch(`${process.env.BASE_URL}/news_page?fields=id,translations.*`)
//   const newsPage = await resNewsPage.json()

//   if(!resNewsPage){
//     return {
//         notFound: true
//     }
//   }

//   return {
//     props: {
//       news, 
//       newsPage
//     },
//     revalidate: 30
//   }
// }


export const getStaticProps = async() => {
    const newsData = getNewsData();
    const newsPostsData = getNewsPostsData();

    if(!newsData) {
        return {
            notFound: true
        }
    }
    if(!newsPostsData) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            news: newsData,
            posts: newsPosts
        }
    }
}