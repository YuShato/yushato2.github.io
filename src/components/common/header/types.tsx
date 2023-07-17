import { UiNavListLinkProps } from './ui';

export type User = {
  name: string;
};

export interface HeaderProps {
  onCreateAccount: () => void;
  onLogin: () => void;
  onLogout: () => void;
  user?: User;
}

export interface NavLinkItemProps extends UiNavListLinkProps {
  active?: boolean;
  path: {
    id: number;
    interfaceName: string;
    pathLink: string;
    icon?: () => React.JSX.Element;
  };
}
