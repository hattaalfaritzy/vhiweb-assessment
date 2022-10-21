import PropTypes from 'prop-types';
import { useState } from 'react';
import { ImageWithFallback } from '../components/commons';
import Button from '../components/commons/button/button';
import Modal from '../components/commons/modal/modal';

export default function useAlert(initialIsOpen, { initialData, onRequestClose } = {}) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [modalData, setModalData] = useState(initialData || {});

  const open = (data) => {
    setModalData(data);
    setTimeout(() => {
      setIsOpen((prevStateIsOpen) => {
        if (prevStateIsOpen) { // If modal is already opened, close first then open it again
          setTimeout(() => {
            setIsOpen(true);
          }, 200);
          return false;
        }
        return true;
      });
    }, 300);
  };

  const close = () => {
    if (onRequestClose) onRequestClose();
    setIsOpen(false);
  };

  const props = {
    isOpen,
    onRequestClose: close,
  };

  return {
    open,
    close,
    props,
    data: modalData,
  };
}

export function Alert({
  type = 'success', title, description, labelPrimaryButton, onClickPrimaryButton, chidlren, ...props
}) {
  const alertIcon = {
    success: '/icons/check-circle.svg',
  }[type];

  return (
    <Modal {...props} className="max-w-lg">
      <div className="flex flex-col items-center space-y-4">
        {!!alertIcon && (
          <ImageWithFallback src={alertIcon} />
        )}

        <div className="flex flex-col justify-center items-center w-full space-y-1">
          {!!title && (<div className="text-base leading-none">{title}</div>)}
          {!!description && (
            <div className="text-sm leading-none text-primary">{description}</div>
          )}
        </div>

        {!!labelPrimaryButton && (
          <Button label={labelPrimaryButton} className="w-full" onClick={onClickPrimaryButton || props.onRequestClose} />
        )}

      </div>
    </Modal>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success']),
  title: PropTypes.string,
  description: PropTypes.string,
  labelPrimaryButton: PropTypes.string,
  onClickPrimaryButton: PropTypes.func,
  chidlren: PropTypes.node,
  onRequestClose: PropTypes.func,
};
