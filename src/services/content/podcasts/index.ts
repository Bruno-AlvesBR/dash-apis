import { IPodcastProps } from '../../../interfaces/IPodcastProps';
import { api } from '../../api';

const delay = (amount = 1000) =>
  new Promise(resolve => setTimeout(resolve, amount));

export const findAll = async (): Promise<IPodcastProps[]> => {
  await delay();

  const podcastsResponse = await api.get('podcasts');

  return podcastsResponse?.data ?? [];
};

export const findById = async (id: string) => {
  await delay();

  const podcastResponse = await api.get(`podcasts/${id}`);

  return podcastResponse?.data ?? {};
};
