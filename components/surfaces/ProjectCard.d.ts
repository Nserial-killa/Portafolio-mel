import * as React from 'react';

/**
 * Project tile: media (image or autoplay video) + title + description + tech tags.
 * The core unit of the Proyectos section.
 */
export interface ProjectCardProps {
  /** Image URL (used when no video). */
  image?: string;
  /** Video URL — autoplays muted & looped, takes priority over image. */
  video?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Tech / discipline tags rendered as soft Badges. */
  tags?: string[];
  href?: string;
  style?: React.CSSProperties;
}

export function ProjectCard(props: ProjectCardProps): JSX.Element;
