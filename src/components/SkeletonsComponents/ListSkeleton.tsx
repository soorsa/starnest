import React from "react";
interface Prop {
  length?: number;
}
const ListSkeleton: React.FC<Prop> = ({ length = 4 }) => {
  return (
    <div className="space-y-2 animate-pulse">
      {Array.from({ length: length }).map((_, index) => (
        <div className="flex gap-1" key={index}>
          <div className="h-7 w-7 rounded-full bg-gray-300" />
          <div className="h-7 flex-1 rounded-lg bg-gray-300 " />
        </div>
      ))}
    </div>
  );
};

export default ListSkeleton;
