import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const HeadPages: React.FC = () => {
  const { pathname } = useRouter();

  const pagePath = useMemo(() => {
    const location = pathname.split('/')[1];

    const formatedLocationName = location
      .split('')
      .map((char, index) =>
        index === 0 ? char.toUpperCase() : char,
      );

    if (!formatedLocationName?.length) return 'Dashboard';

    return formatedLocationName;
  }, [pathname]);

  return (
    <Head>
      <title>{pagePath}</title>
    </Head>
  );
};

export { HeadPages };
