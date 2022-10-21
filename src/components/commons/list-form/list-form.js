import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function ListForm({
  className, title, label, loading,
}) {
  return (
    <div className={clsx('flex flex-col justify-start items-start space-y-1', className)}>
      <span className="text-black text-sm leading-none font-semibold">{title} :</span>
      {loading ? (
        <span className="rounded-full bg-light-300 h-4 w-36 animate-pulse" />
      ) : (
        <span className="text-black text-xs leading-none font-medium">{label}</span>
      )}
    </div>
  );
}

ListForm.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool,
};
