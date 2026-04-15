import { useState } from "react";
import FeedsList from "../../components/DashboardComponents/FeedsList";
import FilterBar from "../../components/DashboardComponents/FilterBar";
import Paginator from "../../components/DashboardComponents/Paginator";
import { useGetFeeds } from "../../hooks/querys/useFeeds";

const Notifications = () => {
  const [params, setparams] = useState({
    page: 1,
  });
  const { data, isLoading, isError } = useGetFeeds(params);
  const feeds = data?.results ?? [];
  return (
    <div>
      <div className="space-y-1 py-10">
        <h1 className="text-3xl font-starnest-bold">Anouncements</h1>
        <p className="text-sm">
          Find all announcements, updates and details here.
        </p>
        <div className="lg:w-[60%] mx-auto">
          <FilterBar />
        </div>
      </div>
      <div className="">
        <FeedsList posts={feeds} isError={isError} isLoading={isLoading} />
        <Paginator
          currentPage={params.page}
          totalPages={Math.ceil((data?.count || 0) / 20)}
          onPageChange={(page) => setparams((prev) => ({ ...prev, page }))}
        />
      </div>
    </div>
  );
};

export default Notifications;
