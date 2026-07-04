import Icon from '@/components/ui/icon';

const CDN = 'https://cdn.poehali.dev/projects/618b8948-269c-40a7-94b5-dcdcf6308751/bucket/brandbook';
const HERO = `${CDN}/portrait-1.jpg`;
const IMG_COFFEE = `${CDN}/portrait-2.jpg`;
const IMG_SOLUTION = `${CDN}/portrait-3.jpg`;
const IMG_DESK = `${CDN}/portrait-4.jpg`;
const IMG_ACTION = `${CDN}/portrait-5.jpg`;

const nav = [
  { label: 'О нас', href: '#about' },
  { label: 'Процесс', href: '#process' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Контакты', href: '#action' },
];

const heroFeatures = [
  { icon: 'Clapperboard', text: 'Единая сюжетная линия' },
  { icon: 'Heart', text: 'Эмоциональная связь' },
  { icon: 'Users', text: 'Больше клиентов и узнаваемости' },
  { icon: 'TrendingUp', text: 'Системное продвижение' },
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
  { icon: 'MessageCircle', text: 'Сериализация — аудитория ждёт продолжения' },
];

const steps = [
  { n: '01', t: 'Исследование и стратегия' },
  { n: '02', t: 'Концепция и сценарий' },
  { n: '03', t: 'Съёмка' },
  { n: '04', t: 'Монтаж и постпродакшн' },
  { n: '05', t: 'План публикации' },
  { n: '06', t: 'Аналитика и развитие сценария' },
];

const cases = [
  { name: 'Психолог', role: 'Мини-сериал · 5 серий', result: '+320% клиентов', metric: '2.1M просмотров сезона' },
  { name: 'Нутрициолог', role: 'Мини-сериал · 6 серий', result: '×4 узнаваемость', metric: '48% досмотров серий' },
  { name: 'Бизнес-коуч', role: 'Мини-сериал · 4 серии', result: '+90 заявок / мес', metric: '870K охват аудитории' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground film-grain overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/60 backdrop-blur-sm">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between h-24 px-8 md:px-16">
          <div className="font-serif text-2xl tracking-[0.3em] text-foreground">
            STORY<span className="text-gold">·</span>BRAND
          </div>
          <nav className="hidden lg:flex items-center gap-14">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="text-[13px] tracking-[0.08em] text-muted-foreground hover:text-gold transition-colors duration-300">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#action" className="hidden sm:inline-block border border-gold/50 hover:border-gold hover:bg-gold hover:text-background transition-all duration-300 text-foreground text-[12px] tracking-[0.1em] px-7 py-3">
            Обсудить проект
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="about" className="relative min-h-screen flex items-end lg:items-center">
        <div className="absolute inset-0">
          <img src={HERO} alt="" className="w-full h-full object-cover object-[65%_20%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-8 md:px-16 pt-40 pb-20 lg:py-0 grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
          <div className="animate-fade-up">
            <p className="text-[13px] tracking-[0.35em] text-gold mb-8">СТУДИЯ МИНИ-СЕРИАЛОВ ДЛЯ ЛИЧНОГО БРЕНДА</p>
            <h1 className="font-serif text-6xl md:text-8xl leading-[0.92] mb-8 max-w-3xl">
              Мини-сериалы для личного бренда
            </h1>
            <p className="text-lg text-foreground/80 mb-3 max-w-lg font-light">
              Привлекают больше клиентов и формируют крепкую эмоциональную связь с аудиторией.
            </p>
            <p className="text-muted-foreground mb-12 max-w-md font-light">
              Превращаем контент в историю, которая удерживает внимание и даёт результат.
            </p>
            <a href="#action" className="inline-flex items-center gap-4 bg-primary hover:bg-primary/80 transition-all duration-300 text-primary-foreground tracking-[0.1em] px-10 py-4 text-[13px]">
              ПОЛУЧИТЬ БЕСПЛАТНЫЙ РАЗБОР
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>

          <div className="hidden lg:flex flex-col gap-8 border-l border-gold/20 pl-10">
            {heroFeatures.map((f, i) => (
              <div key={i} className="flex items-center gap-5 animate-fade-up" style={{ animationDelay: `${0.12 * i + 0.2}s` }}>
                <Icon name={f.icon} size={20} className="text-gold shrink-0" strokeWidth={1.25} />
                <span className="text-[13px] tracking-[0.05em] text-foreground/85 leading-snug">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[13px] tracking-[0.35em] text-gold mb-6">ПРОБЛЕМА</p>
            <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-[1.05]">
              Обычный контент<br />больше не работает
            </h2>
            <ul className="space-y-5 mb-10">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-4 text-foreground/75 font-light">
                  <span className="w-6 pt-1 shrink-0">
                    <span className="block w-3 h-px bg-muted-foreground/50" />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground max-w-sm font-light italic">
              В результате — хаос в контенте и отсутствие стабильных заявок.
            </p>
          </div>
          <div className="order-1 lg:order-2 aspect-[4/5] overflow-hidden">
            <img src={IMG_COFFEE} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-8 md:px-16"><div className="thin-rule" /></div>

      {/* SOLUTION */}
      <section className="relative py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={IMG_SOLUTION} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-[13px] tracking-[0.35em] text-gold mb-6">РЕШЕНИЕ</p>
            <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-[1.05]">
              Мини-сериалы<br />для личного бренда
            </h2>
            <p className="text-muted-foreground mb-8 max-w-sm font-light">
              Мы создаём последовательную историю о вас и вашем деле, которая:
            </p>
            <ul className="space-y-5">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-4 text-foreground/85 font-light">
                  <Icon name="Check" size={16} strokeWidth={1.25} className="text-gold mt-1 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DIFFERENCES */}
      <section className="py-32 md:py-44 px-8 md:px-16 bg-secondary/40">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-24">
            <p className="text-[13px] tracking-[0.35em] text-gold mb-6">ПОЧЕМУ МЫ ОТЛИЧАЕМСЯ</p>
            <h2 className="font-serif text-4xl md:text-5xl max-w-2xl mx-auto leading-tight">
              Мы создаём не отдельные ролики, а историю
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-16">
            {differences.map((d) => (
              <div key={d.text} className="flex flex-col items-center text-center">
                <Icon name={d.icon} size={30} strokeWidth={1} className="text-gold mb-7" />
                <p className="text-[14px] text-foreground/70 leading-relaxed font-light">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-32 md:py-44 px-8 md:px-16">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <p className="text-[13px] tracking-[0.35em] text-gold mb-6">КАК МЫ РАБОТАЕМ</p>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-[1.05]">
              От идеи до сериала<br />под ключ
            </h2>
            <p className="text-muted-foreground max-w-sm font-light">
              Шесть последовательных этапов — от глубокого исследования бренда до аналитики и развития сюжета сезона.
            </p>
          </div>
          <div>
            {steps.map((s, i) => (
              <div key={s.n} className="flex items-center gap-8 py-6">
                <span className="font-serif text-3xl text-gold/70 w-12 shrink-0">{s.n}</span>
                <span className="flex-1 text-foreground/85 font-light text-lg">{s.t}</span>
              </div>
            )).reduce((acc, el, i) => {
              acc.push(el);
              if (i < steps.length - 1) acc.push(<div key={`d${i}`} className="thin-rule" />);
              return acc;
            }, [] as JSX.Element[])}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-32 md:py-44 px-8 md:px-16 bg-secondary/40">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-24">
            <p className="text-[13px] tracking-[0.35em] text-gold mb-6">РЕЗУЛЬТАТЫ</p>
            <h2 className="font-serif text-4xl md:text-5xl">Готовые мини-сериалы</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-x-16 gap-y-16">
            {cases.map((c) => (
              <div key={c.name} className="text-center md:text-left">
                <div className="font-serif text-5xl text-gold mb-6">{c.result}</div>
                <h3 className="text-xl mb-1">{c.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 font-light">{c.role}</p>
                <p className="text-[13px] text-foreground/60 font-light tracking-wide">{c.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION */}
      <section id="action" className="relative min-h-screen flex items-center py-32">
        <div className="absolute inset-0">
          <img src={IMG_ACTION} alt="" className="w-full h-full object-cover object-[75%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/15" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-8 md:px-16">
          <div className="max-w-xl">
            <p className="text-[13px] tracking-[0.35em] text-gold mb-6">НАЧАТЬ</p>
            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-[1.02]">
              Запишитесь на бесплатный разбор
            </h2>
            <p className="text-muted-foreground mb-12 max-w-md font-light">
              Определим формат, предложим концепцию и рассчитаем стоимость пилотного сезона.
            </p>
            <a href="#" className="inline-flex items-center gap-4 bg-primary hover:bg-primary/80 transition-all duration-300 text-primary-foreground tracking-[0.1em] px-10 py-4 text-[13px]">
              ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-16 py-12 border-t border-border/60">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-muted-foreground font-light">
          <div className="font-serif text-lg tracking-[0.25em] text-foreground">STORY·BRAND</div>
          <p>© 2024 Студия мини-сериалов для личного бренда</p>
          <div className="flex items-center gap-6">
            {['Instagram', 'Send', 'Youtube'].map((s) => (
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

export default Index;
