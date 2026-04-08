export type ProductCategory = 'cakes' | 'floral' | 'juices';

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  category: ProductCategory;
  image: string;
  featured?: boolean;
}

const cakeNames = [
  { name: "SpongeBob Cake", nameAr: "كيك سبونج بوب", desc: "Fun SpongeBob themed cake for kids", descAr: "كيك سبونج بوب الممتع للأطفال" },
  { name: "Cocomelon Cake", nameAr: "كيك كوكوميلون", desc: "Adorable Cocomelon birthday cake", descAr: "كيك كوكوميلون الرائع لأعياد الميلاد" },
  { name: "Avengers Cake", nameAr: "كيك أفنجرز", desc: "Superhero themed Avengers cake", descAr: "كيك أفنجرز بطابع الأبطال الخارقين" },
  { name: "Spiderman Cake", nameAr: "كيك سبايدرمان", desc: "Amazing Spiderman themed cake", descAr: "كيك سبايدرمان المذهل" },
  { name: "Mermaid Cake", nameAr: "كيك حورية البحر", desc: "Magical mermaid themed cake", descAr: "كيك حورية البحر الساحر" },
  { name: "Football Cake", nameAr: "كيك كرة القدم", desc: "Sports football themed cake", descAr: "كيك بطابع كرة القدم الرياضي" },
  { name: "Girls Theme Mouna Cake", nameAr: "كيك مونا للبنات", desc: "Beautiful girls theme celebration cake", descAr: "كيك احتفال جميل بطابع البنات" },
  { name: "Boys Theme Cake", nameAr: "كيك طابع الأولاد", desc: "Fun boys themed celebration cake", descAr: "كيك احتفال ممتع بطابع الأولاد" },
  { name: "Naked Cake", nameAr: "كيك نيكد", desc: "Rustic elegant naked cake", descAr: "كيك نيكد أنيق وعصري" },
  { name: "Floral Cake", nameAr: "كيك الزهور", desc: "Elegant cake with floral decorations", descAr: "كيك أنيق مزين بالزهور", featured: true },
  { name: "Wedding Cake", nameAr: "كيك الزفاف", desc: "Premium multi-tier wedding cake", descAr: "كيك زفاف فاخر متعدد الطبقات", featured: true },
  { name: "Birthday Queen Cake", nameAr: "كيك ملكة عيد الميلاد", desc: "Luxurious birthday queen themed cake", descAr: "كيك فاخر بطابع ملكة عيد الميلاد" },
  { name: "Guitar Theme Cake", nameAr: "كيك الجيتار", desc: "Musical guitar themed cake", descAr: "كيك موسيقي بطابع الجيتار" },
  { name: "Donut Cake", nameAr: "كيك الدونات", desc: "Fun donut shaped celebration cake", descAr: "كيك احتفال ممتع بشكل الدونات" },
  { name: "Sports Cake", nameAr: "كيك رياضي", desc: "Dynamic sports themed cake", descAr: "كيك رياضي ديناميكي" },
  { name: "Barbie Cake", nameAr: "كيك باربي", desc: "Pink Barbie themed dream cake", descAr: "كيك باربي الوردي الحالم" },
  { name: "Engagement Cake", nameAr: "كيك الخطوبة", desc: "Elegant engagement celebration cake", descAr: "كيك خطوبة أنيق" },
  { name: "Chef Theme Cake", nameAr: "كيك الشيف", desc: "Creative chef themed cake", descAr: "كيك إبداعي بطابع الشيف" },
  { name: "Princess Castle Cake", nameAr: "كيك قلعة الأميرة", desc: "Fairy tale princess castle cake", descAr: "كيك قلعة الأميرة الخيالي" },
  { name: "Unicorn Cake", nameAr: "كيك يونيكورن", desc: "Magical unicorn rainbow cake", descAr: "كيك يونيكورن قوس قزح السحري", featured: true },
  { name: "Dinosaur Cake", nameAr: "كيك ديناصور", desc: "Jurassic dinosaur themed cake", descAr: "كيك ديناصور من العصر الجوراسي" },
  { name: "Safari Cake", nameAr: "كيك سفاري", desc: "Wild safari adventure cake", descAr: "كيك مغامرة السفاري البرية" },
  { name: "Galaxy Cake", nameAr: "كيك المجرة", desc: "Cosmic galaxy themed cake", descAr: "كيك كوني بطابع المجرة" },
  { name: "Balloon Cake", nameAr: "كيك البالونات", desc: "Colorful balloon celebration cake", descAr: "كيك احتفال بالبالونات الملونة" },
  { name: "Graduation Cake", nameAr: "كيك التخرج", desc: "Proud graduation celebration cake", descAr: "كيك احتفال التخرج الفخور" },
];

