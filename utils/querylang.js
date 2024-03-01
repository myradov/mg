import { useRouter } from "next/router";


export const getTranslationByLocale = (item) => {
    const { locale } = useRouter()
    
    switch (locale) {
        case 'en':
          return item.lang[0];
        case 'tm':
          return item.lang[1];
        case 'ru':
          return item.lang[2];
        default:
          return null;
    }
}
