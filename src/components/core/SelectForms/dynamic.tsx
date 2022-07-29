import dynamic from 'next/dynamic';
import selectForms from './index';

const Dynamic = dynamic(import('./index'), {
  ssr: false,
}) as typeof selectForms;

export default Dynamic;
