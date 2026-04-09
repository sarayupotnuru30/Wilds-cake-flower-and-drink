export type ProductCategory = 'cakes' | 'floral' | 'juices';

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  category: ProductCategory;
  image: string;
  featured?: boolean;
}

const cakeNames = [
  { name: "SpongeBob Cake", nameAr: "كيك سبونج بوب", desc: "Fun SpongeBob themed cake for kids", descAr: "كيك سبونج بوب الممتع للأطفال", img: "/products/cakes/spongebob-cake.jpg" },
  { name: "Cocomelon Cake", nameAr: "كيك كوكوميلون", desc: "Adorable Cocomelon birthday cake", descAr: "كيك كوكوميلون الرائع لأعياد الميلاد", img: "/products/cakes/cocomelon-cake.jpg" },
  { name: "Avengers Cake", nameAr: "كيك أفنجرز", desc: "Superhero themed Avengers cake", descAr: "كيك أفنجرز بطابع الأبطال الخارقين", img: "/products/cakes/avengers-cake.jpg" },
  { name: "Spiderman Cake", nameAr: "كيك سبايدرمان", desc: "Amazing Spiderman themed cake", descAr: "كيك سبايدرمان المذهل", img: "/products/cakes/spiderman-cake.jpg" },
  { name: "Mermaid Cake", nameAr: "كيك حورية البحر", desc: "Magical mermaid themed cake", descAr: "كيك حورية البحر الساحر", img: "/products/cakes/mermaid-cake.jpg" },
  { name: "Football Cake", nameAr: "كيك كرة القدم", desc: "Sports football themed cake", descAr: "كيك بطابع كرة القدم الرياضي", img: "/products/cakes/football-cake.jpg" },
  { name: "Girls Theme Mouna Cake", nameAr: "كيك مونا للبنات", desc: "Beautiful girls theme celebration cake", descAr: "كيك احتفال جميل بطابع البنات", img: "/products/cakes/girls-theme-cake.jpg" },
  { name: "Boys Theme Cake", nameAr: "كيك طابع الأولاد", desc: "Fun boys themed celebration cake", descAr: "كيك احتفال ممتع بطابع الأولاد", img: "/products/cakes/boys-theme-cake.jpg" },
  { name: "Naked Cake", nameAr: "كيك نيكد", desc: "Rustic elegant naked cake", descAr: "كيك نيكد أنيق وعصري", img: "/products/cakes/naked-cake.jpg" },
  { name: "Floral Cake", nameAr: "كيك الزهور", desc: "Elegant cake with floral decorations", descAr: "كيك أنيق مزين بالزهور", featured: true, img: "/products/cakes/floral-cake.jpg" },
  { name: "Wedding Cake", nameAr: "كيك الزفاف", desc: "Premium multi-tier wedding cake", descAr: "كيك زفاف فاخر متعدد الطبقات", featured: true, img: "/products/cakes/wedding-cake.jpg" },
  { name: "Birthday Queen Cake", nameAr: "كيك ملكة عيد الميلاد", desc: "Luxurious birthday queen themed cake", descAr: "كيك فاخر بطابع ملكة عيد الميلاد", img: "/products/cakes/birthday-queen-cake.jpg" },
  { name: "Guitar Theme Cake", nameAr: "كيك الجيتار", desc: "Musical guitar themed cake", descAr: "كيك موسيقي بطابع الجيتار", img: "/products/cakes/guitar-theme-cake.jpg" },
  { name: "Donut Cake", nameAr: "كيك الدونات", desc: "Fun donut shaped celebration cake", descAr: "كيك احتفال ممتع بشكل الدونات", img: "/products/cakes/donut-cake.jpg" },
  { name: "Sports Cake", nameAr: "كيك رياضي", desc: "Dynamic sports themed cake", descAr: "كيك رياضي ديناميكي", img: "/products/cakes/sports-cake.jpg" },
  { name: "Barbie Cake", nameAr: "كيك باربي", desc: "Pink Barbie themed dream cake", descAr: "كيك باربي الوردي الحالم", img: "/products/cakes/barbie-cake.jpg" },
  { name: "Engagement Cake", nameAr: "كيك الخطوبة", desc: "Elegant engagement celebration cake", descAr: "كيك خطوبة أنيق", img: "/products/cakes/engagement-cake.jpg" },
  { name: "Chef Theme Cake", nameAr: "كيك الشيف", desc: "Creative chef themed cake", descAr: "كيك إبداعي بطابع الشيف", img: "/products/cakes/chef-theme-cake.jpg" },
  // { name: "Princess Castle Cake", nameAr: "كيك قلعة الأميرة", desc: "Fairy tale princess castle cake", descAr: "كيك قلعة الأميرة الخيالي", img: "/products/cakes/princess-castle-cake.jpg" },
  // { name: "Unicorn Cake", nameAr: "كيك يونيكورن", desc: "Magical unicorn rainbow cake", descAr: "كيك يونيكورن قوس قزح السحري", featured: true, img: "/products/cakes/unicorn-cake.jpg" },
  // { name: "Dinosaur Cake", nameAr: "كيك ديناصور", desc: "Jurassic dinosaur themed cake", descAr: "كيك ديناصور من العصر الجوراسي", img: "/products/cakes/dinosaur-cake.jpg" },
  // { name: "Safari Cake", nameAr: "كيك سفاري", desc: "Wild safari adventure cake", descAr: "كيك مغامرة السفاري البرية", img: "/products/cakes/safari-cake.jpg" },
  // { name: "Galaxy Cake", nameAr: "كيك المجرة", desc: "Cosmic galaxy themed cake", descAr: "كيك كوني بطابع المجرة", img: "/products/cakes/galaxy-cake.jpg" },
  // { name: "Balloon Cake", nameAr: "كيك البالونات", desc: "Colorful balloon celebration cake", descAr: "كيك احتفال بالبالونات الملونة", img: "/products/cakes/balloon-cake.jpg" },
  // { name: "Graduation Cake", nameAr: "كيك التخرج", desc: "Proud graduation celebration cake", descAr: "كيك احتفال التخرج الفخور", img: "/products/cakes/graduation-cake.jpg" },
];

