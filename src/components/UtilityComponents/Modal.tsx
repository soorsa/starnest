// components/Modal.tsx
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useModal } from "../../zustand/modal.state";

const Modal = () => {
  const { isOpen, content, closeModal } = useModal();
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-xs"
      // onClick={closeModal}
    >
      <div
        className={`bg-white p-10 rounded-[25px] shadow-lg w-fit relative ${
          pathname === "/admin" && ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-3 text-gray-600 hover:text-gray-900"
          onClick={closeModal}
          aria-label="Close Modal"
        >
          <IoClose size={24} />
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
