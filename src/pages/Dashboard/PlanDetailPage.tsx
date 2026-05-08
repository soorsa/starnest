import { CheckCircle, Info, PlusCircle, PlusSquare } from "lucide-react";
import toast from "react-hot-toast";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import ErrorPlaceholder from "../../components/DashboardComponents/ErrorPlaceholder";
import JoinPlanModal from "../../components/DashboardComponents/JoinPlanForm";
import Button from "../../components/GeneralComponent/Button";
import PlanDetailSkeleton from "../../components/SkeletonsComponents/PlanDetailSkeleton";
import { useGetPlanByID } from "../../hooks/querys/useSavingPlan";
import { formatPrice } from "../../utils/formatter";
import { useModal } from "../../zustand/modal.state";
const PlanDetailPage = () => {
  const params = useParams();
  const id = params.id;
  const modal = useModal();
  const { data, isLoading, isError } = useGetPlanByID(Number(id));
  if (isError) {
    return <ErrorPlaceholder title="404" message="Plan Not Found" />;
  }
  if (isLoading) {
    return <PlanDetailSkeleton />;
  }
  const openModal = () => {
    if (data) {
      modal.openModal(<JoinPlanModal plan={data} />);
    } else toast.error("Sorry... could not find plan");
  };
  return (
    <div className="min-h-screen space-y-4">
      <div className="bg-gradient-to-r rounded-2xl to-gray-200 from-white py-8 px-6">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-left">
            <div>
              <div className="flex items-center gap-3 mb-2">
                {/* Plan icon / image – keep consistent with list view */}
                <img
                  src="/happy-family.png"
                  alt="happy-family"
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400 bg-gradient-to-tr from-gray-800 to-gray-200"
                />
                <h1 className="text-xl lg:text-3xl font-starnest-bold text-gray-900 uppercase">
                  {data?.name}{" "}
                  <span className="lowercase text-gray-600">savings plan</span>
                </h1>
              </div>
              <p className="text-sm text-gray-600">{data?.description}</p>
            </div>

            {/* Quick stats pill */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl px-5 py-2 border border-gray-200">
                <p className="text-sm text-green-500">Save</p>
                <p className="text-2xl font-starnest-bold text-green-600">
                  {formatPrice(data?.amount_per_cycle || "")}
                </p>
                <p className="text-sm text-gray-500">
                  {data?.type === "monthly" ? "monthly" : "now"}
                </p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-200">
                <p className="text-sm text-gray-500">Recieve</p>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-starnest-bold text-yellow-600">
                    {formatPrice(data?.expected_total_payment || "")}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Reward after {data?.duration} months
                </p>
              </div>
              <div
                onClick={openModal}
                className="cursor-pointer block md:hidden bg-gradient-to-br hover:bg-gradient-to-bl group from-sky-600 to-sky-900 hover:text-white! rounded-xl px-5 py-3 shadow-sm border border-gray-200"
              >
                <p className="text-sm text-gray-200">Click to Join Plan</p>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-starnest-bold text-white">
                    {formatPrice(data?.amount_per_cycle || "")}
                  </span>
                </div>
                <div className="text-sm flex items-center gap-1 text-gray-200">
                  <PlusSquare size={16} />
                  {formatPrice(2500)} activation fee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Left – Main Info Card (span 2 columns) */}
        <div className="md:col-span-2 space-y-4">
          {/* Progress & Summary Card */}
          <div className="bg-white rounded-2xl p-4 space-y-1">
            <div className="text-left text-xl lg:text-2xl font-starnest-bold">
              About this plan and how to join
            </div>
            <div className="text-gray-500 flex items-center gap-1 text-sm">
              <Info size={18} />
              <div className="">Please watch the video on how it works</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden h-[360px] p-1">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <ReactPlayer
                src="https://youtu.be/G_dvNZgtJoM"
                title="How to register for saving plan"
                width="100%"
                height="100%"
                style={{ position: "absolute", inset: 0 }}
                controls
              />
            </div>
          </div>
          {/* Features / Benefits */}
          <div className="bg-white text-left rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-starnest-mid mb-4 text-gray-600">
              Why join{" "}
              <span className="uppercase text-black font-starnest-bold">
                {data?.name}
              </span>{" "}
              savings plan?
            </h2>
            <ul className="space-y-2 text-sm">
              {data?.benefits.map((benefit, i) => (
                <li className="flex items-center gap-1" key={i}>
                  <CheckCircle size={18} className="text-yellow-500" />
                  <div className="">{benefit}</div>
                </li>
              ))}
            </ul>
          </div>
          {/* Terms / FAQ accordion (optional) */}
        </div>

        {/* Right Sidebar – Action & Quick Info */}
        <div className="space-y-4">
          {/* Join / Contribute Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-yellow-400 sticky top-2">
            <h2 className="text-2xl font-starnest-bold text-center mb-4">
              Join Now
            </h2>

            <div className="text-center mb-6">
              <p className="text-4xl font-starnest-ultra text-yellow-600">
                {formatPrice(data?.amount_per_cycle || "")}
              </p>
              <p className="text-sm text-gray-500">
                {data?.type === "monthly" ? "per month" : ""}
              </p>
            </div>

            <Button
              label="Join This Plan"
              onClick={openModal}
              icon={<PlusCircle />}
              className="text-xl"
            />

            <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1">
              <Info size={14} /> Note: {formatPrice(2500)} activation fee
            </p>
          </div>

          {/* Quick facts mini card */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-starnest-mid mb-3">Quick Facts</h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">Activation fee</dt>
                <dd className="font-medium">{formatPrice(2500)}</dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-gray-500">Maturity Period</dt>
                <dd className="font-medium">{data?.duration} months</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">
                  Saving after {data?.duration} months
                </dt>
                <dd className="font-medium">
                  {formatPrice(data?.total_savings || "")}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">
                  Reward after {data?.duration} months
                </dt>
                <dd className="font-medium">
                  {formatPrice(data?.reward || "")}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Total amount to be recieved</dt>
                <dd className="font-medium">
                  {formatPrice(data?.expected_total_payment || "")}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Active plans</dt>
                <dd className="text-green-600 font-medium">2M+ users</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetailPage;
