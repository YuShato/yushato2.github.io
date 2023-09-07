import BlogsIcon from '../../assets/icons/blogs';
import HomeIcon from '../../assets/icons/home';
import PlantIcon from '../../assets/icons/plant';
import ShopIcon from '../../assets/icons/shop';

export const PATHS = [
  { id: 0, pathLink: '/', interface: 'components.header.root', icon: HomeIcon },
  { id: 1, pathLink: '/products', interface: 'components.header.shop', icon: ShopIcon },
  { id: 2, pathLink: '/profile', interface: 'components.header.profile', icon: PlantIcon },
  { id: 3, pathLink: '/cart', interface: 'components.header.cart', icon: BlogsIcon },
  { id: 3, pathLink: '/modal', interface: 'components.header.modal', icon: BlogsIcon },
];
