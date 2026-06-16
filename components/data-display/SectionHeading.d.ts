import * as React from 'react';

/**
 * Section opener: eyebrow label + large display title + optional subtitle.
 */
export interface SectionHeadingProps {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** @default "left" */
  align?: 'left' | 'center';
  /** Override eyebrow + tick color (e.g. a gray tone). Defaults to brand pink. */
  eyebrowColor?: string;
  style?: React.CSSProperties;
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
