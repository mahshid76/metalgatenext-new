import AboutSection from "../components/AboutSection";
import PageHeader from "../components/PageHeader";

export const metadata = {
  title: "About Us",
  description:
    "Metalgate Leeds Ltd: high-quality metal fabrication and engineering for homes and businesses across Leeds and West Yorkshire.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Metalgate Leeds" title="Local expertise. Made to last.">
        Quality metal fabrication and engineering solutions, proudly serving Leeds and West Yorkshire.
      </PageHeader>
      <AboutSection />
    </>
  );
}
