import { CategoryProps } from '../../../components/text/categories/types';
import { FullDescriptionProps } from '../../text/full-description/types';
import { Image } from '../../slider/types';
import { SizeItemTypes } from '../../buttons/sizes/types';
import { SocialItemProps } from '../../buttons/product-social/types';

export interface FullItemProps {
  id: number;
  data: {
    name: string;
    price: number;
    itemCount: number;
    activeSize: 's' | 'm' | 'l' | 'xl';
    sizes: SizeItemTypes[];
    reviewCount: number;
    rating: number;
    sku: number;
    categories: Array<CategoryProps> | [];
    productSocial: [] | SocialItemProps[];
    images: Array<Image> | [];
    tags: Array<CategoryProps> | [];
    shortDescription: string;
    fullDescription?: FullDescriptionProps;
    onAddToCart: () => void;
    onAddToFavorite: () => void;
  };
}
