import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import type { Product } from '@/data/products';

const ProductCard = ({ product }: { product: Product }) => {
  const { lang, t } = useLanguage();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const name = lang === 'ar' ? product.nameAr : product.name;
  const desc = lang === 'ar' ? product.descriptionAr : product.description;

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover-lift border border-border/50">
      {/* Image */}
      <div className="aspect-[3/4] bg-secondary overflow-hidden relative">
        <img
          src={product.image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-heading text-base font-semibold text-card-foreground line-clamp-1">{name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{desc}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-primary">{product.price} KWD</span>
          <button
            onClick={handleAdd}
            disabled={added}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
              added
                ? 'bg-green-500 text-primary-foreground'
                : 'bg-primary text-primary-foreground hover:shadow-luxury hover:scale-105'
            }`}
          >
            {added ? <><Check className="w-3.5 h-3.5" />{t('added')}</> : <><ShoppingCart className="w-3.5 h-3.5" />{t('addToCart')}</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
