import { useLogout } from "../../hooks/auth/useAuth";
import { useModal } from "../../zustand/modal.state";
import Button from "../GeneralComponent/Button";

const LogoutModal = () => {
  const { mutate: logout, isPending } = useLogout();
  const modal = useModal();
  return (
    <div className="w-[250px] space-y-10">
      <div className="">Are you sure you want to logout?</div>
      <div className="grid gap-2">
        <Button
          label="No, cancel"
          disabled={isPending}
          onClick={modal.closeModal}
        />
        <Button
          label="Yes, logout"
          className="bg-red-600"
          disabled={isPending}
          isLoading={isPending}
          onClick={logout}
        />
      </div>
    </div>
  );
};

export default LogoutModal;
