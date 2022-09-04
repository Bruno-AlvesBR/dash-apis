import { ReactNode } from "react";

export interface ICardProps {
  id?: string;
  title?: string;
  description?: string;
  slug?: string;
  desktopSrc?: string;
  createdAt?: string;
  contentCreatedAt?: string;
  type?: string;
  handleClick?(slug?: string, type?: string): void;
  isPriority?: boolean;
  playButton?: ReactNode;
}
