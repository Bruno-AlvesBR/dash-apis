import { GetStaticProps, NextPage } from 'next';

import { LoggedHome } from '@/components/pages/Home/LoggedHome';

const Index: NextPage = () => <LoggedHome />;

export default Index;

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 60 * 60 * 24,
});
