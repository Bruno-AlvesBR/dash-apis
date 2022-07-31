export interface IVideoProps {
  id?: string;
  title?: string;
  description?: string;
  file?: {
    url?: string;
    type?: string;
    image?: string;
  };
  rating?: number;
  duration?: number;
  createdAt?: string;
}

export interface IVideoBody {
  id?: string;
  title?: string;
  description?: string;
  fileUrl?: string;
  fileType?: string;
  fileImage?: string;
  rating?: number;
  duration?: number;
}

export interface IVideoUpdate {
  id: string;
  data: IVideoBody;
}
