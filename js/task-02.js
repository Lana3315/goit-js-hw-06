const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function addList(array) {
  const list = document.querySelector(`#ingredients`)
  const liArray = [];
  array.forEach(element => {
    const item = document.createElement(`li`)
    item.className = `item`
    item.textContent = element
    liArray.push(item);
  
  });
 list.append(...liArray)
}
 addList(ingredients)

