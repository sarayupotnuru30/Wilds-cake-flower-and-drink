import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

const CartPage = () => {
  const { lang, t } = useLanguage();
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  const checkoutMsg = encodeURIComponent(
    `Hi, I want to order from Wilds Cake Flower & Drink.\n\n${items.map(i => `• ${i.product.name} x${i.quantity} — ${i.product.price * i.quantity}`).join('\n')}\n\nTotal: ${totalPrice}`
  );

  if (items.length === 0) {
    return (
      <main className="pt-24 pb-16 min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6">
          <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto" />
          <h1 className="font-heading text-2xl font-bold text-foreground">{t('emptyCart')}</h1>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-luxury"
          >
            {t('continueShopping')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-8">{t('yourCart')}</h1>

        <div className="space-y-4">
          {items.map(item => {
            const name = lang === 'ar' ? item.product.nameAr : item.product.name;
            return (
              <div key={item.product.id} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 shadow-card">
                <img src={item.product.image} alt={name} className="w-20 h-20 object-cover rounded-lg bg-secondary" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-card-foreground truncate">{name}</h3>
                  <p className="text-sm text-muted-foreground">{item.product.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{item.product.price * item.quantity}</p>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-destructive text-xs flex items-center gap-1 mt-1 hover:underline">
                    <Trash2 className="w-3 h-3" /> {t('remove')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total & Checkout */}
        <div className="mt-8 p-6 bg-card rounded-xl border border-border/50 shadow-card">
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-heading font-semibold">{t('total')}</span>
            <span className="text-2xl font-bold text-primary">{totalPrice}</span>
          </div>
          <a
            href={`https://wa.me/96565643999?text=${checkoutMsg}`}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-luxury hover:scale-[1.02]"
          >
            {t('checkout')} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
