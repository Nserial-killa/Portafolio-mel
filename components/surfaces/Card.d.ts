import * as React from 'react';

/**
 * Base glass surface for the dark canvas. Hairline border, optional glow + hover lift.
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Lift + pink border on hover. @default false */
  interactive?: boolean;
  /** Always render the pink glow. @default false */
  glow?: boolean;
  /** CSS padding. @default "var(--space-6)" */
  padding?: string;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
