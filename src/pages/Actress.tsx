import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionHeading, ImagePlaceholder } from '@/components/actress/shared';
import {
  navItems,
  heroNotes,
  positioningTags,
  positioningFestivals,
  typecasts,
  collections,
  showreelBlocks,
  filmographyCategories,
  galleryCategories,
  festivalDirection,
  awardsBlocks,
  pressBlocks,
  pressQuotes,
  pressKitItems,
  representation,
  footerLinks,
} from '@/data/actressContent';

const Actress = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/70 backdrop-blur-sm">
        <div className="max-w-[1700px] mx-auto flex items-center justify-between h-24 px-8 md:px-16">
          <a href="#home" className="font-serif text-2xl tracking-[0.3em] text-foreground">
            IULIIA<span className="text-gold">·</span>SKIRGELLO
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-3 text-[12px] tracking-[0.15em] text-foreground hover:text-gold transition-colors duration-300"
          >
            MENU
            <Icon name={menuOpen ? 'X' : 'Menu'} size={18} strokeWidth={1.25} />
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-24 inset-x-0 bg-background/98 border-t border-gold/15 backdrop-blur-md">
            <div className="max-w-[1700px] mx-auto px-8 md:px-16 py-12 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8">
              {navItems.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[13px] tracking-[0.1em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 01. HOME / HERO */}
      <section id="home" className="relative min-h-screen flex items-end lg:items-center">
        <div className="absolute inset-0">
          <ImagePlaceholder
            label="Large cinematic portrait — close-up, dark background, direct gaze"
            aspect="aspect-auto"
            className="w-full h-full border-none bg-secondary/20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="relative z-10 max-w-[1700px] mx-auto w-full px-8 md:px-16 pt-40 pb-20 lg:py-0 grid lg:grid-cols-[1.4fr_1fr] gap-16 items-end lg:items-center">
          <div className="animate-fade-up">
            <p className="text-[13px] tracking-[0.35em] text-gold mb-8">FILM & TELEVISION ACTRESS</p>
            <h1 className="font-serif text-6xl md:text-8xl leading-[0.92] mb-6">
              Iuliia Skirgello
            </h1>
            <p className="text-lg text-foreground/85 mb-6 max-w-xl font-light italic">
              Actress. Storyteller. Cinematic Presence.
            </p>
            <p className="text-muted-foreground mb-12 max-w-xl font-light leading-relaxed">
              A screen actress with a powerful dramatic range, magnetic stillness, and a rare ability
              to carry mystery, authority, vulnerability, and danger in one frame.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#showreel" className="inline-flex items-center gap-4 bg-primary hover:bg-primary/80 transition-all duration-300 text-primary-foreground tracking-[0.1em] px-10 py-4 text-[13px]">
                VIEW SHOWREEL
                <Icon name="Play" size={15} strokeWidth={1.25} />
              </a>
              <a href="#press-kit" className="inline-flex items-center gap-4 border border-gold/40 hover:border-gold hover:bg-gold hover:text-background transition-all duration-300 text-foreground tracking-[0.1em] px-10 py-4 text-[13px]">
                DOWNLOAD PRESS KIT
                <Icon name="Download" size={15} strokeWidth={1.25} />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-6 border-l border-gold/20 pl-10">
            {heroNotes.map((n, i) => (
              <div key={n} className="flex items-start gap-4 animate-fade-up" style={{ animationDelay: `${0.1 * i + 0.2}s` }}>
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span className="text-[13px] tracking-[0.03em] text-foreground/80 leading-snug font-light">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02. ABOUT */}
      <section id="about" className="py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-[1700px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ImagePlaceholder label="Black & white portrait / seated editorial portrait" aspect="aspect-[4/5]" />
          <div>
            <p className="text-[13px] tracking-[0.35em] text-gold mb-6">ABOUT</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-10 leading-[1.1] italic">
              Acting is not performance.<br />It is transformation.
            </h2>
            <p className="text-foreground/80 mb-6 font-light leading-relaxed max-w-lg">
              Iuliia Skirgello is an actress shaped by psychological depth, physical precision, and
              cinematic instinct. Her screen presence lives in contrast: softness and control, elegance
              and danger, silence and emotional force.
            </p>
            <p className="text-muted-foreground mb-6 font-light leading-relaxed max-w-lg">
              Her work is rooted in character psychology, embodied acting, and the belief that every
              role must carry an inner secret.
            </p>
            <p className="text-muted-foreground mb-10 font-light leading-relaxed max-w-lg">
              She is drawn to complex women: rulers, mystics, anti-heroines, mothers, artists, survivors,
              and women standing at the edge of power, destiny, and self-recognition.
            </p>
            <p className="font-serif text-2xl text-gold italic leading-snug max-w-md">
              She does not play obvious women. She reveals hidden ones.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1700px] mx-auto px-8 md:px-16"><div className="thin-rule" /></div>

      {/* 03. ARTISTIC POSITIONING */}
      <section className="py-32 md:py-44 px-8 md:px-16 bg-secondary/40">
        <div className="max-w-[1700px] mx-auto">
          <SectionHeading
            eyebrow="ARTISTIC POSITIONING"
            title="Built for cinema that remembers the face."
            align="center"
            className="mb-20"
          />
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-6">Focus</p>
              <div className="flex flex-wrap gap-3">
                {positioningTags.map((t) => (
                  <span key={t} className="text-[13px] font-light text-foreground/80 border border-gold/25 px-4 py-2">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-6">Long-term direction</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {positioningFestivals.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span className="text-[14px] font-light text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center font-serif text-2xl md:text-3xl text-gold italic">
            A face for power. A mind for mystery. A body for transformation.
          </p>
        </div>
      </section>

      {/* 04. TYPECASTS */}
      <section id="typecasts" className="py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-[1700px] mx-auto">
          <SectionHeading
            eyebrow="TYPECASTS"
            title="15 Typecasts. One cinematic range."
            align="center"
            className="mb-20"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-border/40">
            {typecasts.map((t) => (
              <div key={t.n} className="bg-background p-8 flex flex-col gap-6 hover-lift">
                <ImagePlaceholder label={`${t.title} — editorial portrait`} aspect="aspect-[3/4]" />
                <div>
                  <span className="text-gold/60 text-xs tracking-[0.1em]">{t.n}</span>
                  <h3 className="font-serif text-xl mb-2 mt-1">{t.title}</h3>
                  <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. SIGNATURE ROLE COLLECTIONS */}
      <section id="signature-roles" className="py-32 md:py-44 px-8 md:px-16 bg-secondary/40">
        <div className="max-w-[1700px] mx-auto">
          <SectionHeading
            eyebrow="SIGNATURE ROLE COLLECTIONS"
            title="Roles written for her energy."
            align="center"
            className="mb-20"
          />
          <div className="space-y-24">
            {collections.map((c, i) => (
              <div key={c.roman} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <ImagePlaceholder label={c.placeholder} aspect="aspect-[4/5]" />
                <div>
                  <p className="font-serif text-gold text-lg mb-3">Collection {c.roman}</p>
                  <h3 className="font-serif text-3xl md:text-4xl mb-4">{c.title}</h3>
                  <p className="text-[13px] tracking-[0.05em] uppercase text-muted-foreground mb-6">
                    Includes: {c.includes}
                  </p>
                  <p className="text-foreground/70 font-light leading-relaxed">{c.roles}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. SHOWREEL */}
      <section id="showreel" className="py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-[1700px] mx-auto">
          <SectionHeading
            eyebrow="SHOWREEL"
            title="Not fragments. Evidence."
            align="center"
            className="mb-20"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {showreelBlocks.map((s) => (
              <div key={s.title} className="group cursor-pointer">
                <div className="relative aspect-video mb-5 overflow-hidden">
                  <ImagePlaceholder label={`${s.title} — video cover`} aspect="aspect-auto" className="w-full h-full" />
                  <div className="absolute inset-0 bg-background/30 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border border-gold/60 flex items-center justify-center group-hover:bg-gold group-hover:text-background transition-all duration-300">
                      <Icon name="Play" size={18} strokeWidth={1.25} className="ml-0.5" />
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-xl mb-2">{s.title}</h3>
                <p className="text-[13px] text-muted-foreground font-light">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href="#" className="inline-flex items-center gap-4 bg-primary hover:bg-primary/80 transition-all duration-300 text-primary-foreground tracking-[0.1em] px-10 py-4 text-[13px]">
              WATCH SHOWREEL
              <Icon name="Play" size={15} strokeWidth={1.25} />
            </a>
          </div>
        </div>
      </section>

      {/* 07. FILMOGRAPHY */}
      <section id="filmography" className="py-32 md:py-44 px-8 md:px-16 bg-secondary/40">
        <div className="max-w-[1700px] mx-auto">
          <SectionHeading
            eyebrow="FILMOGRAPHY"
            title="Selected Screen & Stage Work"
            className="mb-20"
          />
          <div>
            {filmographyCategories.map((f, i) => (
              <div key={f.title}>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 py-10">
                  <span className="font-serif text-2xl text-gold/80 md:w-64 shrink-0">{f.title}</span>
                  <span className="text-foreground/70 font-light">{f.desc}</span>
                </div>
                {i < filmographyCategories.length - 1 && <div className="thin-rule" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. GALLERY */}
      <section id="gallery" className="py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-[1700px] mx-auto">
          <SectionHeading
            eyebrow="GALLERY"
            title="Faces of one cinematic universe."
            align="center"
            className="mb-20"
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryCategories.map((g) => (
              <ImagePlaceholder key={g} label={g} aspect="aspect-[3/4]" />
            ))}
          </div>
        </div>
      </section>

      {/* 09. AWARDS & FESTIVALS */}
      <section id="awards" className="py-32 md:py-44 px-8 md:px-16 bg-secondary/40">
        <div className="max-w-[1700px] mx-auto">
          <SectionHeading
            eyebrow="AWARDS & FESTIVALS"
            title="Designed for international cinema."
            align="center"
            className="mb-20"
          />
          <div className="mb-20">
            <p className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-6 text-center">Festival direction</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {festivalDirection.map((f) => (
                <span key={f} className="text-[13px] font-light text-foreground/80 border border-gold/25 px-4 py-2">
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {awardsBlocks.map((a) => (
              <div key={a.title} className="text-center">
                <h3 className="font-serif text-2xl mb-3 text-gold">{a.title}</h3>
                <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRESS */}
      <section id="press" className="py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-[1700px] mx-auto">
          <SectionHeading
            eyebrow="PRESS"
            title="The woman behind the frame."
            align="center"
            className="mb-20"
          />
          <div className="grid sm:grid-cols-3 gap-10 mb-24">
            {pressBlocks.map((p) => (
              <div key={p.title} className="text-center">
                <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
                <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {pressQuotes.map((q) => (
              <p key={q} className="font-serif text-xl italic text-foreground/80 border-l border-gold/30 pl-6 leading-relaxed">
                "{q}"
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 11. DIRECTOR'S NOTE */}
      <section id="directors-note" className="py-32 md:py-44 px-8 md:px-16 bg-secondary/40">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[13px] tracking-[0.35em] text-gold mb-10">DIRECTOR'S NOTE</p>
          <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 italic">
            I am interested in women who are not easy to explain.
          </p>
          <p className="text-foreground/75 font-light leading-relaxed mb-6">
            I am drawn to characters who live between beauty and danger, tenderness and control, truth
            and performance. Women who lead, protect, destroy, seduce, heal, manipulate, survive, and
            transform.
          </p>
          <p className="text-foreground/75 font-light leading-relaxed mb-6">
            I do not look for roles that simply show emotion. I look for roles where emotion has a price.
          </p>
          <p className="text-foreground/75 font-light leading-relaxed">
            For me, cinema begins when a woman enters the frame and the audience understands: something
            is hidden here. That hidden thing is where I work.
          </p>
        </div>
      </section>

      {/* 12. PRESS KIT */}
      <section id="press-kit" className="py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-[1700px] mx-auto">
          <SectionHeading
            eyebrow="PRESS KIT"
            title="For directors, producers, casting directors, and press."
            align="center"
            className="mb-20"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-8 mb-20 max-w-4xl mx-auto">
            {pressKitItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Icon name="FileText" size={16} strokeWidth={1.25} className="text-gold shrink-0" />
                <span className="text-[14px] font-light text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="#" className="inline-flex items-center gap-3 bg-primary hover:bg-primary/80 transition-all duration-300 text-primary-foreground tracking-[0.1em] px-8 py-4 text-[13px]">
              DOWNLOAD RESUME
              <Icon name="Download" size={14} strokeWidth={1.25} />
            </a>
            <a href="#" className="inline-flex items-center gap-3 border border-gold/40 hover:border-gold hover:bg-gold hover:text-background transition-all duration-300 text-foreground tracking-[0.1em] px-8 py-4 text-[13px]">
              DOWNLOAD PRESS KIT
              <Icon name="Download" size={14} strokeWidth={1.25} />
            </a>
            <a href="#showreel" className="inline-flex items-center gap-3 border border-gold/40 hover:border-gold hover:bg-gold hover:text-background transition-all duration-300 text-foreground tracking-[0.1em] px-8 py-4 text-[13px]">
              VIEW SHOWREEL
              <Icon name="Play" size={14} strokeWidth={1.25} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 border border-gold/40 hover:border-gold hover:bg-gold hover:text-background transition-all duration-300 text-foreground tracking-[0.1em] px-8 py-4 text-[13px]">
              CONTACT REPRESENTATION
              <Icon name="ArrowRight" size={14} strokeWidth={1.25} />
            </a>
          </div>
        </div>
      </section>

      {/* 13. REPRESENTATION */}
      <section className="py-32 md:py-44 px-8 md:px-16 bg-secondary/40">
        <div className="max-w-[1700px] mx-auto">
          <SectionHeading
            eyebrow="REPRESENTATION"
            title="Professional inquiries"
            align="center"
            className="mb-20"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {representation.map((r) => (
              <div key={r.role} className="text-center">
                <h3 className="font-serif text-xl mb-3 text-gold">{r.role}</h3>
                <p className="text-[13px] text-muted-foreground font-light">{r.fields}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground font-light mt-16 max-w-lg mx-auto">
            Direct Contact — for selected international projects, collaborations, and press inquiries.
          </p>
        </div>
      </section>

      {/* 14. CONTACT */}
      <section id="contact" className="py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[13px] tracking-[0.35em] text-gold mb-6">CONTACT</p>
          <h2 className="font-serif text-4xl md:text-6xl mb-6 italic">Let's create something that stays.</h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            For film, series, festival projects, international co-productions, auteur cinema, psychological
            drama, thriller, fantasy, historical drama, and prestige television.
          </p>
        </div>
        <form className="max-w-2xl mx-auto space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <Input placeholder="Name" className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-gold font-light" />
            <Input placeholder="Company" className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-gold font-light" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Input placeholder="Email" type="email" className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-gold font-light" />
            <Input placeholder="Project Type" className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-gold font-light" />
          </div>
          <Textarea placeholder="Message" rows={5} className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-gold font-light resize-none" />
          <div className="text-center pt-6">
            <button type="submit" className="inline-flex items-center gap-4 bg-primary hover:bg-primary/80 transition-all duration-300 text-primary-foreground tracking-[0.1em] px-10 py-4 text-[13px]">
              SEND INQUIRY
              <Icon name="ArrowRight" size={15} strokeWidth={1.25} />
            </button>
          </div>
        </form>
        <p className="text-center text-[12px] tracking-[0.15em] uppercase text-muted-foreground/60 mt-20 font-light">
          Iuliia Skirgello — International Actress for Film & Series
        </p>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-16 py-16 border-t border-border/60">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div>
              <div className="font-serif text-2xl tracking-[0.25em] text-foreground mb-2">IULIIA SKIRGELLO</div>
              <p className="text-muted-foreground font-light italic">Actress. Storyteller. Cinematic Presence.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[13px] tracking-[0.05em] text-muted-foreground font-light">
            {footerLinks.map((l) => (
              <a key={l} href="#" className="hover:text-gold transition-colors duration-300">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Actress;
