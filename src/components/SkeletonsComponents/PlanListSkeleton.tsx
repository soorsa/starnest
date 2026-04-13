const PlanListSkeleton = () => {
  const list = [1, 2, 3];
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {list.map((i) => (
        <div
          key={i}
          className="w-full space-y-2 rounded-3xl p-4 h-full bg-white hover:shadow-sm"
        >
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-lg object-cover bg-gray-300 animate-pulse" />
            <div className="flex-1 text-left space-y-2">
              <div className="h-3 bg-gray-300 animate-pulse w-1/3" />
              <div className="h-3 bg-gray-300 animate-pulse w-2/3" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 text-left">
            <div className="bg-gray-300 animate-pulse h-20" />
            <div className="bg-gray-300 animate-pulse h-20" />
            <div className="bg-gray-300 animate-pulse h-20" />
          </div>
          <div className="bg-gray-300 h-8 animate-pulse" />
        </div>
      ))}
    </div>
  );
};

export default PlanListSkeleton;
