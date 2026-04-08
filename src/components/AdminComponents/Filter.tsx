import { Form, Formik } from "formik";
import { Search, SlidersHorizontal, X } from "lucide-react";
import React, { useState } from "react";
import * as Yup from "yup";
import InputField from "../FormComponents/InputField";
import Button from "../GeneralComponent/Button";

const Filter: React.FC = () => {
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
                  <div className="flex items-center gap-4 bg-gray-700 p-2 rounded-2xl flex-1">
                    <InputField
                      name="query"
                      theme="dark"
                      className="bg-transparent text-white! border-none"
                      placeholder="Search by name..."
                    />
                    <button
                      type="submit"
                      className="flex items-center cursor-pointer justify-center border-l border-gray-500 p-2 w-fit h-fit"
                    >
                      <Search />
                    </button>
                  </div>
                  <div className="">
                    <div
                      className="bg-gray-700 hover:bg-gray-500 hover:text-white cursor-pointer p-4 rounded-2xl flex items-center gap-2 h-full"
                      onClick={() => setshowFilterModal(true)}
                    >
                      <SlidersHorizontal /> <span>Filter</span>
                    </div>
                  </div>
                </div>
                {showFilterModal && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xs z-50">
                    <div className="bg-gray-700 relative w-sm max-w-sm md:max-w-sm p-8 rounded-2xl">
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
                            theme="dark"
                            placeholder="Enter Location"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="">
                            <div className="">min age</div>
                            <InputField name="minAge" theme="dark" />
                          </div>
                          <div className="">
                            <div className="">max age</div>
                            <InputField name="maxAge" theme="dark" />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-10">
                        <Button
                          label="Cancel"
                          className="bg-gray-300 text-black!"
                          onClick={() => setshowFilterModal(false)}
                        />
                        <Button
                          label="Apply filters"
                          type="submit"
                          disabled={!isValid}
                          className=""
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

export default Filter;
