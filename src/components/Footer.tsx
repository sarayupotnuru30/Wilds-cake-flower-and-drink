import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Wilds" className="w-10 h-10 rounded-full" />
              <div>
                <span className="font-heading text-xl font-bold">WILDS</span>
                <span className="block text-[10px] tracking-[0.2em] opacity-60 uppercase">Cake Flower & Drink</span>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Premium cakes, luxury bouquets & fresh drinks in Kuwait.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://instagram.com/Wilds_kuwait" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">{t('quickLinks')}</h4>
            <div className="space-y-3">
              {[
                { to: '/', label: t('home') },
                { to: '/shop', label: t('shop') },
                { to: '/about', label: t('about') },
                { to: '/contact', label: t('contact') },
              ].map(link => (
                <Link key={link.to} to={link.to} onClick={scrollToTop} className="block text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">{t('productCategories')}</h4>
            <div className="space-y-3">
              {[t('cakes'), t('floral'), t('juices')].map(cat => (
                <Link key={cat} to="/shop" onClick={scrollToTop} className="block text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300">
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">{t('contactInfo')}</h4>
            <div className="space-y-4 text-sm opacity-70">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+965 65643999</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Wilds.kuwait@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Hawally, Tunis Street, Al-Hammed Commercial Complex</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-50">© 2024 Wilds. {t('allRightsReserved')}</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity duration-300">
            <ArrowUp className="w-4 h-4" /> {t('scrollToTop')}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
