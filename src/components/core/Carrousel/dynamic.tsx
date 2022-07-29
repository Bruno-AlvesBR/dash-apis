import dynamic from 'next/dynamic';
import carrousel from './index';

const Dynamic = dynamic(import('./index'), {
  ssr: false,
}) as typeof carrousel;

export default Dynamic;
