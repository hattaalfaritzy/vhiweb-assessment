import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { MdOutlineBrokenImage } from 'react-icons/md';

export default function ImageWithFallback({
  src, alt, className, iconFallback, ...props
}) {
  const [isError, setIsError] = useState();

  useEffect(() => {
    setIsError(false);
  }, [src]);

  return isError
    ? (
      <div className={clsx('bg-dark-quaternary justify-center flex', className)}>
        {iconFallback || <MdOutlineBrokenImage className={clsx('text-white text-3xl m-auto')} />}
      </div>
    ) : (
      <img id={src} src={src || ''} alt={alt} className={className} {...props} onError={() => setIsError(true)} />
    );
}

ImageWithFallback.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  iconFallback: PropTypes.node,
};
