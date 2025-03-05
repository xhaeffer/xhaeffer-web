import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useForm } from "@formspree/react";

import { en } from "../../constants/string";
import useInput from "../../hooks/useInput";

const ContactForm = () => {
  const {
    EMAIL_FORM_EMAIL_LABEL,
    EMAIL_FORM_EMAIL_PLACEHOLDER,
    EMAIL_FORM_SUBJECT_LABEL,
    EMAIL_FORM_SUBJECT_PLACEHOLDER,
    EMAIL_FORM_MESSAGE_LABEL,
    EMAIL_FORM_MESSAGE_PLACEHOLDER,
    EMAIL_FORM_SEND_BTN,
    EMAIL_FORM_SUCCESS_MSG,
    EMAIL_FORM_FAILED_MSG,
  } = en;

  const [email, setEmail] = useInput("");
  const [subject, setSubject] = useInput("");
  const [message, setMessage] = useInput("");

  const [state, handleSubmit, reset] = useForm(
    import.meta.env.VITE_CONTACT_FORM_KEY,
  );

  if (state.succeeded) {
    alert(EMAIL_FORM_SUCCESS_MSG);

    setEmail("");
    setSubject("");
    setMessage("");

    reset();
  }

  if (state.errors) {
    console.log(state.errors);
    alert(EMAIL_FORM_FAILED_MSG);

    reset();
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-screen-md space-y-8">
      <div className="space-y-2">
        <Label htmlFor="email" value={EMAIL_FORM_EMAIL_LABEL} />
        <TextInput
          id="email"
          type="email"
          name="email"
          placeholder={EMAIL_FORM_EMAIL_PLACEHOLDER}
          value={email}
          onChange={setEmail}
          disabled={state.submitting}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject" value={EMAIL_FORM_SUBJECT_LABEL} />
        <TextInput
          id="subject"
          name="subject"
          placeholder={EMAIL_FORM_SUBJECT_PLACEHOLDER}
          value={subject}
          onChange={setSubject}
          disabled={state.submitting}
          maxLength={255}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" value={EMAIL_FORM_MESSAGE_LABEL} />
        <Textarea
          id="message"
          name="message"
          rows="6"
          className="bg-gray-800"
          placeholder={EMAIL_FORM_MESSAGE_PLACEHOLDER}
          value={message}
          onChange={setMessage}
          disabled={state.submitting}
          required
        />
      </div>
      <Button type="submit" disabled={state.submitting} className="ml-auto">
        {EMAIL_FORM_SEND_BTN}
      </Button>
    </form>
  );
};

export default ContactForm;
