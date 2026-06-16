import * as React from 'react';

/**
 * Circular icon-only button — social links, compact actions.
 */
export interface IconButtonProps {
  children?: React.ReactNode;
  /** Accessible label (also the tooltip). */
  label?: string;
  href?: string;
  /** @default "outline" */
  variant?: 'outline' | 'solid';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
