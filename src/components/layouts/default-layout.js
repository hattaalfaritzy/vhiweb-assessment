import PropTypes from 'prop-types';
import HeaderNavbar from './header/header-navbar';
import Sidebar from './sidebar/sidebar';

export default function DefaultLayout({ children }) {
  return (
    <div id="layout-default">
      <HeaderNavbar />
      <Sidebar />
      <main className="px--default py--default max-w-screen-xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};
