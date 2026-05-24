import { TypingAnimation } from '@/components/TypingAnimation'
import { ExternalLink } from '@/components/ExternalLink'
import { ExperienceItem } from '@/components/ExperienceItem'

const Home = () => {
  return (
    <main className="min-h-screen px-8 py-24 max-w-2xl mx-auto flex flex-col gap-20">
      {/* Hero */}
      <section>
        <h1 className="text-8xl font-bold tracking-tighter mb-6 text-foreground">
          Cano Q
        </h1>
        <p className="text-xl font-mono text-muted mb-10">
          <TypingAnimation words={['software engineer', 'NLP researcher', 'builder']} />
        </p>
        <p className="text-base leading-relaxed text-foreground/70 max-w-sm">
          Engineer at Microsoft working on Copilot for SharePoint & OneDrive.
          Masters in NLP from PUC — syntactic patterns in Spanish BERT.
        </p>
      </section>

      {/* Work */}
      <section>
        <p className="text-xs font-mono uppercase tracking-widest text-muted mb-6">
          Experience
        </p>
        <div className="flex flex-col gap-5">
          <ExperienceItem title="Microsoft" subtitle="Copilot · SharePoint & OneDrive" tag="current" />
          <ExperienceItem title="PUC" subtitle="MSc. NLP — syntactic patterns of Spanish BERT" tag="research" />
        </div>
      </section>

      {/* Links */}
      <section>
        <p className="text-xs font-mono uppercase tracking-widest text-muted mb-6">
          Links
        </p>
        <div className="flex gap-8">
          <ExternalLink href="https://www.linkedin.com/in/aiquinones/" label="LinkedIn" />
          <ExternalLink href="https://www.instagram.com/canoq" label="Instagram" />
          <ExternalLink href="https://x.com/itscanoq" label="X" />
        </div>
      </section>
    </main>
  )
}

export default Home
