import dynamic from 'next/dynamic';
import podcastForm from './index';

const Dynamic = dynamic(import('./index'), {
  ssr: false,
}) as typeof podcastForm;

export default Dynamic;
