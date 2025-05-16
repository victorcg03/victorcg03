import { createContext, useContext, useEffect, useState } from "react";

type Language = "es" | "en";

// Normaliza cualquier valor como "es-ES" o "en-US" a "es" o "en"
const getNormalizedLanguage = (): Language => {
  const lang = navigator.language?.toLowerCase();
  if (lang.startsWith("es")) return "es";
  if (lang.startsWith("en")) return "en";
  return "es"; // fallback por defecto
};

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
}>({
  lang: "es",
  setLang: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<Language>(getNormalizedLanguage());

  // No necesitas un useEffect aquí si ya inicializas correctamente con getNormalizedLanguage()

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
