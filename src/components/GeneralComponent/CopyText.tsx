import { CheckCircle2, Copy } from "lucide-react";
import React, { useState } from "react";
interface Prop {
  content: string;
  className?: string;
  truncate?: boolean;
}
const CopyText: React.FC<Prop> = ({ content, truncate = true, className }) => {
  const [copied, setCopied] = useState(false);

  const truncateContent = (addr: string) => {
    if (!truncate) return addr;
    return `${addr.slice(0, 40)}...${addr.slice(-6)}`;
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`cursor-pointer w-full rounded-lg py-1 px-3 flex items-center justify-between gap-2 ${className}`}
    >
      <code
        className=" font-mono text-sm select-all max-w-2/3 truncate"
        onClick={handleCopy}
      >
        {/* {content} */}
        {truncateContent(content)}
      </code>
      <button
        onClick={handleCopy}
        className="relative group"
        title="Copy content"
      >
        {copied ? (
          <div className="text-xs text-green-400 animate-pulse flex items-center gap-1">
            <CheckCircle2 className="text-green-500 h-4 w-4" />
            Copied!
          </div>
        ) : (
          <div className="text-xs text-gray-400 flex items-center gap-1 hover:text-gray-300">
            <Copy className="w-4 h-4" />
            copy
          </div>
        )}
      </button>
    </div>
  );
};

export default CopyText;
