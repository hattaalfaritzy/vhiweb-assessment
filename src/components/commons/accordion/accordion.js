import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Disclosure } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';

function Accordion({
  defaultOpen, className, title, children,
}) {
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <div className="mb-4">
          <Disclosure.Button className={clsx('flex justify-between items-center w-full py-2 border-b', className)}>
            <span className={clsx('h4', className)}>{title}</span>
            <HiOutlineChevronDown size={20} className={`text-primary-terteriary cursor-pointer ${open ? 'transform rotate-180' : ''}`} />
          </Disclosure.Button>
          <Disclosure.Panel className="pt-4">
            {children}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

Accordion.propTypes = {
  defaultOpen: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Accordion;
