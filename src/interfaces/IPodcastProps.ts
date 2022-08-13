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

export interface IPodcastCreate {
  id?: string;
  title?: string;
  members?: string[];
  thumbnail?: string;
  fileDescription?: string;
  fileUrl?: string;
  fileType?: string;
  duration?: number;
}

export interface IPodcastUpdate {
  id?: string;
  title?: string;
  members?: string[];
  thumbnail?: string;
  description?: string;
  fileDescription?: string;
  fileUrl?: string;
  fileType?: string;
}
