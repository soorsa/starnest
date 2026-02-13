import { formatPrice } from "../../utils/formatter";

const ProfileSummary = () => {
  return (
    <div className="bg-white p-2 rounded-3xl">
      <div className="">
        <div className="w-full h-30 bg-amber-300 rounded-2xl relative">
          <div className="absolute -bottom-10 left-4">
            <img
              src="/happy-family.png"
              alt="user"
              className="h-30 w-30 rounded-full border-7 border-white shadow-sm object-cover"
            />
            <div className="mt-2">Mike Milligan</div>
          </div>
        </div>
        <div className="divide-y divide-gray-300 p-4 mt-8">
          <div className="grid grid-cols-3 text-sm gap-y-2 py-2">
            <div className="text-left text-gray-600">Age</div>
            <div className="col-span-2 text-right">35</div>
            <div className="text-left text-gray-600">City</div>
            <div className="col-span-2 text-right">Lagos</div>
            <div className="text-left text-gray-600">Country</div>
            <div className="col-span-2 text-right">Nigeria</div>
            <div className="text-left text-gray-600">Phone</div>
            <div className="col-span-2 text-right">234892489248</div>
            <div className="text-left text-gray-600">Email</div>
            <div className="col-span-2 text-right">example@email.com</div>
          </div>
          <div className="grid grid-cols-3 text-sm gap-y-2 py-2">
            <div className="text-left text-gray-600">Balance</div>
            <div className="col-span-2 text-right">{formatPrice(27500)}</div>
            <div className="text-left text-gray-600">Exp. profit</div>
            <div className="col-span-2 text-right">{formatPrice(51700)}</div>
            <div className="text-left text-gray-600">Active Plans</div>
            <div className="col-span-2 text-right">4</div>
            <div className="text-left text-gray-600">Penalty</div>
            <div className="col-span-2 text-right">{formatPrice(6000)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
