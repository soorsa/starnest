import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Login from "./Login";
import { useModal } from "../../zustand/modal.state";
import InputField from "../../components/FormComponents/InputField";
import Button from "../../components/GeneralComponent/Button";
const Register = () => {
  const { openModal } = useModal();
  const [showPassword, setShowPassword] = useState(false);
  //   const { mutate: register, isPending } = useRegister();
  // Password visibility toggle logic
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const initialValues = {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().min(3).required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });
  const handleSubmit = (
    values: typeof initialValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    setSubmitting(false);
    const payload = {
      username: values.username,
      email: values.email,
      password: values.password,
      first_name: values.first_name,
      last_name: values.last_name,
    };
    // register(payload);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) =>
        handleSubmit(values, setSubmitting)
      }
    >
      {({ isSubmitting, isValid }) => (
        <Form className="space-y-3 flex flex-col px-4 mx-auto max-w-sm">
          <h2 className="font-medium text-3xl text-black text-center py-4">
            Get Started
          </h2>
          <div className="grid grid-cols-2 items-center gap-1">
            <InputField name="first_name" placeholder="First Name" />
            <InputField name="last_name" placeholder="Last Name" />
          </div>
          <InputField name="email" placeholder="Email Address" />
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
            name="confirm_password"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
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
          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting || !isValid}
            label="Submit"
            loadingLabel="Sending..."
            className="!bg-black w-full py-2 rounded-full mt-10"
          />
          {/* Link to switch between forms */}
          <p className="text-sm flex gap-1 items-center text-center justify-center">
            <>
              Already have an Account?{" "}
              <Button
                label="Log in"
                className="!text-purple-900 ml-1 !bg-transparent font-medium !w-fit underline"
                onClick={() => openModal(<Login />)}
              />
            </>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
