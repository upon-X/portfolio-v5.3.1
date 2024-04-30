import { useEffect, useState } from "react";
import { TranslationContext } from "./TranslationContext";
import { ContentHome } from "../translations/HomeTranslation/contentHome";
import { ContentNavbar } from "../translations/NavbarTranslation/contentNavbar";
import { ContentFooter } from "../translations/FooterTranslation/contentFooter";
import {
  LanguageType,
  ChildrenPropsType,
  TranslationContextType,
} from "../types/interfaceContext";
import { ContentAboutMe } from "../translations/AboutMeTranslation/contentAboutMe";
import { ContentProjects } from "../translations/ProjectsTranslation/contentProjects";
import { ContentContact } from "../translations/ContactTranslation/contentContact";

export const ContextProvider = ({ children }: ChildrenPropsType) => {
  const [language, setLanguage] = useState<LanguageType>("es");
  const [content, setContent] = useState<
    TranslationContextType["content"] | undefined
  >();

  useEffect(() => {
    const HomeModule = ContentHome;
    const NavbarModule = ContentNavbar;
    const FooterModule = ContentFooter;
    const AboutMeModule = ContentAboutMe;
    const ProjectsModule = ContentProjects;
    const ContactModule = ContentContact;

    setContent({
      home: HomeModule,
      navbar: NavbarModule,
      footer: FooterModule,
      aboutMe: AboutMeModule,
      projects: ProjectsModule,
      contact: ContactModule,
    });
  }, [language]);

  const handleLanguageChange = (newLanguage: LanguageType) => {
    setLanguage(newLanguage);
  };

  return (
    <TranslationContext.Provider
      value={{ language, setLanguage: handleLanguageChange, content }}
    >
      {children}
    </TranslationContext.Provider>
  );
};