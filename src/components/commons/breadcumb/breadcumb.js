import clsx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { FiChevronRight } from 'react-icons/fi';

function Breadcrumb({
  className, routes,
}) {
  return (
    <div className={clsx('flex justify-start items-center max-w-max', className)}>
      {routes?.filter((a) => a)?.map((item, index) => {
        if (item.href) {
          return (
            <Link href={item.href} key={item.label}>
              <a className={clsx('flex items-center font-semibold text-sm')}>
                {index !== 0 && <FiChevronRight size={18} className="text-primary" />}
                <span className="px-1">{item.label}</span>
              </a>
            </Link>
          );
        }
        return (
          <div key={item.label} className={clsx('flex items-center font-semibold text-sm text-primary cursor-default')}>
            {index !== 0 && <FiChevronRight size={18} className="text-primary" />}
            <span className={clsx(index === 0 ? '' : 'px-1')}>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

Breadcrumb.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.array,
};

export default Breadcrumb;
