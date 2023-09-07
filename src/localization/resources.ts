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
          profile: 'Profile',
          cart: 'Cart',
          modal: 'Modal',
        },
        productList: {
          empty: 'No products found',
          off: 'OFF',
          currency: '$',
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
          profile: 'Профиль',
          cart: 'Корзина',
          modal: 'Модальное окно',
        },
        productList: {
          empty: 'Нет товаров',
          off: 'СКИДКА',
          currency: '₽',
        },
      },
    },
  },
};
