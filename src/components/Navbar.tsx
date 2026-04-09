import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import logo from '@/assets/logo.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/shop', label: t('shop') },
    { to: '/cart', label: t('cart') },
    { to: '/about', label: t('about') },
    { to: '/contact', label: t('contact') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-card' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Wilds" className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div>
              <span className="font-heading text-xl font-bold text-foreground tracking-wide">WILDS</span>
              <span className="block text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Cake Flower & Drink</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:origin-left after:transition-transform after:duration-300 ${
                  location.pathname === link.to ? 'text-primary after:scale-x-100' : 'text-foreground/80 after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 rounded-full transition-colors duration-300 hover:bg-secondary">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-full hover:bg-secondary transition-colors">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-background/98 backdrop-blur-lg border-t border-border px-6 py-4 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.to ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-secondary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
