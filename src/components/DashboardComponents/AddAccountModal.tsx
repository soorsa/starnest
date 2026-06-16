import {
  ArrowLeft,
  CheckCircle2,
  ChevronRightCircle,
  Star,
  UserCircle,
} from "lucide-react";
import React, { useState } from "react";
import { useAddSubAccount } from "../../hooks/mutations/useSavingPlan";
import { useGetMyReferrals } from "../../hooks/querys/useReferral";
import { useGetEligiblePlansForReferral } from "../../hooks/querys/useSavingPlan";
import { formatPrice } from "../../utils/formatter";
import Button from "../GeneralComponent/Button";
import ListSkeleton from "../SkeletonsComponents/ListSkeleton";
import ErrorPlaceholder from "./ErrorPlaceholder";
interface Prop {
  plan_id: number;
}
const AddAccountModal: React.FC<Prop> = ({ plan_id }) => {
  const { data, isLoading, isError } = useGetMyReferrals();
  const [userId, setuserId] = useState<number>();
  const [planId, setplanId] = useState<number>();
  const {
    data: eligiblePlans,
    isLoading: isLoadingPlans,
    isError: isErrorPlans,
  } = useGetEligiblePlansForReferral(userId);
  const { mutate: addSubAccount, isPending } = useAddSubAccount();
  const addAccount = () => {
    if (planId) {
      const payload = {
        plan_id: plan_id,
        sub_plan_id: planId,
      };
      addSubAccount(payload);
    }
  };
  const Referrals = () => {
    const hasReferals = data?.length || 0 > 0;
    return (
      <div className="hidden sm:block">
        {!hasReferals ? (
          <ErrorPlaceholder
            title="Not Found"
            message="Sorry no referrals found yet"
            size="small"
          />
        ) : (
          <div className="divide-y divide-gray-200">
            {data?.map((user, i) => (
              <div
                onClick={() => setuserId(user.id)}
                className={`cursor-pointer hover:bg-gray-200 divide-x divide-gray-200 p-2 text-sm flex items-center ${
                  userId === user.id &&
                  "bg-gray-600 text-white hover:text-black"
                }`}
                key={i}
              >
                <div className="pr-1">
                  <UserCircle size={20} className="text-gray-500" />
                </div>
                <div className="flex justify-between flex-1 pl-1 items-center">
                  <div className="">{user.fullname}</div>
                  <ChevronRightCircle size={20} className="text-gray-500" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  const MobileViewReferrals = () => {
    const hasReferals = data?.length || 0 > 0;
    if (userId) {
      return null;
    }
    return (
      <div className="sm:hidden">
        {!hasReferals ? (
          <ErrorPlaceholder
            title="Not Found"
            message="Sorry no referrals found yet"
            size="small"
          />
        ) : (
          <div className="divide-y divide-gray-200">
            {data?.map((user, i) => (
              <div
                onClick={() => setuserId(user.id)}
                className={`cursor-pointer hover:bg-gray-200 divide-x divide-gray-200 p-2 text-sm flex items-center ${
                  userId === user.id &&
                  "bg-gray-600 text-white hover:text-black"
                }`}
                key={i}
              >
                <div className="pr-1">
                  <UserCircle size={20} className="text-gray-500" />
                </div>
                <div className="flex justify-between flex-1 pl-1 items-center">
                  <div className="">{user.fullname}</div>
                  <ChevronRightCircle size={20} className="text-gray-500" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  const MobileViewUserPlans = () => {
    if (!userId) {
      return null;
    }
    return (
      <div className="block sm:hidden ">
        <div className="flex mb-2">
          <Button
            onClick={() => {
              setuserId(undefined);
              setplanId(undefined);
            }}
            label="Go Back"
            icon={<ArrowLeft size={18} />}
            className="bg-transparent hover:bg-gray-800 hover:text-white! rounded-full pr-3 py-1! border border-gray-400 text-black! w-fit! px-2 text-sm"
          />
        </div>
        {isLoadingPlans && isErrorPlans ? (
          <ListSkeleton length={5} />
        ) : (
          <UserPlans />
        )}
      </div>
    );
  };
  const DestopViewUserplans = () => {
    return (
      <div className="hidden sm:block ">
        <div className="flex mb-2">
          <Button
            onClick={() => {
              setuserId(undefined);
              setplanId(undefined);
            }}
            label="Go Back"
            icon={<ArrowLeft size={18} />}
            className="bg-transparent hover:bg-gray-800 hover:text-white! rounded-full pr-3 py-1! border border-gray-400 text-black! w-fit! px-2 text-sm"
          />
        </div>
        {isLoadingPlans && isErrorPlans ? (
          <ListSkeleton length={5} />
        ) : (
          <UserPlans />
        )}
      </div>
    );
  };
  const UserPlans = () => {
    if (!userId) {
      return (
        <ErrorPlaceholder
          title="Select a user"
          message="No user selected"
          size="small"
        />
      );
    }
    const length = eligiblePlans?.length || 0;
    const hasPlans = length > 0;
    if (!hasPlans) {
      return (
        <ErrorPlaceholder
          title="No Plan Accounts"
          message="This person does not have any plans available for you."
          size="small"
        />
      );
    }
    return (
      <div className="divide-y divide-gray-200">
        {eligiblePlans?.map((plan, i) => (
          <div
            className={`relative hover:bg-gray-200 p-2 flex items-start gap-2 cursor-pointer`}
            key={i}
            onClick={() => setplanId(plan.id)}
          >
            {planId === plan.id && (
              <div className="inset-0 absolute bg-black/60 text-white backdrop-blur-[2px] rounded-lg flex gap-1.5 items-center justify-center">
                <CheckCircle2 size={18} />
                <div className="">Selected</div>
              </div>
            )}
            <div
              className={`flex justify-center items-center p-1 rounded-md border bg-yellow-500 border-yellow-500 text-white`}
            >
              <Star />
            </div>
            <div className="flex-1 text-left text-xs">
              <div className="uppercase">{plan.name} plan</div>
              <div className="flex justify-between w-full">
                <div className="">
                  <div className="text-gray-500 text-[10px]">Hands:</div>
                  <div className="">{plan.hands} hands</div>
                </div>
                <div className="">
                  <div className="text-gray-500 text-[10px]">Reward:</div>
                  <div className="">{formatPrice(plan.reward)}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="sm:min-h-[40vh] w-xl max-w-xs sm:max-w-xl flex flex-col">
      <div className="text-left mb-2">
        <h2 className="font-starnest-bold text-xl text-left uppercase">
          Add Account
        </h2>
        <div className="text-xs text-gray-500">
          Select user you referred and the plan account you want to add.
        </div>
      </div>
      <div className="grid sm:grid-cols-3 flex-1">
        <div className="text-left sm:border-r border-gray-300 pr-0 sm:pr-2 mt-3 ">
          {isLoading && isError ? (
            <ListSkeleton length={5} />
          ) : (
            <>
              <Referrals />
              <MobileViewReferrals />
            </>
          )}
        </div>
        <div className="sm:col-span-2 sm:min-h-[200px] pl-0 sm:pl-2 flex flex-col justify-between ">
          <MobileViewUserPlans />
          <DestopViewUserplans />
          <div className="grid grid-cols-2 gap-1 text-sm mt-3">
            <Button label="Cancel" className="rounded-lg!" />
            <Button
              label="Add Account"
              onClick={addAccount}
              isLoading={isPending}
              disabled={!planId || isPending}
              className="bg-yellow-500 rounded-lg! text-black!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccountModal;
