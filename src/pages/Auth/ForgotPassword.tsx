import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import StatusModal from "../../components/DashboardComponents/StatusModal";
import InputField from "../../components/FormComponents/InputField";
import Button from "../../components/GeneralComponent/Button";
import { useForgotPassword } from "../../hooks/auth/useAuth";
const ForgotPassword = () => {
  const { mutate: requestLink, isPending } = useForgotPassword();
  const [requestSent, setrequestSent] = useState(false);
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
  });
  const handleSubmit = (values: typeof initialValues) => {
    const payload = {
      email: values.email,
    };
    requestLink(payload, {
      onSuccess() {
        setrequestSent(true);
      },
    });
  };
  if (requestSent) {
    return (
      <div className="px-4 mx-auto">
        <StatusModal
          status="success"
          title="Reset Password Link Sent"
          msg={`A reset password link has been sent to your mail... please go to you mail and proceed to reset password`}
        />
      </div>
    );
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnMount
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form className="space-y-3 h-full flex flex-col px-4 mx-auto max-w-sm justify-center">
          <h2 className="font-medium text-3xl text-black text-center py-4">
            Forgot Password
          </h2>
          <InputField name="email" placeholder="Email Address" />
          <Button
            type="submit"
            isLoading={isPending}
            loadingLabel="Sending Link..."
            disabled={isPending || !isValid}
            label="Submit"
            className="!bg-black w-full py-2 rounded-full mt-10"
          />
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPassword;
