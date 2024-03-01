import { homeD, appD } from '../libs/home.js'; // Adjust the path accordingly
import { aboutD } from '../libs/about.js'; // Adjust the path accordingly
import { contactsD } from '../libs/contacts.js'; // Adjust the path accordingly
import { newsD, newsPosts } from '../libs/news.js'; // Adjust the path accordingly
import { productsIntro, productsPage } from '../libs/products.js'; // Adjust the path accordingly

export const getHomeData = () => {
  return homeD;
}

export const getAppData = () => {
    return appD;
}

export const getAboutData = () => {
    return aboutD;
}

export const getContactsData = () => {
    return contactsD;
}


export const getNewsData = () => {
    return newsD
}

export const getNewsPostsData = () => {
    return  newsPosts
}

export const getProductsIntroData = () => {
    return  productsIntro
}

export const getProductsPageData = () => {
    return  productsPage
}
