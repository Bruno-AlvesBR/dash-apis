import NextLink, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface ILinkProps extends LinkProps {
  href: string;
  passHref?: boolean;
  target?: string;
  children?: ReactNode;
  onClick?(): void;
  dataTestId?: string;
}

const Link: React.FC<ILinkProps> = ({
  href,
  children,
  target,
  onClick,
  dataTestId,
  ...props
}) => (
  <NextLink
    data-testid={dataTestId}
    passHref
    href={String(href)}
    {...props}
  >
    {children}
  </NextLink>
);

export default Link;
