import { IVideoBody, IVideoProps } from '@/interfaces/IVideoProps';
import { api } from '@/services/api';

const create = async (data: IVideoBody): Promise<IVideoProps> => {
  const videosResponse = await api.post('videos/create', data);

  return videosResponse?.data ?? {};
};

const findAll = async (): Promise<IVideoProps[]> => {
  const videosResponse = await api.get('videos/');

  return videosResponse?.data ?? [];
};

const findById = async (id: string | string[]): Promise<IVideoProps> => {
  const videosResponse = await api.get(`videos/${id}`);

  return videosResponse?.data ?? {};
};

const remove = async (id: string): Promise<IVideoProps> => {
  const videosResponse = await api.delete(`videos/${id}`);

  return videosResponse?.data ?? {};
};

const update = async (
  id: string,
  data: IVideoBody,
): Promise<IVideoProps> => {
  const videosResponse = await api.put(`videos/${id}`, data);

  return videosResponse?.data ?? {};
};

export { create, findAll, findById, update, remove };
