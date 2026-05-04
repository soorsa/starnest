import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import React from "react";
interface Prop {
  status: "success" | "error" | "info";
  title: string;
  msg: string;
}
const StatusModal: React.FC<Prop> = ({ status, title, msg }) => {
  return (
    <div className="w-sm max-w-xs md:max-w-sm">
      <div className="p-5">
        <div className="flex flex-col items-center text-center">
          {status === "success" && (
            <CheckCircle2 size={60} className="text-green-500" />
          )}
          {status === "error" && (
            <AlertTriangle size={60} className="text-red-500" />
          )}
          {status === "info" && <Info size={60} className="text-blue-500" />}
          <div className="text-2xl font-bold">{title}</div>
          <div className="text-gray-700">{msg}</div>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
