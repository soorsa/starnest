import { Form, Formik } from "formik";
import { Save } from "lucide-react";
import type React from "react";
import * as Yup from "yup";
import { useUpdateUser } from "../../hooks/mutations/useUsers";
import DatePickerInput from "../FormComponents/DateInput";
import ImageInput from "../FormComponents/ImageInput";
import InputField from "../FormComponents/InputField";
import Button from "../GeneralComponent/Button";
import { UpdateProfileSkeleton } from "../SkeletonsComponents/ProfileSummarySkeleton";
interface Prop {
  user?: User | null;
  isLoading: boolean;
  isError: boolean;
}
const UpdateProfile: React.FC<Prop> = ({ user, isError, isLoading }) => {
  const { mutate: updateProfile, isPending } = useUpdateUser();
  const initialValues = {
    first_name: user?.first_name,
    last_name: user?.last_name,
    phone_number: user?.phone_number,
    email: user?.email,
    profile_picture: user?.profile_picture,
    date_of_birth: user?.date_of_birth,

    bank: user?.bank,
    account_name: user?.account_name,
    account_number: user?.account_number,
    bvn: user?.bvn,
    nin: user?.nin,

    state: user?.state,
    country: user?.country,
    city: user?.city,
    address: user?.address,
  };
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("required"),
    last_name: Yup.string().required("required"),
    phone_number: Yup.string().required("required"),
    email: Yup.string().required("required"),
  });
  if (isLoading || isError) {
    return <UpdateProfileSkeleton />;
  }
  return (
    <div className="md:col-span-2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          let payload = {};
          if (typeof values.profile_picture === "string") {
            values.profile_picture = null;
            payload = values;
          } else {
            payload = values;
          }
          // Object.entries(values).forEach(([key, value]) => {
          //   // const initialValue =
          //   //   initialValues[key as keyof typeof initialValues];
          //   // if (value !== null && value !== "") return;
          //   // if (value === initialValue) return;
          //   if (key === "profile_picture" && typeof value === "string")
          //     values.profile_picture = null;
          //   payload = values;
          // });
          updateProfile(payload);
        }}
      >
        {({ isValid }) => {
          return (
            <Form className="space-y-2 min-h-[80vh] max-h-[80vh] rounded-2xl overflow-y-auto scrollbar-hide">
              <div className="flex items-center justify-between p-4 bg-white z-50 rounded-2xl sticky top-0 border border-gray-100">
                <div className="font-starnest-bold text-xl">Update Profile</div>
                <Button
                  label="Save"
                  type="submit"
                  disabled={!isValid || isPending}
                  isLoading={isPending}
                  className="w-fit! px-8"
                  icon={<Save size={18} />}
                />
              </div>
              <div className="space-y-4 text-sm p-4 bg-white rounded-2xl">
                <div className="text-xl pb-4 font-starnest-mid text-left">
                  Personal Info
                </div>
                <ImageInput
                  name="profile_picture"
                  label="Profile Picture"
                  className="text-left"
                  height={200}
                  width={200}
                />
                <div className="grid grid-cols-2 text-left gap-2">
                  <div className="">
                    <label htmlFor="">First name</label>
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                  <div className="">
                    <label htmlFor="">Last name</label>
                    <InputField name="last_name" placeholder="Last name" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 text-left gap-2">
                  <div className="">
                    <label htmlFor="">Phone No.</label>
                    <InputField
                      name="phone_number"
                      type="tel"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="">Email</label>
                    <InputField name="email" placeholder="Email Address" />
                  </div>
                </div>
                <div className="grid grid-cols-2 text-left gap-2">
                  <div className="">
                    <label htmlFor="">Date of birth</label>
                    <DatePickerInput
                      name="date_of_birth"
                      placeholder="Date of birth"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="">National ID</label>
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-sm p-4 bg-white rounded-2xl">
                <div className="text-xl pb-4 font-starnest-mid text-left">
                  Location Info
                </div>
                <div className="grid grid-cols-2 text-left gap-2">
                  <div className="">
                    <label htmlFor="">State</label>
                    <InputField
                      name="state"
                      placeholder="E.g Lagos, Abuja etc"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="">City</label>
                    <InputField
                      name="city"
                      placeholder="E.g. Ikeja, Alimosho etc"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 text-left gap-2">
                  <div className="">
                    <label htmlFor="">Country</label>
                    <InputField name="country" placeholder="E.g Nigeria" />
                  </div>
                  <div className="">
                    <label htmlFor="">Street Address</label>
                    <InputField
                      name="address"
                      placeholder="Enter Street address"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-sm p-4 bg-white rounded-2xl">
                <div className="text-xl pb-4 font-starnest-mid text-left">
                  Bank Info
                </div>
                <div className="grid sm:grid-cols-2 text-left gap-2">
                  <div className="">
                    <label htmlFor="">Account name</label>
                    <InputField
                      name="account_name"
                      placeholder="Enter Account name"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="">Bank</label>
                    <InputField name="bank" placeholder="Bank e.g. GT Bank" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 text-left gap-2">
                  <div className="">
                    <label htmlFor="">Account Number</label>
                    <InputField
                      name="account_number"
                      placeholder="Enter Account Number"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="">Bank verification Number</label>
                    <InputField name="bvn" placeholder="Enter BVN" />
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
