import {
  foodService,
  podcastService,
  videoService,
} from '@/services/index';

class ProductsAllController {
  async index() {
    const foods = await foodService?.findAll();
    const podcasts = await podcastService?.findAll();
    const videos = await videoService?.findAll();

    return {
      foods,
      podcasts,
      videos,
    };
  }
}

export { ProductsAllController };
