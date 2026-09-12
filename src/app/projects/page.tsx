import { Footer } from "@/components/layout/Footer";
import { Header, type HeaderNavItem } from "@/components/layout/Header";
import { ProjectsPage } from "@/components/projects/ProjectsPage";

const projectsNavItems: HeaderNavItem[] = [
  {
    href: "/#contact",
    label: { es: "Contacto", en: "Contact" },
  },
];

export const metadata = {
  title: "Projects | D-Signio",
  description:
    "D-Signio portfolio of hospitality, institutional, residential, and real estate projects.",
};

export default function ProjectsRoute() {
  return (
    <>
      <Header navItems={projectsNavItems} />
      <main>
        <ProjectsPage />
      </main>
      <Footer />
    </>
  );
}
