import { NavLinkItemProps } from './types';
import { PATHS } from './utils/constants/paths';
import React from 'react';
import UiHeader from './ui';
// eslint-disable-next-line import/named
import { WithTranslation, withTranslation } from 'react-i18next';
import { t } from 'i18next';

const NavLinkItem = ({ path, active = false }: WithTranslation & NavLinkItemProps) => {
  const { interfaceName, pathLink, icon: Icon } = path;

  return (
    <UiHeader.NavItem href={pathLink} active={active}>
      <Icon />

      <span> {t(interfaceName)}</span>
    </UiHeader.NavItem>
  );
};

export const NavLink = withTranslation()(NavLinkItem);

const NavListComponent = () => {
  return (
    <UiHeader.Nav>
      {PATHS.map((path) => (
        <NavLink key={path.id} path={{ ...path, interfaceName: path.interface }} active={path.id === 0} />
      ))}
    </UiHeader.Nav>
  );
};

export default NavListComponent;
