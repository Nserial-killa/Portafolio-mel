import * as React from 'react';

/**
 * Certification card: framed certificate image + issuer/title caption, lightbox-ready.
 */
export interface CertCardProps {
  /** Certificate image URL. */
  image: string;
  title: React.ReactNode;
  /** Issuing organization (e.g. "Canva"). */
  issuer?: React.ReactNode;
  date?: React.ReactNode;
  /** Called on click — wire to a lightbox. Sets cursor to zoom-in. */
  onView?: () => void;
  style?: React.CSSProperties;
}

export function CertCard(props: CertCardProps): JSX.Element;
