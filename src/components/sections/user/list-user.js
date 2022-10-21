import { useRouter } from 'next/router';
import { Card, HeadingLink, ImageWithFallback } from '../../commons';

export default function ListUser({ data }) {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full">
      <HeadingLink title="List User" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data ? data.map((item) => (
          <Card className="p-4 cursor-pointer hover:bg-primary-300 on-hover" onClick={() => router.push(`/user/${item.id}`)}>
            <div className="flex flex-row justify-start items-center w-full space-x-4">
              <ImageWithFallback src={item.avatar} className="h-10 w-10 rounded-full" />
              <div className="flex flex-col justify-between items-start">
                <span className="text-black text-sm font-semibold">{item.first_name} {item.last_name}</span>
                <span className="text-black text-xs">{item.email}</span>
              </div>
            </div>
          </Card>
        )) : (
          <div className="flex flex-col justify-center items-center w-full h-full bg-red-200">
            <ImageWithFallback src="/images/no-data.png" />
            <span className="text-black text-base">No Data Users</span>
          </div>
        )}
      </div>
    </div>
  );
}
