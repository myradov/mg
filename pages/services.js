import DynamicMap from '../components/DynamicMap'; // replace '../components/DynamicMap' with the path to your DynamicMap component
import { getTranslationByLocale } from '../utils/querylang'
import { servicesD } from '../libs/services';


function Services({servicesD}) {

  const servicesTranslation = getTranslationByLocale(servicesD)

  return (
    <div className='relative container max-w-screen-lg mx-auto py-24'>
      <section className="relative block w-full h-auto">
        <main className="relative w-full h-auto flex flex-col md:flex-row justify-center items-end">
            <article className="relative flex flex-1 flex-col justify-center items-center w-full md:w-1/2 h-auto md:h-full text-center px-4 mb-6 md:px-10 pt-4 bg-opacity-75 order-last md:order-first">
                {/* <div className="relative w-full h-auto flex flex-col justify-start items-center mb-6"> */}
                    <h1 className="text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-500 to-gray-300 font-extrabold my-8 uppercase drop-shadow-2xl">{servicesTranslation.title}</h1>
                    <p className="w-full relative block text-md italic">{servicesTranslation.description}</p>
                {/* </div> */}
            </article>
        </main>
      </section>
      <DynamicMap />
    </div>
  );
}

export default Services;


export const getStaticProps = async() => {

  if(!servicesD){
    return{
      notFound: true,
    }
  }

  return {
      props:{
          servicesD
      }
  }
}