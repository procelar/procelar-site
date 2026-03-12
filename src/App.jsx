import { useState, useEffect, useRef } from 'react'

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
          <a href="#modules" className="text-sm text-text-secondary hover:text-frost transition-colors">Modules</a>
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
          <a href="#modules" onClick={() => setOpen(false)} className="text-sm text-text-secondary">Modules</a>
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
        <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 leading-[0.95]">
          Vos processus,<br/>
          <span className="text-teal">enfin clairs.</span>
        </h1>

        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Votre ERP gère la compta. Procelar digitalise le reste — planning
          d'atelier, suivi d'outillage, consommables.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="px-8 py-3.5 bg-teal text-void font-semibold rounded-lg hover:bg-teal-light transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]">
            Discutons de votre projet
          </a>
          <a href="#modules" className="px-8 py-3.5 border border-border text-text-secondary rounded-lg hover:border-teal/40 hover:text-frost transition-colors">
            Voir les modules
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
              <p className="text-text-secondary leading-relaxed">Votre ERP couvre la comptabilité et la facturation. Le planning d'atelier, le suivi d'outillage, les consommables — c'est encore Excel, papier, ou la mémoire du chef d'équipe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Showcase Carousel — Module Mockups ───
const showcaseModules = [
  {
    title: 'Planning de production',
    subtitle: 'Charge machine en temps réel',
    mockup: 'kanban',
  },
  {
    title: 'Suivi d\'outillage',
    subtitle: 'Durée de vie & alertes',
    mockup: 'tools',
  },
  {
    title: 'Gestion des consommables',
    subtitle: 'Stock & réapprovisionnement',
    mockup: 'consumables',
  },
  {
    title: 'Dashboard TRS',
    subtitle: 'Rendement par machine',
    mockup: 'trs',
  },
]

