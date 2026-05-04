import { Form, Formik } from "formik";
import { Search, SlidersHorizontal, X } from "lucide-react";
import React, { useState } from "react";
import * as Yup from "yup";
import InputField from "../FormComponents/InputField";
import NumberInput from "../FormComponents/NumberInput";
import SelectField from "../FormComponents/SelectField";
import Button from "../GeneralComponent/Button";
interface Prop {
  params: PlanFilterParams;
  onSetParams: (params: PlanFilterParams) => void;
}
const PlanFilterBar: React.FC<Prop> = ({ params, onSetParams }) => {
  const initialValues = {
    name: params.name,
    duration: params.duration,
    type: params.type,
  };
  const validationSchema = Yup.object().shape({
    // query: Yup.string().required("required"),
  });
  const [showFilterModal, setshowFilterModal] = useState(false);
  const typeOption = [
    { value: "", label: "All" },
    { value: "one time", label: "Full payment" },
    { value: "monthly", label: "Monthly" },
  ];

  return (
    <div className="w-full my-2">
      <div className="">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnMount
          onSubmit={(values) => {
            onSetParams({
              page: 1,
              name: values.name,
              duration: values.duration,
              type: values.type,
            });
            setshowFilterModal(false);
          }}
        >
          {({ isValid, setFieldValue }) => {
            return (
              <Form className="">
                <div className="flex justify-between items-center gap-4">
                  <div className="flex items-center gap-4 bg-white p-2 rounded-2xl flex-1">
                    <InputField
                      name="name"
                      className="bg-white border-none"
                      placeholder="Search by name..."
                    />
                    <button
                      type="submit"
                      className="flex items-center cursor-pointer justify-center text-gray-500 border-l border-gray-300 p-2 w-fit h-fit"
                    >
                      <Search />
                    </button>
                  </div>
                  <div className="">
                    <div
                      className="bg-white hover:bg-gray-500 hover:text-white cursor-pointer p-4 rounded-2xl flex items-center gap-2 h-full"
                      onClick={() => setshowFilterModal(true)}
                    >
                      <SlidersHorizontal /> <span>Filter</span>
                    </div>
                  </div>
                </div>
                {showFilterModal && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xs z-50">
                    <div className="bg-white relative w-sm max-w-sm md:max-w-sm p-8 rounded-2xl">
                      <button
                        className="absolute top-4 right-3 text-gray-600 hover:text-gray-900 cursor-pointer"
                        onClick={() => setshowFilterModal(false)}
                        aria-label="Close Modal"
                      >
                        <X size={24} />
                      </button>

                      <div className="space-y-2">
                        <InputField
                          label="Plan name"
                          name="name"
                          placeholder="search plan's name"
                        />
                        <SelectField
                          label="Payment type"
                          name="type"
                          options={typeOption}
                          placeholder="Select payment type"
                        />
                        <NumberInput
                          label="Duration"
                          name="duration"
                          placeholder="Number of months"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-10">
                        <Button
                          label="Reset"
                          className="bg-zinc-700"
                          onClick={() => {
                            setFieldValue("name", "");
                            setFieldValue("type", "");
                            setFieldValue("duration", "");
                          }}
                        />
                        <Button
                          label="Apply filters"
                          type="submit"
                          disabled={!isValid}
                          className="bg-yellow-600"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default PlanFilterBar;
