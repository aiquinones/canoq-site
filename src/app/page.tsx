import { TypingAnimation } from '@/components/TypingAnimation'

const Home = () => {
  return (
    <main className="min-h-screen px-8 py-24 max-w-2xl mx-auto flex flex-col gap-20">
      {/* Hero */}
      <section>
        <h1 className="text-8xl font-bold tracking-tighter mb-6 text-foreground">
          Cano Q
        </h1>
        <p className="text-xl font-mono text-muted mb-10">
          <TypingAnimation />
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
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium text-foreground">Microsoft</p>
              <p className="text-sm text-foreground/50">
                Copilot · SharePoint & OneDrive
              </p>
            </div>
            <p className="text-sm font-mono text-muted">current</p>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium text-foreground">PUC</p>
              <p className="text-sm text-foreground/50">
                MSc. NLP — syntactic patterns of Spanish BERT
              </p>
            </div>
            <p className="text-sm font-mono text-muted">research</p>
          </div>
        </div>
      </section>

      {/* Links */}
      <section>
        <p className="text-xs font-mono uppercase tracking-widest text-muted mb-6">
          Links
        </p>
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/aiquinones/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-foreground/60 hover:text-foreground transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://www.instagram.com/canoq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-foreground/60 hover:text-foreground transition-colors"
          >
            Instagram ↗
          </a>
          <a
            href="https://x.com/itscanoq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-foreground/60 hover:text-foreground transition-colors"
          >
            X ↗
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home
