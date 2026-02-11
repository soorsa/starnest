import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../GeneralComponent/Button";
import InputField from "../FormComponents/InputField";
import { Search, SlidersHorizontal, X } from "lucide-react";

const FilterBar: React.FC = () => {
  const [params, setParams] = useState<FilterParams>({
    page: 1,
  });

  const initialValues = {
    query: "",
    start_date: "",
    end_date: "",
    status: "",
  };
  const validationSchema = Yup.object().shape({
    // query: Yup.string().required("required"),
  });
  const [showFilterModal, setshowFilterModal] = useState(false);

  return (
    <div className="w-full my-2">
      <div className="">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnMount
          onSubmit={(values) => {
            setParams({
              page: 1,
              keyword: values.query,
              state_date: String(values.start_date),
              end_date: String(values.end_date),
            });
            console.log(params);
            setshowFilterModal(false);
          }}
        >
          {({ isValid }) => {
            return (
              <Form className="">
                <div className="flex justify-between items-center gap-4">
                  <div className="flex items-center gap-4 bg-white p-2 rounded-2xl flex-1">
                    <InputField
                      name="query"
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
                        <div className="">
                          <div className="">Location</div>
                          <InputField
                            name="location"
                            placeholder="Enter Location"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="">
                            <div className="">min age</div>
                            <InputField name="minAge" />
                          </div>
                          <div className="">
                            <div className="">max age</div>
                            <InputField name="maxAge" />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-10">
                        <Button
                          label="Cancel"
                          className="bg-zinc-700"
                          onClick={() => setshowFilterModal(false)}
                        />
                        <Button
                          label="Apply filters"
                          type="submit"
                          disabled={!isValid}
                          className="bg-secondary"
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

export default FilterBar;
