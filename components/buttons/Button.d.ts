import * as React from 'react';

/**
 * Primary call-to-action button. Pink filled by default; outline and ghost variants.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Render as an anchor when set. */
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
