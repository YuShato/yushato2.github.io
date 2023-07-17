import BlogsIcon from '../../assets/icons/blogs';
import HomeIcon from '../../assets/icons/home';
import PlantIcon from '../../assets/icons/plant';
import ShopIcon from '../../assets/icons/shop';

export const PATHS = [
  { id: 0, pathLink: '/', interface: 'components.header.root', icon: HomeIcon },
  { id: 1, pathLink: '/shop', interface: 'components.header.shop', icon: ShopIcon },
  { id: 2, pathLink: '/plant-care', interface: 'components.header.plant', icon: PlantIcon },
  { id: 3, pathLink: '/blogs', interface: 'components.header.blogs', icon: BlogsIcon },
];
