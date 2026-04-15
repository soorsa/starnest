const Shimmer = () => {
  return (
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  );
};

const DashboardLayoutSkeleton = () => {
  return (
    <div className="fixed inset-0 z-50 flex w-screen h-screen scrollbar-hide">
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      {/* Sidebar Skeleton */}
      <aside className="hidden w-[300px] bg-white p-4 md:flex flex-col relative overflow-hidden">
        <Shimmer />
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gray-100 rounded-full" />
            <div className="h-6 w-24 bg-gray-100 rounded" />
          </div>

          <div className="space-y-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3">
                <div className="w-5 h-5 bg-gray-100 rounded" />
                <div className="h-4 w-32 bg-gray-100 rounded" />
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3 p-3 border-t border-gray-50 pt-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full" />
              <div className="flex-1">
                <div className="h-4 w-24 bg-gray-100 rounded mb-2" />
                <div className="h-3 w-32 bg-gray-100 rounded" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Skeleton */}
      <main className="flex-1 overflow-y-auto bg-white md:pb-5 px-2 scrollbar-hide relative overflow-hidden">
        <Shimmer />

        {/* Header Skeleton */}
        <div className="bg-white border-b border-gray-50 py-4 px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="md:hidden w-8 h-8 bg-gray-100 rounded-lg" />
              <div className="h-6 w-40 bg-gray-100 rounded" />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-100 rounded-full" />
              <div className="w-8 h-8 bg-gray-100 rounded-full" />
              <div className="hidden md:block w-8 h-8 bg-gray-100 rounded-full" />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-primary rounded-4xl min-h-[85vh] max-h-[85vh] overflow-y-auto scrollbar-hide pb-15 md:pb-0">
          <div className="py-5 px-2 md:px-5">
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <div className="h-6 w-48 bg-white/20 rounded" />
                <div className="h-10 w-32 bg-white/20 rounded-lg" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-6 space-y-3 relative overflow-hidden"
                  >
                    <Shimmer />
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="h-4 w-24 bg-gray-100 rounded mb-2" />
                        <div className="h-8 w-32 bg-gray-100 rounded" />
                      </div>
                      <div className="w-10 h-10 bg-gray-100 rounded-full" />
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded" />
                    <div className="flex justify-between">
                      <div className="h-3 w-20 bg-gray-100 rounded" />
                      <div className="h-3 w-16 bg-gray-100 rounded" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-4 mt-6 relative overflow-hidden">
                <Shimmer />
                <div className="h-6 w-40 bg-gray-100 rounded mb-4" />
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-3 border-b border-gray-50"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-full" />
                      <div className="flex-1">
                        <div className="h-4 w-32 bg-gray-100 rounded mb-2" />
                        <div className="h-3 w-48 bg-gray-100 rounded" />
                      </div>
                      <div className="h-8 w-20 bg-gray-100 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav Skeleton */}
      <div className="fixed bottom-0 w-full md:hidden bg-white border-t border-gray-50 py-2 px-4 overflow-hidden">
        <Shimmer />
        <div className="flex justify-around items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 bg-gray-100 rounded" />
              <div className="w-4 h-3 bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayoutSkeleton;
