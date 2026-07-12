export const MENU_ITEMS_QUERY = `*[_type == "menuItem"] | order(_createdAt desc) {
  _id,
  title,
  description,
  price,
  image
}`;
