import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

function Dropdown({
  placeholder, options, value = {}, onChange,
  className,
  classNameDropdown = 'w-full origin-top',
  classsNameLabel = 'truncate text-left text-primary-terteriary',
  classNameActiveLabel = 'text-primary-primary',
  classNameIcon = 'text-2xl',
}) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className="w-full rounded-lg"
        title={value?.label}
      >
        {({ open }) => (
          <div className={clsx(
            'h-10 w-full px-3 bg-white border rounded-lg flex items-center',
            open ? 'border-primary ring-1 ring-primary' : 'border-primary-quaternary',
            className,
          )}
          >
            <div
              className={clsx(
                'flex-1',
                classsNameLabel,
                value?.label && classNameActiveLabel,
              )}
            >{value?.label || placeholder}
            </div>
            {options.length > 0 && (
              <div>
                {open
                  ? <MdExpandLess className={clsx('text-primary-terteriary ml-1.5', classNameIcon)} />
                  : <MdExpandMore className={clsx('text-primary-terteriary ml-1.5', classNameIcon)} />}
              </div>
            )}
          </div>
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            'absolute z-dropdown right-0 mt-2 py-2 bg-white rounded ring-1 ring-dark-quaternary px-2',
            options.length < 1 && 'hidden',
            classNameDropdown,
          )}
        >
          <i />
          {options.map(({ isActive, ...option }) => (
            <Menu.Item key={option.value || option.label}>
              {({ active }) => (
                <button
                  type="button"
                  className={clsx(
                    'flex items-center w-full text-left px-4 py-2 rounded',
                    isActive ? 'bg-primary-0.5' : (active && !option.disabled && 'bg-primary-0.1'),
                    option.disabled && 'text-light-secondary',
                    option.className,
                  )}
                  onClick={() => onChange(option.isOptionToReset ? {} : option)}
                  disabled={option.disabled}
                >
                  {option.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

Dropdown.propTypes = {
  placeholder: PropTypes.node,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.object,
  onChange: PropTypes.func,
  className: PropTypes.string,
  classNameDropdown: PropTypes.string,
  classsNameLabel: PropTypes.string,
  classNameActiveLabel: PropTypes.string,
  classNameIcon: PropTypes.string,
};

export default Dropdown;
