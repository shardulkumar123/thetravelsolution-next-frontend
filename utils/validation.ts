import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .test("no-leading-space", "Name cannot start with a space", (value) => {
      return !value || !value.startsWith(" ");
    })
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .test("no-leading-space", "Email cannot start with a space", (value) => {
      return !value || !value.startsWith(" ");
    })
    .email("Please enter a valid email address"),
  subject: yup
    .string()
    .test("no-leading-space", "Subject cannot start with a space", (value) => {
      return !value || !value.startsWith(" ");
    })
    .default(""),
  message: yup
    .string()
    .required("Message is required")
    .test("no-leading-space", "Message cannot start with a space", (value) => {
      return !value || !value.startsWith(" ");
    })
    .min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = yup.InferType<typeof contactSchema>;
