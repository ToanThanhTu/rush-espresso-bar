export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  enquiry: string;
};

export type EmailBody = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export type MailOptions = {
  from: string;
  to: string | undefined;
  subject: string;
  cc: string;
  text: string;
};

export interface ApiResponse {
  message: string;
}