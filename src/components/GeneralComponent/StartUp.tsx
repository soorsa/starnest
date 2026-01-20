import React from "react";

interface Props {
  className?: string;
}

const StartUp: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex bg-white justify-center items-center rounded-lg p-2 fixed inset-0 z-50">
      <img
        src="/logo.png"
        className={`inline me-3 text-alaba-50 ${className} `}
      />
    </div>
  );
};

export default StartUp;
