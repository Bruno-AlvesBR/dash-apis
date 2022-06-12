import {
  IPodcastCreate,
  IPodcastProps,
  IPodcastUpdate,
} from '../../../interfaces/IPodcastProps';
import { api } from '../../api';

const delay = (amount: number = 1000) =>
  new Promise(resolve => setTimeout(resolve, amount));

export const findAll = async (): Promise<IPodcastProps[]> => {
  await delay();

  const podcastResponse = await api.get('podcasts');

  return podcastResponse?.data ?? [];
};

export const findById = async (id: string) => {
  await delay();

  const podcastResponse = await api.get(`podcasts/${id}`);

  return podcastResponse?.data ?? {};
};

export const create = async ({
  ...data
}: IPodcastCreate): Promise<IPodcastCreate> => {
  await delay();

  const podcastResponse = await api.post('podcasts/register', data);

  return podcastResponse?.data || {};
};

export const update = async (id: string, data: IPodcastUpdate) => {
  await delay();

  const podcastResponse = await api.put(`podcasts/${id}`, data);

  return podcastResponse?.data || {};
};

export const remove = async (id: string) => {
  await delay();

  const podcastResponse = await api.delete(`podcasts/${id}`);

  return podcastResponse?.data || {};
};
