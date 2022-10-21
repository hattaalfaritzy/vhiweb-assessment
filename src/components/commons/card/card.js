import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function Card({ className, children, onClick }) {
  if (!children) return null;

  return (
    <div aria-hidden="true" className={clsx('flex shadow-md bg-white rounded-lg p-6', className)} onClick={onClick}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
