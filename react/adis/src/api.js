export async function loadDishes(category, signal) {
  const response = await fetch("/dishes.json", { signal });

  if (!response.ok) {
    throw new Error(`Failed to load dishes (Status: ${response.status})`);
  }

  const data = await response.json();
  if (category && category !== "All") {
    return data.filter((dish) => dish.category === category);
  }

  return data;
}

export const categories = ["All", "Breakfast", "Mains", "Drinks"];