import emailjs from "@emailjs/browser";
import type { ContactFormData } from "@/types";

interface SubmitResult {
  success: boolean;
  message?: string;
}

export const submitContactForm = async (
  data: ContactFormData
): Promise<SubmitResult> => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        user_name: data.name,
        user_email: data.email,
        user_phone: data.phone,
        subject: data.subject,
        message: data.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    return { success: true };
  } catch (error) {
    console.error("EmailJS error:", JSON.stringify(error, null, 2));
    return { success: false };
  }
};