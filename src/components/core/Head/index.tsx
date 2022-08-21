import Head from 'next/head';
import { memo } from 'react';

interface IHeadProps {
  title?: string;
}

const HeadPage: React.FC<IHeadProps> = ({ title }) => (
  <Head>
    <title>Dash {title && `| ${title}`}</title>
  </Head>
);

export default memo(HeadPage);
