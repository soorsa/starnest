"use client";

import { useField } from "formik";
import { X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

interface TagsInputProps {
  name: string;
  placeholder?: string;
  maxTags?: number;
  className?: string;
}

export default function TagsInput({
  name,
  placeholder = "Type and press Enter...",
  maxTags = 10,
  className = "",
}: TagsInputProps) {
  const [field, meta, helpers] = useField<string[]>(name);
  const { value = [] } = field;
  const { setValue } = helpers;

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addTag = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    if (value.includes(trimmed)) return;
    if (value.length >= maxTags) return;

    setValue([...value, trimmed]);
    setInputValue("");
  };

  const removeTag = (tagToRemove: string) => {
    setValue(value.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && !inputValue && value.length > 0) {
      // Remove last tag when backspace on empty input
      setValue(value.slice(0, -1));
    }
  };

  // Focus input when clicking anywhere on the container
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current?.contains(e.target as Node)) {
        inputRef.current?.focus();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const hasError = meta.touched && meta.error;

  return (
    <div className={`w-full ${className}`} ref={containerRef}>
      <div
        className={`min-h-[42px] w-full px-3 py-2 flex flex-wrap gap-2 items-center border rounded-lg bg-transparent focus-within:ring-1 focus-within:ring-blue-500 transition
          ${
            hasError
              ? "border-red-500"
              : "border-zinc-700 hover:border-zinc-500"
          }`}
      >
        {/* Existing tags */}
        {value.map((tag) => (
          <div
            key={tag}
            className="bg-zinc-800 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1.5 group"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="text-zinc-400 hover:text-red-400 transition"
            >
              <X size={14} />
            </button>
          </div>
        ))}

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? placeholder : ""}
          className="flex-1 min-w-[120px] bg-transparent outline-none text-white placeholder-zinc-500"
          disabled={value.length >= maxTags}
        />
      </div>

      {hasError && <p className="text-red-500 text-xs mt-1.5">{meta.error}</p>}
    </div>
  );
}
