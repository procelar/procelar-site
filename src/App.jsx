import { useState } from 'react'

// ─── Logo Component ───
function Logo({ className = '' }) {
  return (
    <span className={`font-display font-bold tracking-[2px] uppercase ${className}`}>
      PROCE<span className="text-teal">L</span>AR
    </span>
  )
}

// ─── Navigation ───
function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo className="text-lg" />
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-text-secondary hover:text-frost transition-colors">Services</a>
          <a href="#approche" className="text-sm text-text-secondary hover:text-frost transition-colors">Approche</a>
          <a href="#contact" className="px-5 py-2 bg-teal text-void text-sm font-semibold rounded-lg hover:bg-teal-light transition-colors">
            Contact
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-frost" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-void/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
          <a href="#services" onClick={() => setOpen(false)} className="text-sm text-text-secondary">Services</a>
          <a href="#approche" onClick={() => setOpen(false)} className="text-sm text-text-secondary">Approche</a>
          <a href="#contact" onClick={() => setOpen(false)} className="px-5 py-2 bg-teal text-void text-sm font-semibold rounded-lg text-center">Contact</a>
        </div>
      )}
    </nav>
  )
}

// ─── Hero Section ───
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-6 text-center pt-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-glow border border-teal/20 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-teal rounded-full" />
          <span className="font-mono text-[11px] tracking-wider uppercase text-teal">Suisse romande</span>
        </div>
        
        <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 leading-[0.95]">
          Vos processus,<br/>
          <span className="text-teal">enfin clairs.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Applications web sur mesure, automatisation et dashboards pour les PME 
          qui veulent arrêter de piloter à l'aveugle.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="px-8 py-3.5 bg-teal text-void font-semibold rounded-lg hover:bg-teal-light transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]">
            Discutons de votre projet
          </a>
          <a href="#services" className="px-8 py-3.5 border border-border text-text-secondary rounded-lg hover:border-teal/40 hover:text-frost transition-colors">
            Voir les services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[9px] tracking-widest uppercase text-text-dim">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-text-dim to-transparent" />
      </div>
    </section>
  )
}

// ─── Problem Section ───
function Problem() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-[10px] tracking-[3px] uppercase text-text-dim mb-12">Le problème</div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-6">
              Vos équipes perdent du temps sur des tâches que 
              <span className="text-teal"> des machines devraient faire.</span>
            </h2>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <span className="font-mono text-teal text-sm mt-0.5">01</span>
              <p className="text-text-secondary leading-relaxed">Des fichiers Excel partagés qui deviennent des usines à gaz — versions multiples, erreurs de saisie, données obsolètes.</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="font-mono text-teal text-sm mt-0.5">02</span>
              <p className="text-text-secondary leading-relaxed">Des processus manuels répétitifs qui coûtent des heures chaque semaine — copier-coller, mails de relance, rapports à la main.</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="font-mono text-teal text-sm mt-0.5">03</span>
              <p className="text-text-secondary leading-relaxed">Aucune visibilité en temps réel sur vos opérations — vous pilotez avec des données d'il y a deux semaines.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services Section ───
const services = [
  {
    num: '01',
    title: 'Applications web métier',
    desc: 'Outils sur mesure qui remplacent vos fichiers Excel et processus manuels. Interfaces modernes, données centralisées, accès multi-utilisateurs.',
    stack: 'React · Supabase · Vercel',
  },
  {
    num: '02',
    title: 'Automatisation de workflows',
    desc: 'Scripts et pipelines qui exécutent automatiquement les tâches répétitives. Traitement de données, génération de rapports, synchronisation entre systèmes.',
    stack: 'Python · API · Intégrations',
  },
  {
    num: '03',
    title: 'Dashboards & KPI',
    desc: 'Tableaux de bord connectés à vos données réelles. Visualisez vos indicateurs clés en temps réel, identifiez les dérives avant qu\'elles ne coûtent.',
    stack: 'Streamlit · React · Data viz',
  },
  {
    num: '04',
    title: 'Conseil en digitalisation',
    desc: 'Audit de vos processus existants, identification des gains rapides, roadmap de transformation. Pas de PowerPoint — un plan d\'action concret.',
    stack: 'DMAIC · Lean · Process mapping',
  },
]

