import { ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import type { Product } from '@/data/products';

const ProductCard = ({ product }: { product: Product }) => {
  const { lang, t } = useLanguage();
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    const name = lang === 'ar' ? product.nameAr : product.name;
    toast.success(`${name} ${t('added')}`, { duration: 2000 });
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
        <div className="pt-2">
          <button
            onClick={handleAdd}
            className="w-full flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 bg-primary text-primary-foreground hover:shadow-luxury hover:scale-105"
          >
            <ShoppingCart className="w-3.5 h-3.5" />{t('addToCart')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
