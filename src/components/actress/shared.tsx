import Icon from '@/components/ui/icon';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading = ({ eyebrow, title, subtitle, align = 'left', className = '' }: SectionHeadingProps) => (
  <div className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
    <p className="text-[13px] tracking-[0.35em] text-gold mb-6">{eyebrow}</p>
    <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-4">{title}</h2>
    {subtitle && (
      <p className={`text-muted-foreground font-light max-w-xl ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>
    )}
  </div>
);

interface ImagePlaceholderProps {
  label: string;
  aspect?: string;
  className?: string;
}

export const ImagePlaceholder = ({ label, aspect = 'aspect-[3/4]', className = '' }: ImagePlaceholderProps) => (
  <div className={`${aspect} ${className} border border-gold/20 bg-secondary/30 flex flex-col items-center justify-center gap-3 text-center px-4`}>
    <Icon name="ImagePlus" size={20} strokeWidth={1} className="text-gold/40" />
    <span className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground/60 font-light leading-relaxed">
      {label}
    </span>
  </div>
);
