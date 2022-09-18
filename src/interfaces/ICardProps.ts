import { ReactNode } from "react";

export interface ICardProps {
  id?: string;
  title: string;
  description?: string;
  desktopSrc?: string;
  createdAt?: string;
  contentCreatedAt?: string;
  onClick?(): void;
  isPriority?: boolean;
  playButton?: ReactNode;
  url: string;
}
