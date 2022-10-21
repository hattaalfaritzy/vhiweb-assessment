import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import ImageWithFallback from '../image-with-fallback/image-with-fallback';

function Avatar({
  className, variant = 'default', replaceClassNameAvatar, data = {},
}) {
  switch (variant) {
    case 'default':
      return (
        <div className={clsx('flex flex-row justify-start items-center space-x-4', className)}>
          {data.name && (
            <p className="text-primary text-sm">{data.name}</p>
          )}
          <ImageWithFallback
            alt="avatar"
            src={data.avatar}
            className={clsx(replaceClassNameAvatar || 'rounded-full object-cover w-10 h-10')}
            iconFallback={<FaUserCircle className={clsx('text-primary')} />}
          />
        </div>
      );
    case 'reserve':
      return (
        <div className={clsx('flex flex-row justify-start items-center space-x-2', className)}>
          <ImageWithFallback
            alt="avatar"
            src={data.avatar}
            className={clsx(replaceClassNameAvatar || 'rounded-full object-cover w-10 h-10')}
            iconFallback={<FaUserCircle className={clsx('text-primary')} />}
          />
          {data.name && (
            <p className="text-primary text-sm">{data.name}</p>
          )}
        </div>
      );
    default:
      return (
        <div className={clsx('flex flex-row justify-start items-center space-x-4', className)}>
          {data.name && (
            <p className="text-primary text-sm">{data.name}</p>
          )}
          <ImageWithFallback
            alt="avatar"
            src={data.avatar}
            className={clsx(replaceClassNameAvatar || 'rounded-full object-cover w-10 h-10')}
            iconFallback={<FaUserCircle className={clsx('text-primary')} />}
          />
        </div>
      );
  }
}

Avatar.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'reserve']),
  replaceClassNameAvatar: PropTypes.string,
  data: PropTypes.array,
};

export default Avatar;
