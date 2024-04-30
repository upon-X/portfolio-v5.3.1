/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ChildrenPropsType {
  children: JSX.Element | JSX.Element[];
}

export type LanguageType = "es" | "en";

export interface ViewTypes {
  home: { es: any; en: any };
  navbar: { es: any; en: any };
  footer: { es: any; en: any };
  aboutMe: { es: any; en: any };
  projects: { es: any; en: any };
  contact: { es: any; en: any };
}

export interface TranslationContextType {
  language: LanguageType;
  content?: ViewTypes;
  setLanguage: (language: LanguageType) => void;
}