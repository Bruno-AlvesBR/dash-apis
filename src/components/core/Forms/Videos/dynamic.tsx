import dynamic from 'next/dynamic';
import VideosForm from './index';

const Dynamic = dynamic(() => import('./index'), {
  ssr: false,
}) as typeof VideosForm;

export default Dynamic;
