"use client";

import { ErrorMessage, useField } from "formik";
import { Info } from "lucide-react";
import React from "react";
import PhoneInput from "react-phone-number-input";

// import PhoneInputWithCountry from "react-phone-number-input/react-phone-number-input";
import "react-phone-number-input/style.css"; // Default styles (you can override)

interface PhoneNumberInputProps {
  label?: string;
  name: string;
  placeholder?: string;
  className?: string;
  defaultCountry?: string; // e.g. "US", "NG", "IN"
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  label,
  name,
  placeholder = "Enter phone number",
  className = "",
  // defaultCountry = "NG",
}) => {
  const [field, meta, helpers] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div className="w-full">
      {label && <div className="text-sm text-gray-500 mb-1">{label}</div>}

      <div
        className={`w-full relative border bg-transparent rounded-lg py-2 px-4 flex items-center font-medium transition-all ${
          hasError
            ? "border-red-500"
            : "border-gray-200 focus:border-blue-400 active:border-blue-400"
        } ${className}`}
      >
        <PhoneInput
          international
          withCountryCallingCode
          defaultCountry={"NG"}
          value={field.value}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(value: any) => helpers.setValue(value || "")}
          placeholder={placeholder}
          className="flex-1 phone-input-custom text-sm"
          // You can pass more props like numberInputProps if needed
        />

        {/* Error Icon */}
        {hasError && (
          <div className="flex items-center pl-2">
            <Info className="w-5 h-5 text-red-500" />
          </div>
        )}
      </div>

      <ErrorMessage
        name={name}
        component="p"
        className="text-red-500 text-[9px] mt-1 text-left"
      />
    </div>
  );
};

export default PhoneNumberInput;
