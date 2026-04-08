import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ScrollReveal from '@/components/ScrollReveal';
import heroCake from '@/assets/hero-cake.jpg';
import heroFlowers from '@/assets/hero-flowers.jpg';
import heroDrinks from '@/assets/hero-drinks.jpg';
import categoryCakes from '@/assets/category-cakes.jpg';
import categoryFloral from '@/assets/category-floral.jpg';
import categoryJuices from '@/assets/category-juices.jpg';

const heroSlides = [
  { image: heroCake, key: 'cake' },
  { image: heroFlowers, key: 'flowers' },
  { image: heroDrinks, key: 'drinks' },
];

const Home = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: t('cakes'), image: categoryCakes, count: '25+' },
    { name: t('floral'), image: categoryFloral, count: '15+' },
    { name: t('juices'), image: categoryJuices, count: '12+' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.key}
            className={`absolute inset-0 transition-all duration-1000 ${i === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          >
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 backdrop-blur-md text-background text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Premium Gifting Experience</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
                {t('heroTitle')}
              </h1>
              <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
                {t('heroSubtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-luxury hover:scale-105"
                >
                  {t('shopNow')} <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/96565643999?text=${encodeURIComponent(t('whatsappMessage'))}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-background/40 text-background font-semibold text-sm backdrop-blur-sm transition-all duration-300 hover:bg-background/20 hover:scale-105"
                >
                  {t('orderWhatsApp')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`transition-all duration-500 rounded-full ${i === currentSlide ? 'w-8 h-2 bg-background' : 'w-2 h-2 bg-background/40'}`}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{t('categories')}</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">{t('categoriesSubtitle')}</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 150}>
                <Link to="/shop" className="group relative block aspect-[4/5] rounded-2xl overflow-hidden shadow-card hover-lift">
                  <img src={cat.image} alt={cat.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-sm text-background/60 font-medium">{cat.count} Products</span>
                    <h3 className="font-heading text-2xl font-bold text-background">{cat.name}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{t('featuredProducts')}</h2>
              <p className="text-muted-foreground">{t('featuredSubtitle')}</p>
            </div>
            <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300">
              {t('viewAll')} <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 100}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          <div className="md:hidden text-center mt-8">
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              {t('viewAll')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <img src={heroCake} alt="Premium cake" loading="lazy" className="rounded-2xl shadow-luxury w-full aspect-[4/3] object-cover" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <span className="text-sm font-semibold text-primary tracking-wider uppercase">About Us</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{t('aboutPreviewTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed">{t('aboutPreviewText')}</p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  {t('learnMore')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-rose relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">{t('ctaTitle')}</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">{t('ctaSubtitle')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-foreground font-semibold text-sm transition-all duration-300 hover:shadow-luxury hover:scale-105"
              >
                {t('shopNow')} <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/96565643999?text=${encodeURIComponent(t('whatsappMessage'))}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-sm transition-all duration-300 hover:bg-primary-foreground/10"
              >
                {t('orderWhatsApp')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Home;
