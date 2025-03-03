import ContactForm from "../../../components/Forms/ContactForm";
import Title from "../../../components/Paragraph/Title";
import Caption from "../../../components/Paragraph/Caption";

import { en } from "../../../constants/string";

const Contact = () => {
  const { REACH_OUT, REACH_OUT_MSG } = en;

  return (
    <section id="contact" className="bg-[#0f172a] px-10 py-8">
      <div data-aos="fade-up">
        <div className="mb-12 space-y-[-1.5rem]">
          <Title text={REACH_OUT} />
          <Caption text={REACH_OUT_MSG} />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
