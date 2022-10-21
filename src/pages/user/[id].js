import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useData from '../../hooks/use-data';
import DefaultLayout from '../../components/layouts/default-layout';
import SectionDetailUser from '../../components/sections/user/detail-user';

export default function DetailUser() {
  const { getDetailUser, detailUser, loading } = useData();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getDetailUser(id);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <SectionDetailUser data={detailUser?.data} loading={loading} />
    </div>
  );
}

DetailUser.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
