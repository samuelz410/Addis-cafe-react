export default function MenuItem({ name, price, description, category, emoji }) {
  const priceWithVat = price * 1.15;

  return (
    <article className={`menu-card category-${category.toLowerCase()}`}>
      <div className="card-header">
        <h3>
          <span className="emoji">{emoji}</span> {name}
        </h3>
        <span className={`badge badge-${category.toLowerCase()}`}>
          {category}
        </span>
      </div>
      <p className="description">{description}</p>
      <div className="card-footer">
        <span className="price">{price} ETB</span>
        <span className="vat-price">({priceWithVat.toFixed(2)} ETB incl. VAT)</span>
      </div>
    </article>
  );
}