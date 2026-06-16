import { LogOut } from "lucide-react";
import { useLogout } from "../../hooks/auth/useAuth";
import { useModal } from "../../zustand/modal.state";
import Button from "../GeneralComponent/Button";

const LogoutModal = () => {
  const { mutate: logout, isPending } = useLogout();
  const modal = useModal();
  return (
    <div className="w-xs space-y-10">
      <div className="">
        <div className="bg-red-100 p-4 my-2 rounded-full w-fit mx-auto text-red-500 flex justify-center items-center">
          <LogOut size={35} />
        </div>
        <div className="font-starnest-mid text-lg sm:text-xl">Logout</div>
        <div className="text-gray-700">Are you sure you want to logout?</div>
      </div>
      <div className="grid grid-cols-2 gap-1 sm:gap-2">
        <Button
          label="No, cancel"
          className="border border-gray-300 bg-transparent text-black!"
          disabled={isPending}
          onClick={modal.closeModal}
        />
        <Button
          label="Yes, logout"
          className=""
          disabled={isPending}
          isLoading={isPending}
          onClick={logout}
        />
      </div>
    </div>
  );
};

export default LogoutModal;
