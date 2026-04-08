import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useCreatePlan } from "../../hooks/mutations/useSavingPlan";
import { useModal } from "../../zustand/modal.state";
import InputField from "../FormComponents/InputField";
import ListInputField from "../FormComponents/ListInput";
import RadioGroup from "../FormComponents/RadioGroup";
import Button from "../GeneralComponent/Button";

const CreatePlan = () => {
  const { mutate, isPending } = useCreatePlan();
  const modal = useModal();
  const initialValues = {
    name: "",
    image: null,
    video_link: "",
    description: "",
    amount_per_cycle: "",
    type: "",
    duration: "",
    interest_rate: "",
    benefits: [""],
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    video_link: Yup.string().required("required"),
    description: Yup.string().required("required"),
    amount_per_cycle: Yup.string().required("required"),
    type: Yup.string().required("required"),
    duration: Yup.string().required("required"),
    interest_rate: Yup.string().required("required"),
    benefits: Yup.array()
      .of(Yup.string().trim().min(1).required("required"))
      .max(12, "Too many benefits")
      .min(1, "Add at least one benefit"),
  });
  const paymentTypeOption = [
    { label: "Full payment", value: "one time" },
    { label: "Monthly", value: "monthly" },
  ];

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values.benefits);
    mutate(values, {
      onSuccess() {
        modal.closeModal();
      },
    });
  };

  return (
    <div className="w-sm">
      <h2 className="text-3xl font-starnest-bold">Create New Plan</h2>
      <hr className="w-1/2 mx-auto text-gray-300" />
      <Formik
        initialValues={initialValues}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => {
          return (
            <Form className="mt-5">
              <div className="space-y-3 max-h-[70vh] overflow-y-auto pb-4 scrollbar-hide">
                <InputField name="name" label="Title" placeholder="Plan name" />
                <div className="grid grid-cols-2 gap-2">
                  <InputField
                    name="video_link"
                    label="Video link"
                    placeholder="Link"
                  />
                  <InputField
                    name="amount_per_cycle"
                    label="Amount per month"
                    placeholder="Amount"
                  />
                </div>
                <RadioGroup
                  name="type"
                  options={paymentTypeOption}
                  label="Payment type"
                  className="text-left"
                  orientation="horizontal"
                  optionClassName="min-w-[calc(50%-8px)]"
                />
                <div className="grid grid-cols-2 gap-2">
                  <InputField
                    name="duration"
                    label="Duration (months)"
                    placeholder="No. of months"
                  />
                  <InputField
                    name="interest_rate"
                    label="Interest rate (%)"
                    placeholder="Interest rate"
                  />
                </div>
                <InputField
                  name="description"
                  type="textarea"
                  placeholder="About this plan..."
                  label="Description"
                />
                <ListInputField
                  label="Benefits"
                  name="benefits"
                  placeholder="Enter benefits..."
                />
              </div>
              <Button
                label="Submit"
                type="submit"
                disabled={!isValid || isPending}
                isLoading={isPending}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreatePlan;
