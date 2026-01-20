import { ErrorMessage, useField } from "formik";
import { FaExclamationCircle } from "react-icons/fa";
import React from "react";
import { Check } from "lucide-react";

interface CheckboxFieldProps {
  name: string;
  label?: string;
  labelPosition?: "left" | "right";
  className?: string;
  theme?: "light" | "dark";
  disabled?: boolean;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  name,
  label,
  labelPosition = "right",
  className = "",
  theme = "light",
  disabled = false,
}) => {
  const [field, meta, helpers] = useField(name);
  const hasError = meta.touched && meta.error;

  // Handle checkbox toggle
  const handleChange = () => {
    helpers.setValue(!field.value);
    helpers.setTouched(true);
  };

  return (
    <div className={`w-full text-left ${className}`}>
      <label className="flex items-center cursor-pointer">
        {label && labelPosition === "left" && (
          <span className="text-sm mr-2">{label}</span>
        )}

        <div className={`relative flex items-center`}>
          {/* Hidden checkbox for Formik */}
          <input
            type="checkbox"
            name={field.name}
            checked={field.value || false}
            onChange={handleChange}
            onBlur={field.onBlur}
            disabled={disabled}
            className="sr-only"
          />

          {/* Custom checkbox appearance */}
          <div
            className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
              hasError
                ? "border-red-500"
                : theme === "dark"
                ? "border-gray-700"
                : "border-gray-300"
            }
             ${
               field.value
                 ? "bg-transparent border-alaba"
                 : "bg-white dark:bg-gray-800"
             }
            `}
            onClick={handleChange}
          >
            {field.value && <Check className="w-3 h-3" />}
          </div>

          {/* Error Icon */}
          {hasError && (
            <div className="ml-2">
              <FaExclamationCircle className="w-4 h-4 text-red-500" />
            </div>
          )}
        </div>

        {label && labelPosition === "right" && (
          <span className="text-sm ml-2">{label}</span>
        )}
      </label>

      {/* Error Message */}
      <ErrorMessage
        name={name}
        component="p"
        className="text-red-500 text-[9px] mt-1 ml-2 text-left"
      />
    </div>
  );
};

export default CheckboxField;
