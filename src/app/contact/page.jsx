import ContactSection from "../components/ContactSection";
import PageHeader from "../components/PageHeader";

export const metadata = {
  title: "Contact Us",
  description:
    "Get a free, no-obligation quote from Metalgate Leeds. Call, WhatsApp, email or send us a message. No job is too small.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Get in touch" title="Let's talk about your project.">
        We welcome all enquiries, and no job is too small. Contact us today for a free, no-obligation quote.
      </PageHeader>
      <ContactSection showMap heading="Contact us" />
    </>
  );
}
