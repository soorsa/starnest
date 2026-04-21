import { Form, Formik } from "formik";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import InputField from "../../components/FormComponents/InputField";
import Button from "../../components/GeneralComponent/Button";
import { useResetPassword } from "../../hooks/auth/useAuth";

const ResetPassword = () => {
  const params = useParams();
  const uid = params.uid || "";
  const token = params.token || "";
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: resetPassword, isPending } = useResetPassword();
  // Password visibility toggle logic
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const initialValues = {
    new_password: "",
    new_password2: "",
  };
  const validationSchema = Yup.object({
    new_password: Yup.string().required("Required"),
    new_password2: Yup.string()
      .oneOf([Yup.ref("new_password")], "Passwords must match")
      .required("Required"),
  });
  const handleSubmit = (values: typeof initialValues) => {
    const payload = {
      password: values.new_password,
      uid: uid,
      token: token,
    };
    resetPassword(payload);
  };
  return (
    <div className="px-4 max-w-sm mx-auto h-full flex flex-col justify-center">
      <h2 className="font-medium text-3xl text-black text-center py-4">
        Reset Password
      </h2>

      <Formik
        initialValues={initialValues}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => {
          return (
            <Form className="space-y-8">
              <div className="space-y-2">
                <InputField
                  label="New Password"
                  name="new_password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input"
                  rightIcon={
                    showPassword ? (
                      <Eye
                        className="text-gray-500 w-5 h-5 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      />
                    ) : (
                      <EyeClosed
                        className="text-gray-500 w-5 h-5 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      />
                    )
                  }
                />
                <InputField
                  label="Confirm Password"
                  name="new_password2"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="input"
                  rightIcon={
                    showPassword ? (
                      <Eye
                        className="text-gray-500 w-5 h-5 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      />
                    ) : (
                      <EyeClosed
                        className="text-gray-500 w-5 h-5 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      />
                    )
                  }
                />
              </div>
              <Button
                type="submit"
                label="Save"
                disabled={isPending || !isValid}
                isLoading={isPending}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ResetPassword;
