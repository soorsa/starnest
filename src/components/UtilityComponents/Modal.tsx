// components/Modal.tsx
import { X } from "lucide-react";
import { useEffect } from "react";
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
        className={`bg-white p-3 sm:p-6 rounded-md sm:rounded-lg shadow-lg w-fit relative ${
          pathname === "/admin" && ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-12 right-0 p-1 text-gray-500 hover:text-gray-900 bg-white border border-gray-300 rounded-md"
          onClick={closeModal}
          aria-label="Close Modal"
        >
          <X size={24} />
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
