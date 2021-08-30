const qs = (selector) => document.querySelector(selector);

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = qs('#ingredients');
list.setAttribute('class', 'ingredients');

const allIngredients = ingredients.forEach(all => {
  const listItem = document.createElement('li');
  list.append(listItem);
  listItem.textContent = all;
  return listItem.setAttribute('class', 'item');
});
