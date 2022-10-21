import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ImageWithFallback from '../image-with-fallback/image-with-fallback';

export default function HeadingLink({
  className, classNameTitle, classNameLabel, title, label, withBack = false, loading,
}) {
  const router = useRouter();

  return (
    <div className={clsx('flex flex-row justify-start items-center w-full py-4', withBack ? 'space-x-2' : '', className)}>
      {withBack && (
        <div aria-hidden="true" onClick={() => router.back()}>
          <ImageWithFallback src="/icons/icons-previous.png" className="cursor-pointer" />
        </div>
      )}
      <div className="flex flex-col justify-start items-start">
        <span className={clsx('text-black text-xl font-semibold', classNameTitle)}>{title}</span>
        {loading ? (
          <span className="rounded-full bg-light-300 h-4 w-36 animate-pulse" />
        ) : (
          <span className={clsx('text-black text-sm', classNameLabel)}>{label}</span>
        )}
      </div>
    </div>
  );
}

HeadingLink.propTypes = {
  className: PropTypes.string,
  classNameTitle: PropTypes.string,
  classNameLabel: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  withBack: PropTypes.bool,
  loading: PropTypes.bool,
};
