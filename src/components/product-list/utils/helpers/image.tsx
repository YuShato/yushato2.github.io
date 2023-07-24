type Image = {
  id: number;
  src: string;
  alt: string;
};

const getRandomImages = (images: Image[], count: number): Image[] => {
  const randomImages: Image[] = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImages.push(images[randomIndex]);
  }

  return randomImages;
};

export default getRandomImages;
