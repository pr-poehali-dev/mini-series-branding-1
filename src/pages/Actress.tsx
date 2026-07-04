import Icon from '@/components/ui/icon';

const HERO = 'https://cdn.poehali.dev/projects/618b8948-269c-40a7-94b5-dcdcf6308751/files/2ab67bf7-cf2d-4161-9369-be0a946b2788.jpg';
const STAGE = 'https://cdn.poehali.dev/projects/618b8948-269c-40a7-94b5-dcdcf6308751/files/a4a0d89c-3288-4048-ae31-bf4345bb1a15.jpg';
const BACKSTAGE = 'https://cdn.poehali.dev/projects/618b8948-269c-40a7-94b5-dcdcf6308751/files/87e1de0f-01be-4606-b21a-4905aaa25acf.jpg';

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Showreel', href: '#showreel' },
  { label: 'Filmography', href: '#filmography' },
  { label: 'Contact', href: '#contact' },
];

const stats = [
  { n: '12+', t: 'Years on screen' },
  { n: '24', t: 'Film & TV roles' },
  { n: '5', t: 'Award nominations' },
];

const filmography = [
  { year: '2024', title: 'The Quiet Hour', role: 'Lead — Elena', type: 'Feature Film' },
  { year: '2023', title: 'Midnight Garden', role: 'Supporting — Clara', type: 'TV Series' },
  { year: '2022', title: 'Glass Horizon', role: 'Lead — Vera', type: 'Feature Film' },
  { year: '2021', title: 'After the Rain', role: 'Lead — Maya', type: 'Short Film' },
  { year: '2020', title: 'Echoes', role: 'Supporting — Alice', type: 'TV Series' },
];

const press = [
  '"A performance of rare emotional precision." — Screen Weekly',
  '"She commands every frame she\u2019s in." — Cinema Digest',
  '"One of the most compelling voices of her generation." — The Reel',
];

const Actress = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/60 backdrop-blur-sm">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between h-24 px-8 md:px-16">
          <div className="font-serif text-2xl tracking-[0.3em] text-foreground">
            AVA<span className="text-gold">·</span>REESE
          </div>
          <nav className="hidden lg:flex items-center gap-14">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="text-[13px] tracking-[0.08em] text-muted-foreground hover:text-gold transition-colors duration-300">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden sm:inline-block border border-gold/50 hover:border-gold hover:bg-gold hover:text-background transition-all duration-300 text-foreground text-[12px] tracking-[0.1em] px-7 py-3">
            Get in touch
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end lg:items-center">
        <div className="absolute inset-0">
          <img src={HERO} alt="Ava Reese" className="w-full h-full object-cover object-[65%_15%] grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-8 md:px-16 pt-40 pb-20 lg:py-0">
          <p className="text-[13px] tracking-[0.35em] text-gold mb-8 animate-fade-up">FILM & TELEVISION ACTRESS</p>
          <h1 className="font-serif text-6xl md:text-8xl leading-[0.92] mb-8 max-w-3xl animate-fade-up">
            Ava Reese
          </h1>
          <p className="text-lg text-foreground/80 mb-12 max-w-lg font-light animate-fade-up">
            Telling stories that stay with you long after the credits roll.
          </p>
          <div className="flex flex-wrap gap-x-16 gap-y-6 animate-fade-up">
            {stats.map((s) => (
              <div key={s.t}>
                <div className="font-serif text-4xl text-gold mb-1">{s.n}</div>
                <div className="text-[12px] tracking-[0.1em] text-muted-foreground uppercase">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={BACKSTAGE} alt="Backstage" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-[13px] tracking-[0.35em] text-gold mb-6">ABOUT</p>
            <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-[1.05]">
              A career built on honesty and craft
            </h2>
            <p className="text-foreground/80 mb-6 font-light leading-relaxed max-w-lg">
              Ava Reese is an actress known for bringing depth and quiet intensity to complex characters.
              Trained in classical theatre before moving into film and television, she has built a career
              on roles that demand emotional truth.
            </p>
            <p className="text-muted-foreground mb-10 font-light leading-relaxed max-w-lg">
              Her work spans festival darlings and studio productions alike, earning recognition for
              performances that linger — nuanced, restrained, and deeply human.
            </p>
            <div className="space-y-3">
              {press.map((p) => (
                <p key={p} className="text-sm text-foreground/60 italic font-light border-l border-gold/30 pl-5">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-8 md:px-16"><div className="thin-rule" /></div>

      {/* SHOWREEL */}
      <section id="showreel" className="py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] tracking-[0.35em] text-gold mb-6">SHOWREEL</p>
            <h2 className="font-serif text-4xl md:text-6xl">Selected performances</h2>
          </div>
          <div className="relative aspect-video max-w-4xl mx-auto overflow-hidden group cursor-pointer">
            <img src={STAGE} alt="Showreel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-gold/60 flex items-center justify-center group-hover:bg-gold group-hover:text-background transition-all duration-300">
                <Icon name="Play" size={26} strokeWidth={1.25} className="ml-1" />
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8 font-light">2:14 min — showreel 2024</p>
        </div>
      </section>

      {/* FILMOGRAPHY */}
      <section id="filmography" className="py-32 md:py-44 px-8 md:px-16 bg-secondary/40">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-20">
            <p className="text-[13px] tracking-[0.35em] text-gold mb-6">FILMOGRAPHY</p>
            <h2 className="font-serif text-4xl md:text-6xl">Selected roles</h2>
          </div>
          <div>
            {filmography.map((f, i) => (
              <div key={f.title}>
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-12 py-8">
                  <span className="font-serif text-2xl text-gold/70 md:w-20 shrink-0">{f.year}</span>
                  <span className="flex-1 text-xl md:text-2xl font-light">{f.title}</span>
                  <span className="text-foreground/60 font-light md:w-56">{f.role}</span>
                  <span className="text-[12px] tracking-[0.1em] uppercase text-muted-foreground md:w-36 text-left md:text-right">{f.type}</span>
                </div>
                {i < filmography.length - 1 && <div className="thin-rule" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[13px] tracking-[0.35em] text-gold mb-6">CONTACT</p>
            <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-[1.05]">
              For bookings and press
            </h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <Icon name="Mail" size={18} strokeWidth={1.25} className="text-gold" />
                <span className="text-foreground/85 font-light">contact@avareese.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="User" size={18} strokeWidth={1.25} className="text-gold" />
                <span className="text-foreground/85 font-light">Represented by Sterling Talent Agency</span>
              </div>
            </div>
            <a href="mailto:contact@avareese.com" className="inline-flex items-center gap-4 bg-primary hover:bg-primary/80 transition-all duration-300 text-primary-foreground tracking-[0.1em] px-10 py-4 text-[13px]">
              SEND A MESSAGE
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src={HERO} alt="" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-16 py-12 border-t border-border/60">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-muted-foreground font-light">
          <div className="font-serif text-lg tracking-[0.25em] text-foreground">AVA·REESE</div>
          <p>© 2024 Ava Reese. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Instagram', 'Youtube', 'Twitter'].map((s) => (
              <a key={s} href="#" className="hover:text-gold transition-colors duration-300">
                <Icon name={s} size={17} strokeWidth={1.25} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Actress;