const juiceList = [
  { name: "Burning Fat", nameAr: "حرق الدهون", desc: "Pineapple, kiwi, ginsbill and grapefruit", descAr: "أناناس، كيوي، جنسبيل وجريب فروت", featured: true, img: "/products/juices/burning-fat.jpg" },
  { name: "Elmudamir", nameAr: "المدمر", desc: "Fruit pieces with mango juice, avocado pieces, cream, honey and nuts", descAr: "قطع فواكه مع عصير مانجو، قطع أفوكادو، كريمة، عسل ومكسرات", img: "/products/juices/elmudamir.jpg" },
  { name: "Mango Farghali", nameAr: "مانجو فرغلي", desc: "Natural mango tastes great", descAr: "مانجو طبيعي بطعم رائع", img: "/products/juices/mango-farghali.jpg" },
  { name: "Watermelon", nameAr: "بطيخ", desc: "Refreshing summer juice", descAr: "عصير صيفي منعش", img: "/products/juices/watermelon.jpg" },
  { name: "Barcelona", nameAr: "برشلونة", desc: "Avocado juice with mango, strawberry, pomegranate, honey and nuts", descAr: "عصير أفوكادو مع مانجو، فراولة، رمان، عسل ومكسرات", featured: true, img: "/products/juices/barcelona.jpg" },
  { name: "Awar Qalb", nameAr: "عوار قلب", desc: "Best in Kuwait — mango, strawberry, vanilla ice cream", descAr: "الأفضل في الكويت — مانجو، فراولة، آيس كريم فانيلا", img: "/products/juices/awar-qalb.jpg" },
  { name: "Samadi Juice", nameAr: "عصير صمادي", desc: "Mango juice with ice cream and fruit slices", descAr: "عصير مانجو مع آيس كريم وشرائح فواكه", img: "/products/juices/samadi-juice.jpg" },
  { name: "Orange Juice", nameAr: "عصير البرتقال", desc: "Fresh vitamin C rich juice", descAr: "عصير طازج غني بفيتامين سي", img: "/products/juices/orange-juice.jpg" },
  { name: "Aloustra", nameAr: "الوسترا", desc: "Scrambled ice cream with oreo", descAr: "آيس كريم مخفوق مع أوريو", img: "/products/juices/aloustra.jpg" },
  { name: "Matcha Milkshake", nameAr: "ميلك شيك ماتشا", desc: "Matcha tea with vanilla ice cream", descAr: "شاي ماتشا مع آيس كريم فانيلا", img: "/products/juices/matcha-milkshake.jpg" },
  { name: "Meci", nameAr: "ميسي", desc: "Strawberry + mango + caramel ice cream", descAr: "فراولة + مانجو + آيس كريم كراميل", img: "/products/juices/meci.jpg" },
  { name: "Avocado Honey Nuts", nameAr: "أفوكادو عسل مكسرات", desc: "Avocado, honey and nuts", descAr: "أفوكادو، عسل ومكسرات", img: "/products/juices/avocado-honey-nuts.jpg" },
];

