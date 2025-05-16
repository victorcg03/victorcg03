import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import * as ES from "./Es";
import * as EN from "./En";
import ScrollToTopButton from "./ScrollToTopButton";

export default function MainApp() {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  );
}

export function Content() {
  const { lang } = useLanguage();
  const C = lang === "en" ? EN : ES;
  return (
    <>
      <C.GlassHeader />
      <main className="min-h-screen">
        <C.HeroSection />
        <C.ExperienceSection />
        <C.SkillsSection />
        <C.ProjectsSection />
        <C.AwardsSection />
        <C.EducationSection />
      </main>
      <ScrollToTopButton />
      <C.Footer />
    </>
  );
}
