import { BadgeCheck } from "lucide-react";
import type React from "react";
import { calculateAge, formatPrice } from "../../utils/formatter";
import UserProfileCardSkeleton from "../SkeletonsComponents/ProfileSummarySkeleton";
interface Prop {
  data?: DetailedUser;
  isLoading: boolean;
  isError: boolean;
}
const ProfileSummary: React.FC<Prop> = ({ data, isError, isLoading }) => {
  if (isLoading || isError) {
    return <UserProfileCardSkeleton />;
  }
  return (
    <div className="bg-white p-2 rounded-3xl min-h-[80vh] max-h-[80vh] overflow-y-auto scrollbar-hide">
      <div className="">
        <div className="w-full h-30 bg-amber-400 rounded-2xl px-2 flex items-center">
          <div className="flex items-center gap-2">
            <img
              src={data?.profile_picture || "/happy-family.png"}
              alt="user"
              className="h-26 w-26 rounded-full border-7 border-white shadow-sm object-cover"
            />
            <div className="text-left text-white font-starnest-mid ">
              <div className="flex items-center gap-1">
                <div className="">
                  {data?.first_name} {data?.last_name}
                </div>
                {data?.is_verified && <BadgeCheck size={18} />}
              </div>
              <div className="text-sm text-white/70">{data?.email}</div>
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-300 p-4">
          <div className="grid grid-cols-3 text-sm gap-y-2 py-2">
            <div className="text-left text-gray-600">Age</div>
            <div className="col-span-2 text-right">
              {data?.date_of_birth
                ? `${calculateAge(data?.date_of_birth || "")} yrs`
                : "..."}
            </div>
            <div className="text-left text-gray-600">City</div>
            <div className="col-span-2 text-right">{data?.state || "..."}</div>
            <div className="text-left text-gray-600">Country</div>
            <div className="col-span-2 text-right">
              {data?.country || "..."}
            </div>
            <div className="text-left text-gray-600">Phone</div>
            <div className="col-span-2 text-right">
              {data?.phone_number || "..."}
            </div>
            <div className="text-left text-gray-600">Email</div>
            <div className="col-span-2 text-right">{data?.email || "..."}</div>
          </div>
          <div className="grid grid-cols-3 text-sm gap-y-2 py-2">
            <div className="text-left text-gray-600">Balance</div>
            <div className="col-span-2 text-right">
              {formatPrice(data?.total_savings || 0)}
            </div>
            <div className="text-left text-gray-600">Exp. profit</div>
            <div className="col-span-2 text-right">
              {formatPrice(data?.total_recieveable || 0)}
            </div>
            <div className="text-left text-gray-600">Active Plans</div>
            <div className="col-span-2 text-right">{data?.total_plans}</div>
            <div className="text-left text-gray-600">Deposits</div>
            <div className="col-span-2 text-right">
              {formatPrice(data?.date_joined || 0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
