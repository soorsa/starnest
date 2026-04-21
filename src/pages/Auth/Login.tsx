import { Form, Formik } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import InputField from "../../components/FormComponents/InputField";
import Button from "../../components/GeneralComponent/Button";
import { useLogin } from "../../hooks/auth/useAuth";
import { useModal } from "../../zustand/modal.state";
import Register from "./Register";

const Login = () => {
  const { openModal } = useModal();
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending } = useLogin();
  // Password visibility toggle logic
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  const handleSubmit = (values: typeof initialValues) => {
    login(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnMount
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form className="space-y-3 flex flex-col px-4 max-w-sm mx-auto h-full">
          <h2 className="font-medium text-3xl text-black text-center py-4">
            Welcome Back
          </h2>
          {/* Render based on state */}
          <InputField name="email" placeholder="Email address" />
          <InputField
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input"
            rightIcon={
              showPassword ? (
                <FaEyeSlash
                  className="text-gray-500 w-5 h-5 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className="text-gray-500 w-5 h-5 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )
            }
          />
          {/* Forgot Password Link */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-xs px-6">
              <input
                type="checkbox"
                id="remember"
                className="text-adron-green"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link
              to={`/forgot-password`}
              className="text-[#FF4A1B] text-xs cursor-pointer"
            >
              Forgot password?
            </Link>
          </div>
          <Button
            type="submit"
            isLoading={isPending}
            disabled={isPending || !isValid}
            label="Log In"
            loadingLabel="Logging In"
            className="w-full py-2 rounded-full mt-10"
          />
          {/* Link to switch between forms */}
          <p className="text-sm flex gap-1 items-center text-center justify-center">
            <>
              Are you new?{" "}
              <Button
                label="Create an Account"
                className="!text-purple-900 ml-1 !bg-transparent font-medium !w-fit underline"
                onClick={() => openModal(<Register />)}
              />
            </>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
