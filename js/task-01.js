const categoriesQuantity = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesQuantity.length}`);

categoriesQuantity.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li');
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements.length}`);
});

