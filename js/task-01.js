// const categoriesQuantity = document.querySelectorAll('.item');
// console.log(`Number of categories: ${categoriesQuantity.length}`);

// categoriesQuantity.forEach(item => {
//     const categoryName = item.querySelector('h2').textContent;
//     const categoryElements = item.querySelectorAll('li').length;
//     console.log(`Category: ${categoryName}`);
//     console.log(`Elements: ${categoryElements}`);
// });

const categoriesList = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesList.children.length}`);

const items = categoriesList.querySelectorAll('.item');

items.forEach(item => {
    const categoryItemName = item.firstElementChild.textContent;
    const elementsQuantity = item.childNodes[3].children.length;
    console.log(`Category: ${categoryItemName}`);
    console.log(`Elements: ${elementsQuantity}`);
});



