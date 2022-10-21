/* eslint-disable jsx-a11y/control-has-associated-label */
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Fragment, useRef } from 'react';
import { MdArrowBack, MdClose } from 'react-icons/md';

function Modal({
  onBack,
  title,
  classNameOverlay,
  className,
  replaceClassName,
  children,
  onRequestClose,
  isOpen = false,
  hideCloseIcon,
}) {
  const initialFocusRef = useRef();

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        initialFocus={initialFocusRef}
        as="div"
        className="fixed inset-0 z-modal overflow-y-auto"
        onClose={onRequestClose || (() => {})}
      >
        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className={clsx('fixed inset-0 bg-dark-black bg-opacity-30', classNameOverlay)}
              onClick={onRequestClose || (() => {})}
            />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={clsx(
							  replaceClassName
									|| 'inline-block px-4 sm:px-7 py-7 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg w-full max-w-xl',
							  className,
              )}
            >
              {title && (
              <div className="flex justify-between items-center border-b border-neutral-7 pb-6">
                <div className="flex items-center">
                  {typeof onBack === 'function' && (
                  <div className="flex items-center">
                    <div className="mr-4 border-2 border-neutral-7 rounded-lg h-7 w-7 items-center justify-center flex">
                      <MdArrowBack size={14} className="text-neutral-5 cursor-pointer" onClick={onBack} />
                    </div>
                  </div>
                  )}
                  <h3 className="font-semibold">{title}</h3>
                </div>
                {!hideCloseIcon && (
                <MdClose size={24} className="text-action-neutral cursor-pointer" onClick={onRequestClose} />
                )}
              </div>
              )}

              <div className="w-full pt-4">{children}</div>

              {/* Fix Dialog throws error if there are no focusable elements */}
              <button ref={initialFocusRef} className="absolute bottom-0 opacity-0" type="submit" onClick={() => {}} />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

Modal.propTypes = {
  onBack: PropTypes.func,
  classNameOverlay: PropTypes.string,
  className: PropTypes.string,
  replaceClassName: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
  isOpen: PropTypes.bool,
  hideCloseIcon: PropTypes.bool,
};

export default Modal;
