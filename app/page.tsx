import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
  TestimonialsSection,
} from "@/components/sections";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ArticlesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
