export default function CategoryBar({ categories, selectedCategory, onSelect }) {
  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`chip ${selectedCategory === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}