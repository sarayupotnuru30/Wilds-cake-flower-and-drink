import { Cake, Flower2, GlassWater, PartyPopper } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';
import heroCake from '@/assets/hero-cake.jpg';
import heroFlowers from '@/assets/hero-flowers.jpg';

const About = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Cake, title: t('customCakes'), desc: 'From themed birthday cakes to elegant wedding masterpieces' },
    { icon: Flower2, title: t('premiumBouquets'), desc: 'Hand-crafted luxury bouquets for every occasion' },
    { icon: GlassWater, title: t('freshJuices'), desc: 'Refreshing fresh juices and creative mocktails' },
    { icon: PartyPopper, title: t('heliumBalloons'), desc: 'Festive helium balloons and arrangements' },
  ];

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-4 block">Our Story</span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">{t('aboutTitle')}</h1>
            <p className="text-muted-foreground leading-relaxed text-lg">{t('aboutDescription')}</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <img src={heroCake} alt="Premium cake" loading="lazy" className="rounded-2xl shadow-card w-full aspect-[3/4] object-cover" />
              <img src={heroFlowers} alt="Premium flowers" loading="lazy" className="rounded-2xl shadow-card w-full aspect-[3/4] object-cover mt-8" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{t('ourServices')}</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 150}>
                <div className="p-8 bg-card rounded-2xl border border-border/50 shadow-card text-center hover-lift">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
