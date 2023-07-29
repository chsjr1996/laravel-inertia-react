import React from 'react';

type TypographyProps = {
  children: React.ReactNode;
};

export const Typography: React.FC<TypographyProps> = ({ children }) => {
  return <p>{children}</p>;
};
