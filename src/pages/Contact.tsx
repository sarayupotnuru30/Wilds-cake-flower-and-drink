// import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';
// import { useLanguage } from '@/contexts/LanguageContext';
// import ScrollReveal from '@/components/ScrollReveal';

// const Contact = () => {
//   const { t } = useLanguage();

//   const contactItems = [
//     { 
//       icon: MapPin, 
//       label: t('visitUs') || 'Visit Us', 
//       value: 'Wilds - Cake & Drink\nHawally, Tunis Street\nAl-Hammed commercial complex, opposite to Grand Hyper Market, Shop no- 6.\nZip Code-30000',
//       linkText: t('viewOnMap') || 'View on Map', 
//       href: 'https://www.google.com/maps?cid=9179077762939181167&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en&gl=IN&source=embed', // Updated with your location link
//       iconBg: 'bg-[#FFB6C1]' 
//     },
//     { 
//       icon: Phone, 
//       label: t('callUs') || 'Call Us', 
//       value: '+965 65643999', 
//       linkText: t('callNow') || 'Call Now',
//       href: 'tel:+96565643999',
//       iconBg: 'bg-[#FFB6C1]' 
//     },
//     { 
//       icon: Instagram, 
//       label: 'Instagram', 
//       value: '@Wilds_kuwait\nFollow us for updates!', 
//       linkText: 'Open Instagram',
//       href: 'https://instagram.com/Wilds_kuwait',
//       iconBg: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' 
//     },
//     { 
//       icon: MessageCircle, 
//       label: 'WhatsApp', 
//       value: 'Message us directly for quick orders!',
//       linkText: 'Chat on WhatsApp',
//       href: `https://wa.me/96565643999?text=${encodeURIComponent("Hi Wilds Cake, Flower & Drink! Could you please share the list of items you have?")}`,
//       iconBg: 'bg-[#25D366]' 
//     },
//   ];

//   return (
//     <main className="pt-24 pb-16 min-h-screen bg-[#FFF5F7] text-[#4A4A4A]">
//       <div className="container mx-auto px-4 lg:px-8">
        
//         {/* Header Section */}
//         <ScrollReveal className="text-center mb-16">
//           <p className="text-[#FF69B4] uppercase tracking-[0.2em] text-sm font-bold mb-2">
//             {t('getInTouch') || 'GET IN TOUCH'}
//           </p>
//           <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-black">
//             {t('contactUs') || 'Contact Us'}
//           </h1>
//           <p className="text-[#7D7D7D] text-lg max-w-2xl mx-auto">
//             {t('contactSub') || 'Have questions or want to place a bulk order? Reach out to us!'}
//           </p>
//         </ScrollReveal>

//         {/* 4-Column Grid Structure */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {contactItems.map((item, index) => (
//             <ScrollReveal key={index} delay={index * 100}>
//               <div className="flex flex-col items-center text-center p-10 rounded-2xl bg-white border border-[#FFD1DC] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full group">
                
//                 {/* Circular Icon Container */}
//                 <div className={`w-16 h-16 rounded-full ${item.iconBg} flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform`}>
//                   <item.icon className="w-8 h-8 text-white" />
//                 </div>

//                 {/* Text Content */}
//                 <h3 className="text-xl font-bold mb-4 tracking-wide text-[#4A4A4A]">{item.label}</h3>
//                 <div className="flex-grow">
//                   <p className="text-sm text-[#7D7D7D] leading-relaxed whitespace-pre-line mb-6">
//                     {item.value}
//                   </p>
//                 </div>

//                 {/* Footer Style Link */}
//                 {item.linkText && item.href && (
//                   <a 
//                     href={item.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#FF69B4] font-semibold text-sm hover:text-[#D43790] flex items-center gap-2 transition-all underline underline-offset-4"
//                   >
//                     {item.linkText} <span>→</span>
//                   </a>
//                 )}
//               </div>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Contact;






import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

const Contact = () => {
  const { t, lang } = useLanguage();

  const contactItems = [
    { 
      icon: MapPin, 
      label: t('visitUs'),
      value: t('addressText'),
      linkText: t('viewOnMap'),
      href: 'https://www.google.com/maps?cid=9179077762939181167',
      iconBg: 'bg-[#FFB6C1]' 
    },
    { 
      icon: Phone, 
      label: t('callUs'),
      value: '+965 65643999',
      linkText: t('callNow'),
      href: 'tel:+96565643999',
      iconBg: 'bg-[#FFB6C1]' 
    },
    { 
      icon: Instagram, 
      label: t('instagram'),
      value: t('instagramText'),
      linkText: t('openInstagram'),
      href: 'https://instagram.com/Wilds_kuwait',
      iconBg: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' 
    },
    { 
      icon: MessageCircle, 
      label: t('whatsapp'),
      value: t('whatsappText'),
      linkText: t('chatWhatsapp'),
      href: `https://wa.me/96565643999?text=${encodeURIComponent(
        t('whatsappMessage')
      )}`,
      iconBg: 'bg-[#25D366]' 
    },
  ];

  return (
    <main className="pt-24 pb-16 min-h-screen bg-[#FFF5F7] text-[#4A4A4A]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-[#FF69B4] uppercase tracking-[0.2em] text-sm font-bold mb-2">
            {t('getInTouch')}
          </p>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-black">
            {t('contactUs')}
          </h1>

          <p className="text-[#7D7D7D] text-lg max-w-2xl mx-auto">
            {t('contactSub')}
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="flex flex-col items-center text-center p-10 rounded-2xl bg-white border border-[#FFD1DC] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full group">
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full ${item.iconBg} flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 tracking-wide text-[#4A4A4A]">
                  {item.label}
                </h3>

                {/* Content */}
                <div className="flex-grow">
                  <p className="text-sm text-[#7D7D7D] leading-relaxed whitespace-pre-line mb-6">
                    {item.value}
                  </p>
                </div>

                {/* Link */}
                {item.linkText && item.href && (
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF69B4] font-semibold text-sm hover:text-[#D43790] flex items-center gap-2 transition-all underline underline-offset-4"
                  >
                    {item.linkText} <span>→</span>
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Contact;