import { useEffect } from 'react';
import DefaultLayout from '../../components/layouts/default-layout';
import ListUser from '../../components/sections/user/list-user';
import useData from '../../hooks/use-data';

export default function User() {
  const { getDataUser, user } = useData();

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <ListUser data={user} />
    </div>
  );
}

User.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
