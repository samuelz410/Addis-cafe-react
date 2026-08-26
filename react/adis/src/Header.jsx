export default function Header() {
  const restaurantName = "Addis Cafe";
  const tagline = "Fresh Ethiopian Food & Coffee";
  const location = "📍 Bole, Addis Ababa";

  return (
    <header className="header">
      <h1>☕ {restaurantName}</h1>
      <p className="tagline">{tagline}</p>
      <p className="location">{location}</p>
    </header>
  );
}