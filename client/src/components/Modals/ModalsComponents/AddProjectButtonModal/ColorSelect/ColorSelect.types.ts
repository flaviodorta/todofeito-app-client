import React from 'react';

export interface Props {
  setSelectColorValue: (e: any) => void;
  onClick?: (e: React.MouseEvent) => void;
  backgroundRef: React.RefObject<HTMLDivElement>;
}

export interface ContainerProps {
  isFocus: boolean;
}
