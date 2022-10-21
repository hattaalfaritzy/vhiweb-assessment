import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Message } from '../../commons';

export default function InputText({
  className,
  label,
  register,
  errors,
  iconLeft,
  iconRight,
  variant = 'default',
  ...props
}) {
  const errMessage = errors[register.name]?.message;

  switch (variant) {
    case 'default':
      return (
        <div className={clsx('flex flex-col w-full space-y-1', className)}>
          {label && <div className="form-label">{label}</div>}
          <div className={clsx('form-control-default border border-light', errMessage && 'form-error')}>
            {iconLeft && <div className="px-2.5 z-10">{iconLeft}</div>}
            <input className={clsx('input-form-default')} {...register} {...props} />
            {iconRight && <div className="px-2.5 z-10">{iconRight}</div>}
          </div>
          {!!errMessage && <Message className="mt-2">{errMessage}</Message>}
        </div>
      );
    case 'animation':
      return (
        <div className={clsx('flex flex-col w-full', className)}>
          <div className="relative flex justify-between items-center w-full">
            <input className={clsx('form-control-title-animation')} {...register} {...props} />
          </div>
          <div className="bg-black h-0.5 relative">
            <div className={clsx('bg-danger absolute flex h-full', errMessage ? 'left-0 transition-[width] duration-1000 w-full' : 'right-0 transition-[width] duration-1000 w-0')} />
          </div>
          {!!errMessage && <Message className="mt-2">{errMessage}</Message>}
        </div>
      );
    default:
      return <div />;
  }
}

InputText.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  register: PropTypes.object.isRequired,
  errors: PropTypes.object,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'title']),
};
