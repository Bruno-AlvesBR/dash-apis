export interface ICardProps {
  id?: string;
  title?: string;
  description?: string;
  slug?: string;
  desktopSrc?: string;
  createdAt?: string;
  contentCreatedAt?: string;
  handleClick?(slug?: string): void;
}
