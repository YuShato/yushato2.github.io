// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const resources = {
  en: {
    translation: {
      components: {
        header: {
          root: 'Home',
          shop: 'Shop',
          plant: 'Plant Care',
          blogs: 'Blogs',
        },
        productList: {
          empty: 'No products found',
        },
      },
    },
  },
  ru: {
    translation: {
      components: {
        header: {
          root: 'Главная',
          shop: 'Магазин',
          plant: 'Уход за растениями',
          blogs: 'Блог',
        },
        productList: {
          empty: 'Нет товаров',
        },
      },
    },
  },
};
