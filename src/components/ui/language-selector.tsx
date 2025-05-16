import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./button";
export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="rounded-full cursor-pointer"
    >
      {lang === "es" ? "Es" : "En"}
      <span className="sr-only">
        {lang === "es" ? "Cambiar idioma" : "Change language"}
      </span>
    </Button>
  );
}
