import Head from 'next/head';
import { ReactNode } from 'react';

interface IHeadProps {
  children?: ReactNode;
}

const HeadPage: React.FC<IHeadProps> = ({ children }) => (
  <Head>{children}</Head>
);

export default HeadPage;
