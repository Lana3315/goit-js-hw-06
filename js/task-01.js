const categoriesList = document.getElementById('categories');
const items = categoriesList.querySelectorAll('.item');

// console.log(items); 
// console.log(categoriesList); 

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);

  console.log(`Elements: ${item.querySelectorAll('li').length}`);

})