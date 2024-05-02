import { useTranslation } from "../../context/TranslationContext";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  const { content, language } = useTranslation();
  return (
    <section className="flex flex-col gap-10 items-center">
      <h3 className="flex flex-col gap-3 items-center uppercase text-4xl font-semibold">
        {content?.contact[language].title}
        <span className="w-[100px] border-b-[6px] rounded-full border-purple text-transparent"></span>
      </h3>
      <h4 className="text-center text-2xl">
        {content?.contact[language].subtitle}
      </h4>
      <div className="">
        <ContactForm />
      </div>
    </section>
  );
}
