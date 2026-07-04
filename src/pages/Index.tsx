import Icon from '@/components/ui/icon';

const CDN = 'https://cdn.poehali.dev/projects/618b8948-269c-40a7-94b5-dcdcf6308751/bucket/brandbook';
const HERO = `${CDN}/portrait-1.jpg`;
const IMG_COFFEE = `${CDN}/portrait-2.jpg`;
const IMG_SOLUTION = `${CDN}/portrait-3.jpg`;
const IMG_DESK = `${CDN}/portrait-5.jpg`;

const nav = [
  { label: 'О НАС', href: '#about' },
  { label: 'КАК ЭТО РАБОТАЕТ', href: '#how' },
  { label: 'КЕЙСЫ', href: '#cases' },
  { label: 'ОТЗЫВЫ', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

const heroFeatures = [
  { icon: 'Clapperboard', title: 'ЕДИНАЯ', sub: 'СЮЖЕТНАЯ ЛИНИЯ' },
  { icon: 'Heart', title: 'ЭМОЦИОНАЛЬНАЯ', sub: 'СВЯЗЬ' },
  { icon: 'Users', title: 'БОЛЬШЕ КЛИЕНТОВ', sub: 'И УЗНАВАЕМОСТИ' },
  { icon: 'TrendingUp', title: 'СИСТЕМНОЕ', sub: 'ПРОДВИЖЕНИЕ' },
];

const problems = [
  'Контент выходит нерегулярно',
  'Аудитория быстро теряет интерес',
  'Нет отличия от конкурентов',
  'Подписчики смотрят, но не становятся клиентами',
  'Постоянная борьба за охваты и идеи',
];

const solutions = [
  'Удерживает внимание и вызывает доверие',
  'Формирует эмоциональную связь с аудиторией',
  'Повышает узнаваемость бренда',
  'Мотивирует возвращаться к контенту',
  'Помогает системно привлекать клиентов',
];

const differences = [
  { icon: 'Film', text: 'Единая сюжетная линия вместо разрозненных публикаций' },
  { icon: 'Heart', text: 'Эмоциональная связь между брендом и аудиторией' },
  { icon: 'Star', text: 'Личный бренд как медиа-продукт, а не просто эксперт' },
  { icon: 'Target', text: 'Система контента, которая работает на результат' },
  { icon: 'MessageCircle', text: 'Сериализация контента — аудитория ждёт продолжения' },
];

const proofs = [
  { icon: 'MicVocal', text: 'CustDev интервью' },
  { icon: 'ClipboardList', text: 'JTBD и карта задач' },
  { icon: 'LineChart', text: 'Анализ рынка и конкурентов' },
  { icon: 'Calculator', text: 'TAM / SAM / SOM расчёты' },
  { icon: 'Rocket', text: 'MVP и тестирование' },
  { icon: 'Sparkles', text: 'Гипотеза Product-Market Fit' },
];

const steps = [
  'Исследование и стратегия',
  'Концепция и сценарий',
  'Съёмка',
  'Монтаж и постпродакшн',
  'План публикации и продвижение',
  'Аналитика и развитие сценария',
];

const cases = [
  {
    icon: 'Brain',
    name: 'Психолог',
    role: 'Мини-сериал · 5 серий',
    result: '+320% клиентов',
    metric: '2.1M просмотров сезона',
  },
  {
    icon: 'Leaf',
    name: 'Нутрициолог',
    role: 'Мини-сериал · 6 серий',
    result: '×4 узнаваемость',
    metric: '48% досмотров серий',
  },
  {
    icon: 'Briefcase',
    name: 'Бизнес-коуч',
    role: 'Мини-сериал · 4 серии',
    result: '+90 заявок / мес',
    metric: '870K охват аудитории',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground film-grain overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between h-20 px-6">
          <div className="leading-tight">
            <div className="font-serif text-xl tracking-[0.25em] text-gold">STORY·BRAND</div>
            <div className="text-[9px] tracking-[0.3em] text-muted-foreground mt-0.5">
              СТУДИЯ МИНИ-СЕРИАЛОВ<br />ДЛЯ ЛИЧНОГО БРЕНДА
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="text-[11px] tracking-[0.15em] text-muted-foreground hover:text-gold transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#action" className="bg-primary hover:bg-primary/90 transition-colors text-primary-foreground text-[11px] tracking-[0.15em] px-6 py-3 rounded-md">
            ОБСУДИТЬ ПРОЕКТ
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="about" className="relative pt-32 pb-20 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={HERO} alt="hero" className="w-full h-full object-cover object-[70%_center] opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] mb-6">
              Мини-сериалы<br />
              <span className="text-gold italic">для личного бренда,</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-4 max-w-xl">
              которые привлекают больше клиентов и формируют крепкую эмоциональную связь с аудиторией.
            </p>
            <p className="text-muted-foreground mb-10 max-w-lg">
              Превращаем контент в историю, которая удерживает внимание и даёт результат.
            </p>
            <a href="#action" className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 transition-all hover:gap-4 text-primary-foreground tracking-wide px-8 py-4 rounded-md text-sm font-medium">
              ПОЛУЧИТЬ БЕСПЛАТНЫЙ РАЗБОР ПРОЕКТА
              <Icon name="ArrowRight" size={18} />
            </a>
            <p className="text-xs text-muted-foreground mt-4 tracking-wide">Концепция мини-сериала для вашего бренда</p>
          </div>

          <div className="hidden lg:flex flex-col gap-7">
            {heroFeatures.map((f, i) => (
              <div key={i} className="flex items-center gap-4 animate-fade-up" style={{ animationDelay: `${0.15 * i + 0.3}s` }}>
                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold shrink-0">
                  <Icon name={f.icon} size={20} />
                </div>
                <div className="text-[11px] tracking-[0.15em] leading-tight">
                  <div className="text-foreground">{f.title}</div>
                  <div className="text-muted-foreground">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM + SOLUTION */}
      <section id="how" className="grid md:grid-cols-2 border-y border-border">
        <div className="relative p-10 md:p-16 border-r border-border">
          <img src={IMG_COFFEE} alt="" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20" />
          <div className="relative">
            <p className="text-xs tracking-[0.3em] text-gold mb-4">ПРОБЛЕМА</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Обычный контент<br />больше не работает</h2>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-foreground/85">
                  <Icon name="X" size={18} className="text-primary mt-1 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-8 max-w-sm">
              В результате — хаос в контенте и отсутствие стабильных заявок.
            </p>
          </div>
        </div>

        <div className="relative p-10 md:p-16 bg-card">
          <img src={IMG_SOLUTION} alt="" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20" />
          <div className="relative">
            <p className="text-xs tracking-[0.3em] text-gold mb-4">РЕШЕНИЕ</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Мини-сериалы<br />для личного бренда</h2>
            <p className="text-muted-foreground mb-6 max-w-sm">Мы создаём последовательную историю о вас и вашем деле, которая:</p>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-foreground/85">
                  <Icon name="Check" size={18} className="text-gold mt-1 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DIFFERENCES */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-gold mb-4">В ЧЁМ НАШЕ ОТЛИЧИЕ</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-16">Мы создаём не отдельные ролики, а историю</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {differences.map((d) => (
              <div key={d.text} className="flex flex-col items-center hover-lift">
                <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-5">
                  <Icon name={d.icon} size={26} />
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES GALLERY */}
      <section id="cases" className="py-24 px-6 bg-card border-y border-border">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-gold mb-4">ГАЛЕРЕЯ ПРОЕКТОВ</p>
            <h2 className="font-serif text-4xl md:text-5xl">Готовые мини-сериалы<br />и результаты клиентов</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((c) => (
              <div key={c.name} className="group relative rounded-lg overflow-hidden hover-lift border border-border bg-background p-8 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center text-gold">
                    <Icon name={c.icon} size={24} />
                  </div>
                  <div className="bg-primary/90 text-primary-foreground text-xs tracking-wide px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Icon name="TrendingUp" size={14} />
                    {c.result}
                  </div>
                </div>
                <h3 className="font-serif text-3xl mb-1">{c.name}</h3>
                <p className="text-muted-foreground text-sm mb-8">{c.role}</p>
                <div className="mt-auto pt-6 border-t border-border flex items-center gap-2 text-gold text-sm">
                  <Icon name="PlayCircle" size={18} />
                  {c.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOFS + STEPS */}
      <section id="reviews" className="grid lg:grid-cols-2">
        <div className="relative p-10 md:p-16 border-r border-border">
          <img src={IMG_DESK} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
          <div className="relative">
            <p className="text-xs tracking-[0.3em] text-gold mb-4">ДОКАЗАТЕЛЬСТВА</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-10 leading-tight">Мы работаем на основе данных и проверенных подходов</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {proofs.map((p) => (
                <div key={p.text} className="flex flex-col items-start">
                  <div className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-3">
                    <Icon name={p.icon} size={18} />
                  </div>
                  <p className="text-sm text-foreground/85">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-10 md:p-16 bg-card">
          <p className="text-xs tracking-[0.3em] text-gold mb-4">КАК МЫ РАБОТАЕМ</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-10 leading-tight">От идеи до сериала<br />под ключ</h2>
          <div className="space-y-5">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-5 group">
                <span className="font-serif text-2xl text-gold w-10 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div className="h-px flex-1 max-w-[20px] bg-gold/40" />
                <span className="flex-1 text-foreground/90 group-hover:text-gold transition-colors">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION */}
      <section id="action" className="relative py-28 px-6 overflow-hidden">
        <img src={HERO} alt="" className="absolute right-0 top-0 h-full w-1/2 object-cover object-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        <div className="container mx-auto relative z-10 max-w-3xl">
          <p className="text-xs tracking-[0.3em] text-gold mb-4">ДЕЙСТВИЕ</p>
          <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">Запишитесь на бесплатный разбор вашего проекта</h2>
          <p className="text-muted-foreground mb-10 max-w-lg">
            На встрече мы предложим концепцию мини-сериала, покажем структуру первого сезона и рассчитаем стоимость пилота.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: 'CalendarClock', t: '30–40 минут', s: 'онлайн-встреча' },
              { icon: 'FileText', t: 'Концепция', s: 'мини-сериала' },
              { icon: 'BarChart3', t: 'Расчёт стоимости', s: 'пилотного проекта' },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold shrink-0">
                  <Icon name={x.icon} size={18} />
                </div>
                <div className="text-sm">
                  <div className="text-foreground">{x.t}</div>
                  <div className="text-muted-foreground">{x.s}</div>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 transition-all hover:gap-4 text-primary-foreground tracking-wide px-8 py-4 rounded-md text-sm font-medium">
            ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
            <Icon name="ArrowRight" size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="faq" className="border-t border-border py-10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="font-serif text-lg tracking-[0.25em] text-gold">STORY·BRAND</div>
          <p>© 2024 Студия мини-сериалов для личного бренда. История, которая работает на ваш бренд.</p>
          <div className="flex items-center gap-4">
            {['Instagram', 'Send', 'Youtube'].map((s) => (
              <a key={s} href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:text-gold hover:border-gold transition-colors">
                <Icon name={s} size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;