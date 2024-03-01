const servicesD = {
    id: '1',
    page: 'services',
    banner: '/contactus.jpg',
    lang: [
        {
            id: '1',
            code: 'en',
            title: 'Services',
            description: 'Welcome to our Contacts page! We value your feedback, inquiries, and suggestions, and we\'re here to assist you in any way we can. Whether you have questions about our products, need assistance with an order, or simply want to say hello, we\'re eager to hear from you. Feel free to reach out using the contact information provided below.',
            details:{
                title: 'Contact Information:',
                // address: 'Parahat 2', 
                phone: '45-33-73', 
                email: 'megafiltm@sanly.tm / megafiltm@mail.ru',
            },
            socials: 'Follow us on social media',
        },
        {
            id: '2',
            code: 'tm',
            title: 'Hyzmatlarymyz',
            description: 'Aragatnaşyklar sahypamyza hoş geldiňiz! Pikirleriňize, soraglaryňyza we teklipleriňize ýokary baha berýäris. Önümlerimiz hakda, sargyt etmek barada soraglaryňyz bar bolsa aşakda görkezilen aragatnaşyk maglumatlary ulanyp biz bilen habarlaşyp bilersiňiz.',
            details:{
                title: 'Aragatnaşyk maglumatlar:',
                // address: 'Parahat 2', 
                phone: '45-33-73', 
                email: 'megafiltm@sanly.tm / megafiltm@mail.ru',
            },
            socials: 'Sosial mediýada bizi yzarlaň',
        },
        {
            id: '3',
            code: 'ru',
            title: 'Наши услуги',
            description: 'Добро пожаловать на нашу страницу контактов! Мы ценим ваши отзывы, запросы и предложения и готовы помочь вам всем, чем сможем. Если у вас есть вопросы о нашей продукции, вам нужна помощь с заказом или вы просто хотите поздороваться, мы будем рады услышать ваше мнение. Смело обращайтесь, используя контактную информацию, указанную ниже.',
            details:{
                title: 'Контактная информация:',
                // address: 'Parahat 2', 
                phone: '45-33-73', 
                email: 'megafiltm@sanly.tm / megafiltm@mail.ru',
            },
            socials: 'Следите за нами в социальных сетях',
        }
    ]
};

const locations = {
    id: '1',
    coords: [
        {addresslat: "37.903299", addresslng: "58.381460"}, 
        {addresslat: "39.518561", addresslng: "54.339540"},
        {addresslat: "37.609516", addresslng: "61.852505"},
        {addresslat: "37.907311", addresslng: "58.506063"},
    ],
    lang: [
        {
            id: '1',
            code: 'en',
            title: 'Our locations',

        }
    ]
}

export { servicesD, locations }