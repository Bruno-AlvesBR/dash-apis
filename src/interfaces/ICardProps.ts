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
}
