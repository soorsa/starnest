import { Form, Formik } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import InputField from "../../components/FormComponents/InputField";
import PhoneNumberInput from "../../components/FormComponents/PhoneNumberInput";
import Button from "../../components/GeneralComponent/Button";
import { useRegister } from "../../hooks/auth/useAuth";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: register, isPending } = useRegister();
  // Password visibility toggle logic
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const initialValues = {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    phone_number: "",
    referral_code: "",
  };
  const validationSchema = Yup.object({
    // username: Yup.string().min(3).required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone_number: Yup.string().required("Required"),
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    // confirm_password: Yup.string()
    //   .oneOf([Yup.ref("password")], "Passwords must match")
    //   .required("Required"),
  });
  const handleSubmit = (values: typeof initialValues) => {
    const payload = {
      username: values.email,
      email: values.email,
      phone_number: values.phone_number,
      password: values.password,
      first_name: values.first_name,
      last_name: values.last_name,
      referral_code: values.referral_code,
    };
    register(payload);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnMount
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form className="space-y-3 flex flex-col px-4 mx-auto max-w-sm">
          <h2 className="font-medium text-3xl text-black text-center py-4">
            Get Started
          </h2>
          <div className="grid grid-cols-2 items-center gap-1">
            <InputField name="first_name" placeholder="First Name" />
            <InputField name="last_name" placeholder="Last Name" />
          </div>
          <InputField name="email" placeholder="Email Address" />
          <PhoneNumberInput name="phone_number" placeholder="Phone Number" />
          {/* <InputField name="phone_number" placeholder="Phone Number" /> */}
          <InputField
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input"
            rightIcon={
              showPassword ? (
                <FaEye
                  className="text-gray-500 w-5 h-5 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEyeSlash
                  className="text-gray-500 w-5 h-5 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )
            }
          />
          <InputField
            name="referral_code"
            placeholder="Referral code (optional)"
          />
          <Button
            type="submit"
            isLoading={isPending}
            disabled={isPending || !isValid}
            label="Submit"
            loadingLabel="Signing up..."
            className="!bg-black w-full py-2 rounded-full mt-10"
          />
          {/* Link to switch between forms */}
          <p className="text-sm flex gap-1 items-center text-center justify-center">
            <>
              Already have an Account?{" "}
              <Link
                to={`/login`}
                className="!text-purple-900 ml-1 !bg-transparent font-medium !w-fit underline"
              >
                login
              </Link>
            </>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
