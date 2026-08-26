import MenuItem from "./Menuitem";

const menuData = [
  {
    id: 1,
    name: "Buna",
    price: 80,
    description: "Traditional freshly roasted Ethiopian coffee",
    category: "Drink",
    emoji: "☕",
  },
  {
    id: 2,
    name: "Shiro",
    price: 150,
    description: "Slow-cooked spiced chickpea stew served with injera",
    category: "Main",
    emoji: "🍲",
  },
  {
    id: 3,
    name: "Special Chechebsa",
    price: 180,
    description: "Shredded flatbread fried with niter kibbeh and berbere",
    category: "Breakfast",
    emoji: "🥞",
  },
  {
    id: 4,
    name: "Beef Tibs",
    price: 280,
    description: "Sauteed beef cooked with onions, rosemary, and jalapeños",
    category: "Main",
    emoji: "🥩",
  },
  {
    id: 5,
    name: "Spris Juice",
    price: 90,
    description: "Layered fresh mango, avocado, and papaya juice",
    category: "Drink",
    emoji: "🥤",
  },
  {
    id: 6,
    name: "Ful",
    price: 130,
    description: "Mashed fava beans with olive oil, chopped onions, and berbere",
    category: "Breakfast",
    emoji: "🧆",
  },
  {
    id: 7,
    name: "Beyaynet",
    price: 200,
    description: "Vibrant combination platter of assorted vegan stews",
    category: "Main",
    emoji: "🥗",
  },
  {
    id: 8,
    name: "Baklaba",
    price: 110,
    description: "Sweet layered pastry filled with chopped nuts and honey syrup",
    category: "Dessert",
    emoji: "🥐",
  },
];

export default function Menu() {
  return (
    <main className="menu-container">
      <h2 className="menu-title">OUR MENU</h2>
      <section className="menu-grid">
        {menuData.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            category={item.category}
            emoji={item.emoji}
          />
        ))}
      </section>
    </main>
  );
}