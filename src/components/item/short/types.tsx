import { Image } from '../../../components/slider/types';

export interface ShortItemProps {
  id: string;
  data: {
    oldPrice?: number;
    newPrice?: number;
    discount: number;
    title: string;
    images: Array<Image> | [];
    description?: string;
    onAddToCart: () => void;
    onAddToFavorite: () => void;
  };
}
