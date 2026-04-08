import { UserSquare2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
interface Prop {
  user: DetailedUser;
}
const UserItem: React.FC<Prop> = ({ user }) => {
  const user_name =
    user.first_name && user.last_name
      ? `${user.first_name} ${user.last_name}`
      : user.username;
  return (
    <Link
      to={`/admin/users/${user.id}`}
      className="flex divide-x divide-gray-600 odd:bg-gray-900 px-4 py-2 rounded-lg text-sm"
    >
      <UserSquare2 className="pr-1" size={40} />
      <div className="pl-1 flex-1 text-left">
        <div className="grid grid-cols-2">
          <div className="">{user_name}</div>
          <div className="text-right">{user.plans.length} active plan(s)</div>
        </div>
        <div className="grid grid-cols-3 text-gray-300 text-xs">
          <div className="">{user.email}</div>
          <div className="col-span-2 text-right">
            {user.total_hands} hand(s)
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserItem;
