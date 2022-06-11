export interface IPodcastProps {
  id?: string;
  title?: string;
  members?: string[];
  thumbnail?: string;
  description?: string;
  file?: {
    url?: string;
    type?: string;
    duration?: number;
  };
  publishedAt?: string;
  createdAt?: string;
}
