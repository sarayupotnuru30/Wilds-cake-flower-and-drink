import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

const Contact = () => {
  const { t } = useLanguage();

  const contactItems = [
    { icon: Phone, label: t('phone'), value: '+965 65643999', href: 'tel:+96565643999' },
    { icon: Mail, label: t('email'), value: 'Wilds.kuwait@gmail.com', href: 'mailto:Wilds.kuwait@gmail.com' },
    {
      icon: MapPin,
      label: t('address'),
      value: 'Wilds - Cake & Drink\nHawally, Tunis Street\nAl-Hammed Commercial Complex\nOpposite Grand Hyper Market\nShop No - 6\nZip Code - 30000',
    },
    { icon: Clock, label: t('businessHours'), value: t('hoursValue') },
  ];

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{t('contactUs')}</h1>
          <p className="text-muted-foreground">{t('contactSubtitle')}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal>
            <div className="space-y-6">
              {contactItems.map(item => (
                <div key={item.label} className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border/50 shadow-card">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground text-sm mb-1">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-pre-line">{item.value}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/96565643999?text=${encodeURIComponent(t('whatsappMessage'))}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-green-500 text-primary-foreground font-semibold transition-all duration-300 hover:bg-green-600 hover:shadow-lg"
              >
                {t('orderWhatsApp')}
              </a>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={200}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                const msg = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
                window.open(`https://wa.me/96565643999?text=${msg}`, '_blank');
              }}
              className="space-y-5 p-8 bg-card rounded-2xl border border-border/50 shadow-card"
            >
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">{t('yourName')}</label>
                <input name="name" required className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">{t('yourEmail')}</label>
                <input name="email" type="email" required className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">{t('message')}</label>
                <textarea name="message" rows={5} required className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none" />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-luxury hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" /> {t('sendMessage')}
              </button>
            </form>
          </ScrollReveal>
        </div>

      </div>
    </main>
  );
};

export default Contact;
