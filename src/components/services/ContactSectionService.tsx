import ContactSection from "../ContactSection"

export default function ContactSectionService() {
  return (
    <section className="bg-primary pt-20 pb-20 md:pb-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols">
          <ContactSection />
        </div>
      </div>
    </section>
  )
}
