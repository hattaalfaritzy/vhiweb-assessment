import clsx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';
import ImageWithFallback from '../image-with-fallback/image-with-fallback';

export default function Logo({ className }) {
  return (
    <Link href="/">
      <ImageWithFallback src="/images/logo-vhiweb.svg" className={clsx('cursor-pointer', className)} />
    </Link>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};
