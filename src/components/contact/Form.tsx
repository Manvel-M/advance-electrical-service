import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormField from "./FormField";
import { Button } from "@/components/ui";
import {
  ContactFormSchema,
  serviceOptions,
  type ContactForm,
} from "@/schemas/contactForm";
import { actions } from "astro:actions";
import { useState } from "react";

const selectOptions = serviceOptions.map((option) => ({
  value: option,
  label: option,
}));

function Form() {
  const [submissionState, setSubmissionState] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      serviceNeeded: "",
      additionalInformation: "",
    },
  });

  const handleSubmitForm = async (data: ContactForm) => {
    try {
      const response = await actions.contact(data);
      if (response.data?.success) {
        setSubmissionState("success");
      } else {
        setSubmissionState("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionState("error");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="first-name"
            label="First Name"
            error={errors.firstName}
            placeholder="First Name"
            className="w-full"
            {...register("firstName")}
          />

          <FormField
            id="last-name"
            label="Last Name"
            error={errors.lastName}
            placeholder="Last Name"
            className="w-full"
            {...register("lastName")}
          />

          <FormField
            id="email"
            label="Email"
            error={errors.email}
            placeholder="Email"
            className="w-full"
            {...register("email")}
          />

          <FormField
            id="phone"
            label="Phone"
            error={errors.phone}
            placeholder="Phone"
            className="w-full"
            {...register("phone")}
          />

          <FormField
            as="select"
            id="service-needed"
            label="Service Needed"
            error={errors.serviceNeeded}
            className="w-full md:col-span-2"
            options={[
              { value: "", label: "Select a service" },
              ...selectOptions,
            ]}
            {...register("serviceNeeded")}
          />

          <FormField
            as="textarea"
            id="message"
            label="Additional Information"
            error={errors.additionalInformation}
            placeholder="Additional Information"
            className="w-full md:col-span-2"
            {...register("additionalInformation")}
          />
          <div className="flex justify-center md:col-span-2">
            <Button
              type="submit"
              variant={
                isSubmitting
                  ? "secondary"
                  : submissionState === "success"
                    ? "success"
                    : submissionState === "error"
                      ? "destructive"
                      : "primary"
              }
              disabled={isSubmitting || submissionState === "success"}
            >
              {isSubmitting
                ? "Sending..."
                : submissionState === "success"
                  ? "Message Sent"
                  : "Send Message"}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
