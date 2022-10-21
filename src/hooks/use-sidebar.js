/**
 * useSidebar hooks
 * @module hooks/use-sidebar
 */

/**
 * @typedef {object} useSidebar
 * @property {function} openSidebar
 * @property {function} closeSidebar
 * @property {function} toggleSidebar
 */

/**
 * @returns {useSidebar}
 */
function useSidebar() {
  const openSidebar = () => {
    document.getElementById('layout-default')
      .classList.add('sidebar-expanded');
  };

  const closeSidebar = () => {
    document.getElementById('layout-default')
      .classList.remove('sidebar-expanded');
  };

  const toggleSidebar = () => {
    document.getElementById('layout-default')
      .classList.toggle('sidebar-expanded');
  };

  return {
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
}

export default useSidebar;
