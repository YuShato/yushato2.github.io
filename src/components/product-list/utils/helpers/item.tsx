import { images } from '../../../../components/slider/mockData';
import { Image } from '../../../../components/slider/types';
import getRandomImages from './image';
const { v4: uuidv4 } = require('uuid');

type GeneratedData = {
  id: string;
  data: {
    oldPrice?: number;
    newPrice?: number;
    discount: number | null;
    title: string;
    description?: string;
    images: Array<Image> | [];
  };
};

// const generateRandomText = (length: number): string => {
//   const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let title = '';

//   while (title.length < length) {
//     const remainingLength = length - title.length;
//     const wordLength = Math.min(remainingLength, Math.floor(Math.random() * 15) + 1);
//     let word = '';

//     for (let i = 0; i < wordLength; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       word += characters[randomIndex];
//     }

//     title += word;

//     if (title.length < length) {
//       const separator = Math.random() < 0.5 ? ' ' : '-';
//       title += separator;
//     }
//   }

//   return title;
// };

const generateRandomText = (length: number, lang: 'en' | 'ru'): string => {
  let characters: string;

  if (lang === 'en') {
    characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else {
    characters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  }

  let title = '';

  while (title.length < length) {
    const remainingLength = length - title.length;
    const wordLength = Math.min(remainingLength, Math.floor(Math.random() * 15) + 1);
    let word = '';

    for (let i = 0; i < wordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      word += characters[randomIndex];
    }

    title += word;

    if (title.length < length) {
      const separator = Math.random() < 0.5 ? ' ' : '-';
      title += separator;
    }
  }

  return title;
};

const generateRandomData = (count: number, lang: 'ru' | 'en'): GeneratedData[] => {
  const generatedData: GeneratedData[] = [];

  for (let i = 0; i < count; i++) {
    const randomOldPrice = Math.floor(Math.random() * 1000) + 1;
    const randomNewPrice = Math.floor(Math.random() * 1000) + 1;
    const randomTitleLength = Math.floor(Math.random() * 91) + 10;
    const randomDescriptionLength = Math.floor(Math.random() * 201) + 100;
    const imagesLength = Math.floor(Math.random() * images.length) + 1;

    const id = uuidv4();

    const item: GeneratedData = {
      id,
      data: {
        oldPrice: randomOldPrice,
        newPrice: randomNewPrice,
        discount:
          randomOldPrice > randomNewPrice
            ? Math.floor(((randomOldPrice - randomNewPrice) / randomOldPrice) * 100)
            : null,
        title: generateRandomText(randomTitleLength, lang),
        description: generateRandomText(randomDescriptionLength, lang),
        images: getRandomImages(images, imagesLength),
      },
    };

    generatedData.push(item);
  }

  return generatedData;
};

export default generateRandomData;
