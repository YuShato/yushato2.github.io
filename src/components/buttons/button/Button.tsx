import { ButtonProps } from './types';
import CartIcon from './assets/cart';
import FacebookIcon from './assets/facebook';
import GoogleIcon from './assets/google';
import LikeIcon from './assets/like';
import LoginIcon from './assets/login';
import LogoutIcon from './assets/logout';
import React from 'react';
import UiButton from './ui';

const ButtonIcons = {
  facebook: FacebookIcon,
  google: GoogleIcon,
  like: LikeIcon,
  login: LoginIcon,
  logout: LogoutIcon,
  cart: CartIcon,
};

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  viewtype,
  onClick,
  ...props
}: ButtonProps) => {
  const Icon = viewtype !== 'default' ? ButtonIcons[viewtype] : null;

  return (
    <UiButton
      type="button"
      backgroundColor={backgroundColor}
      primary={primary}
      size={size}
      viewtype={viewtype}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon />}

      <span>{label}</span>
    </UiButton>
  );
};