const juiceList = [
  { name: "Burning Fat", nameAr: "حرق الدهون", desc: "Pineapple, kiwi, ginsbill and grapefruit", descAr: "أناناس، كيوي، جنسبيل وجريب فروت", featured: true },
  { name: "Elmudamir", nameAr: "المدمر", desc: "Fruit pieces with mango juice, avocado pieces, cream, honey and nuts", descAr: "قطع فواكه مع عصير مانجو، قطع أفوكادو، كريمة، عسل ومكسرات" },
  { name: "Mango Farghali", nameAr: "مانجو فرغلي", desc: "Natural mango tastes great", descAr: "مانجو طبيعي بطعم رائع" },
  { name: "Watermelon", nameAr: "بطيخ", desc: "Refreshing summer juice", descAr: "عصير صيفي منعش" },
  { name: "Barcelona", nameAr: "برشلونة", desc: "Avocado juice with mango, strawberry, pomegranate, honey and nuts", descAr: "عصير أفوكادو مع مانجو، فراولة، رمان، عسل ومكسرات", featured: true },
  { name: "Awar Qalb", nameAr: "عوار قلب", desc: "Best in Kuwait — mango, strawberry, vanilla ice cream", descAr: "الأفضل في الكويت — مانجو، فراولة، آيس كريم فانيلا" },
  { name: "Samadi Juice", nameAr: "عصير صمادي", desc: "Mango juice with ice cream and fruit slices", descAr: "عصير مانجو مع آيس كريم وشرائح فواكه" },
  { name: "Orange Juice", nameAr: "عصير البرتقال", desc: "Fresh vitamin C rich juice", descAr: "عصير طازج غني بفيتامين سي" },
  { name: "Aloustra", nameAr: "الوسترا", desc: "Scrambled ice cream with oreo", descAr: "آيس كريم مخفوق مع أوريو" },
  { name: "Matcha Milkshake", nameAr: "ميلك شيك ماتشا", desc: "Matcha tea with vanilla ice cream", descAr: "شاي ماتشا مع آيس كريم فانيلا" },
  { name: "Meci", nameAr: "ميسي", desc: "Strawberry + mango + caramel ice cream", descAr: "فراولة + مانجو + آيس كريم كراميل" },
  { name: "Avocado Honey Nuts", nameAr: "أفوكادو عسل مكسرات", desc: "Avocado, honey and nuts", descAr: "أفوكادو، عسل ومكسرات" },
];

const floralList = [
  { name: "Rose Elegance Bouquet", nameAr: "باقة أناقة الورد", desc: "Premium red and pink roses arrangement", descAr: "تنسيق ورد أحمر ووردي فاخر", featured: true },
  { name: "White Lily Bouquet", nameAr: "باقة الزنبق الأبيض", desc: "Pure white lilies with greenery", descAr: "زنبق أبيض نقي مع خضرة" },
  { name: "Sunflower Delight", nameAr: "بهجة عباد الشمس", desc: "Bright sunflower arrangement", descAr: "تنسيق عباد شمس مشرق" },
  { name: "Wedding Bouquet Classic", nameAr: "باقة زفاف كلاسيكية", desc: "Elegant wedding bridal bouquet", descAr: "باقة عروس زفاف أنيقة", featured: true },
  { name: "Chocolate Bouquet", nameAr: "باقة شوكولاتة", desc: "Premium chocolate and flower combo", descAr: "مزيج فاخر من الشوكولاتة والزهور" },
  { name: "Balloon Bouquet", nameAr: "باقة بالونات", desc: "Festive balloon and flower arrangement", descAr: "تنسيق بالونات وزهور احتفالي" },
  { name: "Floral Tray Arrangement", nameAr: "تنسيق صينية زهور", desc: "Elegant floral tray for gifting", descAr: "صينية زهور أنيقة للإهداء" },
  { name: "Peony Paradise", nameAr: "جنة الفاوانيا", desc: "Luxurious peony flower bouquet", descAr: "باقة زهور فاوانيا فاخرة" },
  { name: "Orchid Dream", nameAr: "حلم الأوركيد", desc: "Exotic orchid arrangement", descAr: "تنسيق أوركيد غريب" },
  { name: "Tulip Festival", nameAr: "مهرجان التوليب", desc: "Colorful tulip bouquet", descAr: "باقة توليب ملونة" },
  { name: "Mixed Garden Bouquet", nameAr: "باقة الحديقة المختلطة", desc: "Seasonal mixed flower bouquet", descAr: "باقة زهور موسمية مختلطة" },
  { name: "Lavender Bliss", nameAr: "نعيم اللافندر", desc: "Calming lavender arrangement", descAr: "تنسيق لافندر مهدئ" },
  { name: "Royal Flower Box", nameAr: "صندوق الزهور الملكي", desc: "Luxury flower box arrangement", descAr: "تنسيق صندوق زهور فاخر" },
  { name: "Tropical Paradise", nameAr: "جنة استوائية", desc: "Exotic tropical flower mix", descAr: "مزيج زهور استوائية غريبة" },
  { name: "Baby Shower Bouquet", nameAr: "باقة استقبال المولود", desc: "Soft pastel baby shower arrangement", descAr: "تنسيق باستيل ناعم لاستقبال المولود" },
];

export const products: Product[] = [
  ...cakeNames.map((c, i) => ({
    id: `cake-${i + 1}`,
    name: c.name,
    nameAr: c.nameAr,
    description: c.desc,
    descriptionAr: c.descAr,
    price: 15 + Math.floor(Math.random() * 35),
    category: 'cakes' as ProductCategory,
    image: `/placeholder.svg`,
    featured: (c as any).featured || false,
  })),
  ...juiceList.map((j, i) => ({
    id: `juice-${i + 1}`,
    name: j.name,
    nameAr: j.nameAr,
    description: j.desc,
    descriptionAr: j.descAr,
    price: 2 + Math.floor(Math.random() * 5),
    category: 'juices' as ProductCategory,
    image: `/placeholder.svg`,
    featured: (j as any).featured || false,
  })),
  ...floralList.map((f, i) => ({
    id: `floral-${i + 1}`,
    name: f.name,
    nameAr: f.nameAr,
    description: f.desc,
    descriptionAr: f.descAr,
    price: 10 + Math.floor(Math.random() * 40),
    category: 'floral' as ProductCategory,
    image: `/placeholder.svg`,
    featured: (f as any).featured || false,
  })),
];
