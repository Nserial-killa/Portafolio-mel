import * as React from 'react';

/**
 * Pill label for skills, project tech tags, statuses.
 */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "soft" */
  variant?: 'soft' | 'solid' | 'outline';
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
