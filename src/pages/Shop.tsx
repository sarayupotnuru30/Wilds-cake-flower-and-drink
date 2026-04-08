import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { products, type ProductCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ScrollReveal from '@/components/ScrollReveal';

const Shop = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ProductCategory | 'all'>('all');

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  const filters: { key: ProductCategory | 'all'; label: string }[] = [
    { key: 'all', label: t('filterAll') },
    { key: 'cakes', label: t('cakes') },
    { key: 'floral', label: t('floral') },
    { key: 'juices', label: t('juices') },
  ];

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{t('allProducts')}</h1>
          <p className="text-muted-foreground">Explore our premium collection</p>
        </ScrollReveal>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === f.key
                  ? 'bg-primary text-primary-foreground shadow-luxury'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
              }`}
            >
              {f.label}
              {f.key !== 'all' && (
                <span className="ml-1.5 opacity-60">
                  ({products.filter(p => f.key === 'all' || p.category === f.key).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product, i) => (
            <ScrollReveal key={product.id} delay={Math.min(i * 50, 400)}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;
