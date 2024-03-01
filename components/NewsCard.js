import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const NewsCard = ({ article }) => {
  const { locale } = useRouter();

  // Simplified language selection
  const getTranslationByLocale = () => {
    switch (locale) {
      case 'en':
        return article.lang[0];
      case 'tm':
        return article.lang[1];
      case 'ru':
        return article.lang[2];
      default:
        return null;
    }
  };

  const translation = getTranslationByLocale();

  // Additional error handling
  if (!article || !article.lang || !translation) {
    // Handle cases where article or translation data is missing
    return null; // Or render a placeholder or error message
  }

  return (
    <>
      <li className="block w-full md:w-1/3 h-auto bg-white m-1 max-w-sm border-b py-2 hover:border-green-500">
        <Link href={`/news/${article.id}`} locale={locale}>
          <a className="flex flex-col justify-center items-start">
            <div className="block relative w-full h-auto rounded-md">
              <Image
                src={article.banner}
                width={600}
                height={390}
                layout="responsive"
                className="rounded-md object-cover"
              />
            </div>
            <div className="relative flex flex-col justify-center items-start px-2">
              <h2 className="text-lg font-bold mb-1">{translation.title}</h2>
              <p>{translation.description}</p>
            </div>
          </a>
        </Link>
      </li>
    </>
  );
};
