import { createContext, useContext, useEffect, useState } from "react";

type Language = "es" | "en";

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
}>({
  lang: "es",
  setLang: () => {},
});
const userLang = navigator.language || navigator.language;
export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<Language>(userLang as Language);

  useEffect(() => {
    setLang(lang as Language);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
