import { MdMenu } from 'react-icons/md';
import { Logo } from '../../commons';
import useSidebar from '../../../hooks/use-sidebar';
import useAuth from '../../../hooks/use-auth';

function HeaderNavbar() {
  const { toggleSidebar } = useSidebar();
  const { logout } = useAuth();

  return (
    <header className="header">
      <div className="relative flex flex-row justify-between items-center px--default max-w-screen-xl mx-auto w-full h-full space-x-4 hide-mobile">
        <div className="flex flex-row justify-start items-end space-x-1">
          <Logo />
          <span className="text-sm leading-none">Assessment Test</span>
        </div>
        <span aria-hidden="true" className="text-base text-black leading-none hover:text-danger on-hover cursor-pointer" onClick={logout}>
          Logout
        </span>
      </div>
      <div className="flex flex-row justify-between items-center px--default max-w-screen-xl mx-auto w-full h-full space-x-4 hide-website">
        <div className="flex flex-row justify-start items-end space-x-1">
          <Logo />
          <span className="text-sm leading-none">Assessment Test</span>
        </div>
        <button type="button" onClick={toggleSidebar}>
          <MdMenu className="text-2xl text-black hover:text-primary on-hover" />
        </button>
      </div>
    </header>
  );
}

export default HeaderNavbar;