function Services() {
  return (
    <section id="services" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-[10px] tracking-[3px] uppercase text-text-dim mb-4">Services</div>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-16">
          Ce que je construis<span className="text-teal">.</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.num} className="group bg-carbon border border-border rounded-2xl p-8 hover:border-teal/30 transition-all duration-300">
              <span className="font-mono text-xs text-teal">{s.num}</span>
              <h3 className="font-display font-semibold text-xl mt-3 mb-4 group-hover:text-teal transition-colors">{s.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="font-mono text-[11px] text-text-dim tracking-wide">{s.stack}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Approach Section ───
function Approach() {
  return (
    <section id="approche" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-[10px] tracking-[3px] uppercase text-text-dim mb-4">Approche</div>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-16">
          Pas un dev généraliste<span className="text-teal">.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-10 h-10 bg-teal-glow border border-teal/20 rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round"><path d="M2 12h5l3-9 4 18 3-9h5"/></svg>
            </div>
            <h3 className="font-display font-semibold text-lg">Expertise terrain</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Je travaille dans l'industrie au quotidien. Je comprends les contraintes de production, qualité et processus avant d'écrire une ligne de code.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 bg-teal-glow border border-teal/20 rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            </div>
            <h3 className="font-display font-semibold text-lg">Code sur mesure</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Pas de template générique. Chaque outil est construit pour votre métier, vos données, vos équipes. Du code propre, maintenable et évolutif.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 bg-teal-glow border border-teal/20 rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round"><path d="M12 20V10M6 20V4M18 20v-4"/></svg>
            </div>
            <h3 className="font-display font-semibold text-lg">Résultats mesurables</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Chaque projet démarre par un objectif chiffré. Heures économisées, erreurs réduites, visibilité gagnée. Pas de promesses — des métriques.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-carbon border border-border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="font-mono text-[10px] tracking-[3px] uppercase text-text-dim mb-3">Qui suis-je</div>
            <h3 className="font-display font-bold text-2xl mb-4">Guillaume Barré</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-3">
              Chargé de missions industrialisation chez un fabricant de dispositifs médicaux. 
              En parallèle, je conçois des outils digitaux pour les PME qui veulent sortir de l'artisanat opérationnel.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Formation Technicien ES en Processus. Certifié DMAIC / Six Sigma. 
              Basé dans le Canton du Jura, je travaille avec des PME de toute la Suisse romande.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-w-[200px]">
            <div className="font-mono text-[10px] tracking-[3px] uppercase text-text-dim mb-1">Stack</div>
            {['React · Vite · TailwindCSS', 'Supabase · Vercel', 'Python · Streamlit', 'DMAIC · Six Sigma · SPC'].map((t, i) => (
              <div key={i} className="font-mono text-xs text-teal/80 bg-teal-glow px-3 py-1.5 rounded-md">{t}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contact Section ───
function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const data = new FormData(form)
    
    // Formspree or mailto fallback
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    
    window.location.href = `mailto:guillaume.barre@procelar.com?subject=Contact via procelar.com — ${name}&body=${encodeURIComponent(`De: ${name}\nEmail: ${email}\n\n${message}`)}`
    
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="font-mono text-[10px] tracking-[3px] uppercase text-text-dim mb-4">Contact</div>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
          Un projet en tête<span className="text-teal">?</span>
        </h2>
        <p className="text-text-secondary mb-12 max-w-lg">
          Décrivez votre besoin en quelques lignes. Je reviens vers vous sous 48h avec une première analyse gratuite.
        </p>

        {sent ? (
          <div className="bg-teal-glow border border-teal/30 rounded-2xl p-10 text-center">
            <div className="text-teal text-4xl mb-4">✓</div>
            <h3 className="font-display font-semibold text-xl mb-2">Message prêt à envoyer</h3>
            <p className="text-text-secondary text-sm">Votre client mail va s'ouvrir avec le message pré-rempli.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-[10px] tracking-[2px] uppercase text-text-dim block mb-2">Nom</label>
                <input 
                  name="name" 
                  required
                  className="w-full bg-carbon border border-border rounded-lg px-4 py-3 text-frost text-sm focus:outline-none focus:border-teal/50 transition-colors placeholder:text-text-dim"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[2px] uppercase text-text-dim block mb-2">Email</label>
                <input 
                  name="email" 
                  type="email" 
                  required
                  className="w-full bg-carbon border border-border rounded-lg px-4 py-3 text-frost text-sm focus:outline-none focus:border-teal/50 transition-colors placeholder:text-text-dim"
                  placeholder="vous@entreprise.ch"
                />
              </div>
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-[2px] uppercase text-text-dim block mb-2">Votre besoin</label>
              <textarea 
                name="message" 
                rows={5} 
                required
                className="w-full bg-carbon border border-border rounded-lg px-4 py-3 text-frost text-sm focus:outline-none focus:border-teal/50 transition-colors placeholder:text-text-dim resize-none"
                placeholder="Décrivez brièvement votre situation et ce que vous cherchez à améliorer..."
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="px-8 py-3.5 bg-teal text-void font-semibold rounded-lg hover:bg-teal-light transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.3)] disabled:opacity-50"
            >
              {loading ? 'Envoi...' : 'Envoyer le message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

// ─── Footer ───
function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo className="text-base" />
        <div className="font-mono text-[11px] text-text-dim tracking-wide">
          Clarity in every process.
        </div>
        <div className="text-xs text-text-dim">
          © {new Date().getFullYear()} Procelar · Courrendlin, Suisse
        </div>
      </div>
    </footer>
  )
}

// ─── App ───
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Services />
      <Approach />
      <Contact />
      <Footer />
    </>
  )
}
