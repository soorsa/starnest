import { Form, Formik } from "formik";
import Button from "../GeneralComponent/Button";
import { Save } from "lucide-react";
import InputField from "../FormComponents/InputField";

const UpdateProfile = () => {
  const initialValues = {};
  const validationSchema = {};
  return (
    <div className="bg-white rounded-3xl p-4 md:col-span-2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {() => {
          return (
            <Form className="divide-y divide-gray-300">
              <div className="flex items-center justify-between py-2">
                <div className="font-starnest-bold text-xl">Update Profile</div>
                <Button
                  label="Save"
                  type="submit"
                  className="w-fit! px-8"
                  icon={<Save size={18} />}
                />
              </div>
              <div className="space-y-4 text-sm py-10">
                <div className="grid grid-cols-2 text-left gap-2">
                  <div className="">
                    <label htmlFor="">First name</label>
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                  <div className="">
                    <label htmlFor="">Last name</label>
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                </div>
                <div className="grid grid-cols-2 text-left gap-2">
                  <div className="">
                    <label htmlFor="">Phone No.</label>
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                  <div className="">
                    <label htmlFor="">Email</label>
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                </div>
                <div className="grid grid-cols-2 text-left gap-2">
                  <div className="">
                    <label htmlFor="">Date of birth</label>
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                  <div className="">
                    <label htmlFor="">National ID</label>
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-sm py-10">
                <div className="grid grid-cols-2 text-left gap-2">
                  <div className="">
                    <label htmlFor="">State</label>
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                  <div className="">
                    <label htmlFor="">City</label>
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                </div>
                <div className="grid grid-cols-2 text-left gap-2">
                  <div className="">
                    <label htmlFor="">Country</label>
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                  <div className="">
                    <label htmlFor="">Street Address</label>
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UpdateProfile;