const floralList = [
  { name: "Classic Crimson Bouquet", nameAr: "باقة الكرمزي الكلاسيكية", desc: "Timeless red roses with delicate baby’s breath and greenery.", descAr: "ورود حمراء كلاسيكية مع زهور بيضاء رقيقة وأوراق خضراء.", featured: true, img: "/products/floral/rose-elegance.jpg" },
  { name: "Magenta Garden Vase", nameAr: "مزهرية الحديقة الأرجوانية", desc: "Textured pink roses and spray roses in a birthday vase.", descAr: "مزيج من الورود الوردية المتنوعة في مزهرية ميلاد أنيقة.", img: "/products/floral/white-lily.jpg" },
  { name: "Velvet Rose Basin", nameAr: "حوض الورد المخملي", desc: "Dense mound of premium red roses in a modern silver bowl.", descAr: "تنسيق فخم من الجوري الأحمر في وعاء فضي عصري.", img: "/products/floral/sunflower.jpg" },
  { name: "Verdant White Bloom Box", nameAr: "صندوق الزهور الأبيض والنضر", desc: "Ivory roses and lisianthus in a lime-green, ribbon-tied box.", descAr: "ورود عاجية ناعمة في صندوق أخضر زاهٍ مزين بشريط.", featured: true, img: "/products/floral/wedding-bouquet.jpg" },
  { name: "Lavender Mist Bouquet", nameAr: "باقة ضباب اللافندر", desc: "Romantic lavender roses and carnations in soft white paper.", descAr: "ورود لافندر وقرنفل رومانسية مغلفة بورق أبيض ناعم.", img: "/products/floral/chocolate-bouquet.jpg" },
  { name: "Blush & Petal Wrap", nameAr: "باقة بتلات الورد", desc: "Multitonal pink roses and eucalyptus with a satin bow.", descAr: "ورود وردية مع أغصان الأوكالبتوس وفيونكة ساتان رقيقة.", img: "/products/floral/balloon-bouquet.jpg" },
  // { name: "Floral Tray Arrangement", nameAr: "تنسيق صينية زهور", desc: "Elegant floral tray for gifting", descAr: "صينية زهور أنيقة للإهداء", img: "/products/floral/floral-tray.jpg" },
  // { name: "Peony Paradise", nameAr: "جنة الفاوانيا", desc: "Luxurious peony flower bouquet", descAr: "باقة زهور فاوانيا فاخرة", img: "/products/floral/peony-paradise.jpg" },
  // { name: "Orchid Dream", nameAr: "حلم الأوركيد", desc: "Exotic orchid arrangement", descAr: "تنسيق أوركيد غريب", img: "/products/floral/orchid-dream.jpg" },
  // { name: "Tulip Festival", nameAr: "مهرجان التوليب", desc: "Colorful tulip bouquet", descAr: "باقة توليب ملونة", img: "/products/floral/tulip-festival.jpg" },
  // { name: "Mixed Garden Bouquet", nameAr: "باقة الحديقة المختلطة", desc: "Seasonal mixed flower bouquet", descAr: "باقة زهور موسمية مختلطة", img: "/products/floral/mixed-garden.jpg" },
  // { name: "Lavender Bliss", nameAr: "نعيم اللافندر", desc: "Calming lavender arrangement", descAr: "تنسيق لافندر مهدئ", img: "/products/floral/lavender-bliss.jpg" },
  // { name: "Royal Flower Box", nameAr: "صندوق الزهور الملكي", desc: "Luxury flower box arrangement", descAr: "تنسيق صندوق زهور فاخر", img: "/products/floral/royal-flower-box.jpg" },
  // { name: "Tropical Paradise", nameAr: "جنة استوائية", desc: "Exotic tropical flower mix", descAr: "مزيج زهور استوائية غريبة", img: "/products/floral/tropical-paradise.jpg" },
  // { name: "Baby Shower Bouquet", nameAr: "باقة استقبال المولود", desc: "Soft pastel baby shower arrangement", descAr: "تنسيق باستيل ناعم لاستقبال المولود", img: "/products/floral/baby-shower.jpg" },
];

export const products: Product[] = [
  ...cakeNames.map((c, i) => ({
    id: `cake-${i + 1}`,
    name: c.name,
    nameAr: c.nameAr,
    description: c.desc,
    descriptionAr: c.descAr,
    category: 'cakes' as ProductCategory,
    image: c.img,
    featured: (c as any).featured || false,
  })),
  ...juiceList.map((j, i) => ({
    id: `juice-${i + 1}`,
    name: j.name,
    nameAr: j.nameAr,
    description: j.desc,
    descriptionAr: j.descAr,
    category: 'juices' as ProductCategory,
    image: j.img,
    featured: (j as any).featured || false,
  })),
  ...floralList.map((f, i) => ({
    id: `floral-${i + 1}`,
    name: f.name,
    nameAr: f.nameAr,
    description: f.desc,
    descriptionAr: f.descAr,
    category: 'floral' as ProductCategory,
    image: f.img,
    featured: (f as any).featured || false,
  })),
];
