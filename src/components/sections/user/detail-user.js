import { HeadingLink, ImageWithFallback, ListForm } from '../../commons';

export default function SectionDetailUser({ data, loading }) {
  return (
    <div className="flex flex-col w-full space-y-4">
      <HeadingLink title="Detail User" label={`${data?.first_name} ${data?.last_name}`} loading={loading} withBack />
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-start space-y-6 lg:space-y-0 space-x-0 lg:space-x-4">
        <div className="flex border border-light p-4 w-full lg:w-auto">
          {loading ? (
            <span className="rounded bg-light-300 w-full h-40 lg:w-40 animate-pulse" />
          ) : (
            <ImageWithFallback src={data?.avatar} className="w-full h-full lg:h-40 lg:w-40" />
          )}
        </div>
        <div className="flex flex-col justify-start items-start space-y-4">
          <ListForm title="First Name" label={data?.first_name} loading={loading} />
          <ListForm title="Last Name" label={data?.last_name} loading={loading} />
          <ListForm title="Email" label={data?.email} loading={loading} />
        </div>
      </div>
    </div>
  );
}
