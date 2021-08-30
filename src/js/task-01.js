const qs = (selector) => document.querySelector(selector);

const categories = qs('#categories');
const countCategories = categories.children.length;
console.log(`Number of categories: ${countCategories}`);

for (let i = 0; i < countCategories; i += 1) {
    const title = categories.children[i].querySelector('h2');
    console.log(`\nCategory: ${title.textContent}`);

    const element = categories.children[i].querySelector('ul').children.length;
    console.log(`Elements: ${element}`);
}