// Mini visual mockups built in pure JSX
function MockupPlanning() {
  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven']
  const machines = [
    { name: 'Machine 1', jobs: [{ start: 0, span: 2, label: 'OF-1247', color: 'bg-teal' }, { start: 2.5, span: 1.5, label: 'OF-1251', color: 'bg-blue-accent' }, { start: 4.2, span: 0.8, label: 'OF-1255', color: 'bg-teal/60' }] },
    { name: 'Machine 2', jobs: [{ start: 0, span: 3, label: 'OF-1243', color: 'bg-amber-500' }, { start: 3.5, span: 1.5, label: 'OF-1249', color: 'bg-teal' }] },
    { name: 'Machine 3', jobs: [{ start: 0.5, span: 1, label: 'OF-1245', color: 'bg-blue-accent' }, { start: 1.8, span: 2.2, label: 'OF-1248', color: 'bg-teal' }, { start: 4.2, span: 0.8, label: 'OF-1253', color: 'bg-amber-500/80' }] },
    { name: 'Machine 4', jobs: [{ start: 0, span: 1.5, label: 'OF-1244', color: 'bg-teal/60' }, { start: 2, span: 2, label: 'OF-1250', color: 'bg-blue-accent' }] },
  ]
  return (
    <div className="flex flex-col gap-0 h-full">
      {/* Timeline header */}
      <div className="grid grid-cols-[70px_1fr] gap-2 mb-2">
        <div />
        <div className="grid grid-cols-5 gap-px">
          {days.map((d) => (
            <div key={d} className="text-xs font-mono text-text-dim text-center uppercase tracking-wider">{d}</div>
          ))}
        </div>
      </div>
      {/* Rows */}
      {machines.map((m) => (
        <div key={m.name} className="grid grid-cols-[70px_1fr] gap-2 mb-1.5">
          <div className="text-sm text-frost font-medium flex items-center">{m.name}</div>
          <div className="relative bg-surface rounded h-9 overflow-hidden">
            {/* Grid lines */}
            {[1,2,3,4].map((i) => (
              <div key={i} className="absolute top-0 bottom-0 border-l border-border/30" style={{ left: `${i * 20}%` }} />
            ))}
            {/* Jobs */}
            {m.jobs.map((job) => (
              <div
                key={job.label}
                className={`absolute top-1 bottom-1 ${job.color} rounded flex items-center px-1.5 cursor-default`}
                style={{ left: `${(job.start / 5) * 100}%`, width: `${(job.span / 5) * 100}%` }}
              >
                <span className="text-[10px] font-mono text-void font-semibold truncate">{job.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Legend */}
      <div className="mt-auto flex items-center gap-4 pt-2 border-t border-border/30">
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-teal" /><span className="text-xs text-text-dim">Planifié</span></div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-amber-500" /><span className="text-xs text-text-dim">En retard</span></div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-blue-accent" /><span className="text-xs text-text-dim">Urgent</span></div>
        <div className="ml-auto text-xs font-mono text-teal">Charge : 84%</div>
      </div>
    </div>
  )
}

function MockupTools() {
  const tools = [
    { name: 'Outil T45', life: 82, status: 'ok' },
    { name: 'Outil T12', life: 23, status: 'warning' },
    { name: 'Outil T08', life: 95, status: 'ok' },
    { name: 'Outil T33', life: 8, status: 'critical' },
    { name: 'Outil T30', life: 61, status: 'ok' },
  ]
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="grid grid-cols-[1fr_120px_70px] gap-3 text-xs font-mono uppercase tracking-wider text-text-dim px-2 pb-2 border-b border-border">
        <span>Outil</span><span className="text-right">Durée de vie</span><span className="text-right">État</span>
      </div>
      {tools.map((t) => (
        <div key={t.name} className="grid grid-cols-[1fr_120px_70px] gap-3 items-center bg-surface rounded px-3 py-2">
          <span className="text-sm text-frost font-medium truncate">{t.name}</span>
          <div className="flex items-center gap-2 justify-end">
            <div className="w-16 h-2 bg-void rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${t.status === 'critical' ? 'bg-red-500' : t.status === 'warning' ? 'bg-amber-500' : 'bg-teal'}`} style={{ width: `${t.life}%` }} />
            </div>
            <span className="text-sm font-mono text-text-dim w-8 text-right">{t.life}%</span>
          </div>
          <div className="flex justify-end">
            <span className={`text-xs font-mono px-2 py-1 rounded ${t.status === 'critical' ? 'bg-red-500/20 text-red-400' : t.status === 'warning' ? 'bg-amber-500/20 text-amber-400' : 'bg-teal/20 text-teal'}`}>
              {t.status === 'critical' ? 'ALERTE' : t.status === 'warning' ? 'BIENTÔT' : 'OK'}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function MockupConsumables() {
  const categories = [
    { name: 'Lubrifiants', stock: 75, min: 30, color: 'bg-teal' },
    { name: 'Plaquettes', stock: 18, min: 40, color: 'bg-red-500' },
    { name: 'Protections', stock: 82, min: 20, color: 'bg-teal' },
    { name: 'Fluides', stock: 25, min: 30, color: 'bg-amber-500' },
    { name: 'Abrasifs', stock: 60, min: 25, color: 'bg-teal' },
  ]
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="grid grid-cols-[100px_1fr_60px] gap-3 text-xs font-mono uppercase tracking-wider text-text-dim px-2 pb-1 border-b border-border">
        <span>Catégorie</span><span>Niveau de stock</span><span className="text-right">État</span>
      </div>
      {categories.map((c) => {
        const low = c.stock <= c.min
        return (
          <div key={c.name} className="grid grid-cols-[100px_1fr_60px] gap-3 items-center px-2">
            <span className="text-sm text-frost font-medium">{c.name}</span>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-3 bg-void rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${low ? (c.stock <= c.min * 0.6 ? 'bg-red-500' : 'bg-amber-500') : 'bg-teal'}`} style={{ width: `${c.stock}%` }} />
              </div>
              <span className="text-sm font-mono text-text-secondary w-10 text-right">{c.stock}%</span>
            </div>
            <div className="flex justify-end">
              {low ? (
                <span className={`text-xs font-mono px-2 py-1 rounded ${c.stock <= c.min * 0.6 ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}>
                  {c.stock <= c.min * 0.6 ? 'ALERTE' : 'BAS'}
                </span>
              ) : (
                <span className="text-xs font-mono px-2 py-1 rounded bg-teal/20 text-teal">OK</span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function MockupTRS() {
  const machines = [
    { name: 'Machine 1', trs: 87, dispo: 94, perf: 91, qual: 99 },
    { name: 'Machine 2', trs: 72, dispo: 85, perf: 88, qual: 96 },
    { name: 'Machine 3', trs: 91, dispo: 96, perf: 95, qual: 99 },
    { name: 'Machine 4', trs: 65, dispo: 78, perf: 86, qual: 97 },
  ]
  return (
    <div className="flex flex-col gap-2.5 h-full">
      <div className="grid grid-cols-5 gap-2 text-xs font-mono uppercase tracking-wider text-text-dim px-2 pb-2 border-b border-border">
        <span>Machine</span><span className="text-center">TRS</span><span className="text-center">Dispo</span><span className="text-center">Perf</span><span className="text-center">Qual</span>
      </div>
      {machines.map((m) => (
        <div key={m.name} className="grid grid-cols-5 gap-2 items-center bg-surface rounded px-3 py-2.5">
          <span className="text-sm text-frost font-semibold">{m.name}</span>
          <div className="flex flex-col items-center">
            <span className={`text-base font-bold font-mono ${m.trs >= 85 ? 'text-teal' : m.trs >= 70 ? 'text-amber-400' : 'text-red-400'}`}>{m.trs}%</span>
          </div>
          {[m.dispo, m.perf, m.qual].map((v, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-sm font-mono text-text-secondary">{v}%</span>
            </div>
          ))}
        </div>
      ))}
      <div className="mt-auto flex items-center justify-between bg-teal/10 rounded px-4 py-2.5">
        <span className="text-xs font-mono text-text-dim uppercase tracking-wider">TRS moyen atelier</span>
        <span className="text-xl font-bold font-mono text-teal">78.8%</span>
      </div>
    </div>
  )
}

function ModuleShowcase() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef(null)

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % showcaseModules.length)
    }, 5000)
  }

  useEffect(() => {
    resetInterval()
    return () => clearInterval(intervalRef.current)
  }, [])

  const handleClick = (i) => {
    setActive(i)
    resetInterval()
  }

  const mockups = [<MockupPlanning />, <MockupTools />, <MockupConsumables />, <MockupTRS />]

  return (
    <section id="modules" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-[10px] tracking-[3px] uppercase text-text-dim mb-4">Modules</div>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
          Ce que Procelar digitalise<span className="text-teal">.</span>
        </h2>
        <p className="text-text-secondary mb-12 max-w-2xl">
          Chaque module se branche sur votre installation existante. Ce qui fonctionne reste en place — Procelar couvre ce qui manque.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {showcaseModules.map((m, i) => (
            <button
              key={m.title}
              onClick={() => handleClick(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                active === i
                  ? 'bg-teal text-void'
                  : 'bg-carbon border border-border text-text-secondary hover:border-teal/30 hover:text-frost'
              }`}
            >
              {m.title}
            </button>
          ))}
        </div>

        {/* Mockup display */}
        <div className="bg-carbon border border-border rounded-2xl overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="font-mono text-sm text-text-dim">procelar — {showcaseModules[active].title.toLowerCase()}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              <span className="font-mono text-xs text-teal uppercase tracking-wider">Live</span>
            </div>
          </div>

          {/* Module header inside mockup */}
          <div className="px-5 pt-4 pb-3 border-b border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display font-semibold text-lg text-frost">{showcaseModules[active].title}</h3>
                <p className="text-sm text-text-dim mt-0.5">{showcaseModules[active].subtitle}</p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="px-3 py-1.5 bg-surface rounded text-xs font-mono text-text-dim">Aujourd'hui</div>
                <div className="px-3 py-1.5 bg-teal/10 border border-teal/20 rounded text-xs font-mono text-teal">Temps réel</div>
              </div>
            </div>
          </div>

          {/* Mockup content */}
          <div className="p-5 min-h-[280px]">
            {mockups[active]}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-6">
          {showcaseModules.map((_, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                active === i ? 'w-8 bg-teal' : 'w-2 bg-border hover:bg-text-dim'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Services Section ───
const services = [
  {
    num: '01',
    title: 'Applications métier sur mesure',
    desc: 'Des outils conçus pour votre activité, qui remplacent les fichiers Excel et les processus manuels. Données centralisées, accès multi-utilisateurs, disponible sur tablette en atelier.',
  },
  {
    num: '02',
    title: 'Automatisation des tâches répétitives',
    desc: 'Les rapports, relances et transferts de données se font automatiquement. Moins de saisie, moins d\'erreurs, plus de temps pour la production.',
  },
  {
    num: '03',
    title: 'Tableaux de bord & indicateurs',
    desc: 'Vos chiffres clés accessibles en un coup d\'œil — rendement machines, état des stocks, avancement des commandes. Mis à jour en temps réel.',
  },
  {
    num: '04',
    title: 'Intégration avec votre existant',
    desc: 'Procelar s\'adapte à votre installation. Ce qui fonctionne reste en place — les modules viennent compléter ce que votre ERP ne couvre pas.',
  },
]

function Services() {
  return (
    <section id="services" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-[10px] tracking-[3px] uppercase text-text-dim mb-4">Services</div>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-16">
          Ce que Procelar construit<span className="text-teal">.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.num} className="group bg-carbon border border-border rounded-2xl p-8 hover:border-teal/30 transition-all duration-300">
              <span className="font-mono text-xs text-teal">{s.num}</span>
              <h3 className="font-display font-semibold text-xl mt-3 mb-4 group-hover:text-teal transition-colors">{s.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
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
          Pas une agence généraliste<span className="text-teal">.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-10 h-10 bg-teal-glow border border-teal/20 rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round"><path d="M2 12h5l3-9 4 18 3-9h5"/></svg>
            </div>
            <h3 className="font-display font-semibold text-lg">Expertise terrain</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Procelar est né dans l'industrie. Des plannings de production sur Excel pendant que l'ERP reste ouvert dans un autre onglet — c'est cette réalité terrain qui guide chaque module que nous concevons.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 bg-teal-glow border border-teal/20 rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            </div>
            <h3 className="font-display font-semibold text-lg">Sur mesure uniquement</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Pas de template générique. Chaque module est construit pour votre métier, vos données et vos équipes. Un outil que vos opérateurs utilisent vraiment.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 bg-teal-glow border border-teal/20 rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round"><path d="M12 20V10M6 20V4M18 20v-4"/></svg>
            </div>
            <h3 className="font-display font-semibold text-lg">Résultats mesurables</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Chaque projet démarre par un objectif chiffré. Heures économisées, erreurs réduites, visibilité gagnée. Pas de promesses — des résultats.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-carbon border border-border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="font-mono text-[10px] tracking-[3px] uppercase text-text-dim mb-3">Intégration</div>
            <h3 className="font-display font-bold text-2xl mb-4">Votre ERP reste en place</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-3">
              Procelar conçoit des modules qui complètent votre ERP — pas qui le remplacent.
              L'intégration s'adapte à votre installation existante : ce qui fonctionne reste en place,
              Procelar digitalise ce qui manque.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Ancré dans l'industrie, Procelar accompagne les PME industrielles de Suisse romande
              avec une approche terrain et des résultats concrets.
            </p>
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

    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')

    window.location.href = `mailto:contact@procelar.com?subject=Contact via procelar.com — ${name}&body=${encodeURIComponent(`De: ${name}\nEmail: ${email}\n\n${message}`)}`

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
          Décrivez votre besoin en quelques lignes. Procelar revient vers vous sous 48h avec une première analyse gratuite.
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
          © {new Date().getFullYear()} Procelar · Suisse romande
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
      <ModuleShowcase />
      <Services />
      <Approach />
      <Contact />
      <Footer />
    </>
  )
}
