import React, { FC } from 'react';

export type TitleProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactElement | React.ReactNode;
  required?: boolean;
};

export const Title: FC<TitleProps> = ({ className, required, ...props }) => <div {...props} />;
