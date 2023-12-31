import { SizeItemTypes } from '../../buttons/sizes/types';
import { Image } from '../../slider/types';
import { CategoryProps } from '../../text/full-description/categories/types';
import { SocialItemProps } from '../../buttons/product-social/types';
import { FullDescriptionProps } from '../../text/full-description/types';

export interface FullItemProps {
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
