import dynamic from 'next/dynamic';
import Form from './index';

const Dynamic = dynamic(import('./index'), {
  ssr: false,
}) as typeof Form;

export default Dynamic;
