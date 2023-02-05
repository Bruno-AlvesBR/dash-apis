import {
  IPodcastCreate,
  IPodcastProps,
  IPodcastUpdate,
} from '@/interfaces/IPodcastProps';
import { api } from '../../api';

export const findAll = async (): Promise<IPodcastProps[]> => {
  const podcastResponse = await api.get('podcasts');

  return podcastResponse?.data ?? [];
};

export const findById = async (id: string | string[]) => {
  const podcastResponse = await api.get(`podcasts/${id}`);

  return podcastResponse?.data ?? {};
};

export const create = async ({
  ...data
}: IPodcastCreate): Promise<IPodcastCreate> => {
  const podcastResponse = await api.post('podcasts/register', data);

  return podcastResponse?.data || {};
};

export const update = async (id: string, data: IPodcastUpdate) => {
  const podcastResponse = await api.put(`podcasts/${id}`, data);

  return podcastResponse?.data || {};
};

export const remove = async (id: string) => {
  const podcastResponse = await api.delete(`podcasts/${id}`);

  return podcastResponse?.data || {};
};
