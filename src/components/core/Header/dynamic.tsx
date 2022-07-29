import dynamic from 'next/dynamic';
import header from './index';

const Dynamic = dynamic(import('./index'), {
  ssr: false,
}) as typeof header;

export default Dynamic;
