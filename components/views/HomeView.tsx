"use client";
import Nav from "../layout/nav/Nav";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
  TestimonialsSection,
} from "../sections";

const HomeView = () => {
  return (
    <>
      <Nav />
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

export default HomeView;
