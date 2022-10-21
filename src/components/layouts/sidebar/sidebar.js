import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { NAV_MENU } from '../../../constant/layout';
import useAuth from '../../../hooks/use-auth';
import useSidebar from '../../../hooks/use-sidebar';
import { Button, Logo } from '../../commons';

export default function Sidebar() {
  const { toggleSidebar, closeSidebar } = useSidebar();
  const { logout } = useAuth();

  return (
    <aside>
      <div className="flex flex-col justify-between w-full h-screen overflow-y-auto p-6">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center mb-4">
            <button onClick={closeSidebar} type="button" className="flex flex-row justify-start items-end space-x-1">
              <Logo />
              <span className="text-sm leading-none">Assessment Test</span>
            </button>
            <MdClose onClick={toggleSidebar} className="text-black hover:text-primary on-hover text-2xl cursor-pointer" />
          </div>
          <div className="flex flex-col border-primary-primary border-opacity-10 border-y py-3">
            {NAV_MENU.map((menu) => (
              <Link href={menu.href} key={menu.label}>
                <button className="text-base text-left py-3 text-black hover:text-primary on-hover" onClick={closeSidebar} type="button">
                  {menu.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
        <Button type="button" variant="danger" onClick={logout} label="Logout" />
      </div>
    </aside>
  );
}
