import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const msg = encodeURIComponent("Hi, I want to order from Wilds Cake Flower & Drink.");
  return (
    <a
      href={`https://wa.me/96565643999?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-up"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
