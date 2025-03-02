import Title from "../../../components/Paragraph/Title";

import { en } from "../../../constants/string";

const Contact = () => {
  const {
    REACH_OUT,
    REACH_OUT_MSG,
    REACH_OUT_EMAIL_LABEL,
    REACH_OUT_EMAIL_PLACEHOLDER,
    REACH_OUT_SUBJECT_LABEL,
    REACH_OUT_SUBJECT_PLACEHOLDER,
    REACH_OUT_MESSAGE_LABEL,
    REACH_OUT_MESSAGE_PLACEHOLDER,
    REACH_OUT_SEND_BTN,
  } = en;

  return (
    <section id="contact" className="bg-[#0f172a] px-10 py-8">
      <div className="mx-auto max-w-screen-md">
        <Title text={REACH_OUT} />
        <p className="mb-8 font-light text-center text-gray-400 sm:text-xl">
          {REACH_OUT_MSG}
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {REACH_OUT_EMAIL_LABEL}
            </label>
            <input
              type="email"
              id="email"
              className=" border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder={REACH_OUT_EMAIL_PLACEHOLDER}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {REACH_OUT_SUBJECT_LABEL}
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder={REACH_OUT_SUBJECT_PLACEHOLDER}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              {REACH_OUT_MESSAGE_LABEL}
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
              placeholder={REACH_OUT_MESSAGE_PLACEHOLDER}
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
          >
            {REACH_OUT_SEND_BTN}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
